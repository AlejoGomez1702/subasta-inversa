import { Producto } from "./producto";

export interface Subasta
{
    uid?: string;    
    detalle: string;
    valorMaximo: number;
    estado: boolean;
    fechaInicio: Date;
    fechaFin?: Date;
    producto: Producto;
    uidUsuario: string;
}
