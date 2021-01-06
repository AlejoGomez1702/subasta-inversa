import { Producto } from "./producto";

export interface Inventario
{
    uid: string;    
    producto: Producto;
    uidUsuario: string;
    valor: number;
}
