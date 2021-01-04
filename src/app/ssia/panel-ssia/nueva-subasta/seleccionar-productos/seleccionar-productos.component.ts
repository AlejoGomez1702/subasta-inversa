import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Producto } from 'src/app/interfaces/producto';
import { DatabaseService } from 'src/app/servicios/database.service';
import { SubastaService } from 'src/app/servicios/subasta.service';

@Component({
  selector: 'app-seleccionar-productos',
  templateUrl: './seleccionar-productos.component.html',
  styleUrls: ['./seleccionar-productos.component.scss']
})
export class SeleccionarProductosComponent implements OnInit 
{
  closeResult = '';
  // public productos: Producto[];

  constructor(
    private modalService: NgbModal,
    public databaseService: DatabaseService,
    private subastaService: SubastaService
  ) { }

  ngOnInit(): void 
  {
    // this.obtenerProductos();
    this.databaseService.obtenerProductos();
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Producto: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  selecctionarProducto(producto: Producto)
  {
    this.subastaService.producto = producto;
  } 

  // obtenerProductos()
  // {
  //   this.databaseService.obtenerProductos();
  //   this.productos = this.databaseService.productos;
  //   console.log('Componente');
  //   console.log(this.productos);
  // }



}
