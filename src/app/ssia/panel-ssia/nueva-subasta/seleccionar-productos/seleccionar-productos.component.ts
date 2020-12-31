import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Producto } from 'src/app/interfaces/producto';
import { DatabaseService } from 'src/app/servicios/database.service';

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
    public databaseService: DatabaseService
  ) { }

  ngOnInit(): void 
  {
    // this.obtenerProductos();
    this.databaseService.obtenerProductos();
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
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

  // obtenerProductos()
  // {
  //   this.databaseService.obtenerProductos();
  //   this.productos = this.databaseService.productos;
  //   console.log('Componente');
  //   console.log(this.productos);
  // }



}
