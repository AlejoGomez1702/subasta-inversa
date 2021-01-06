import { Proveedor } from "./proveedor";
import { Subasta } from "./subasa";

export interface Oferta
{
    uid: string;    
    proveedor: Proveedor,
    subasta: Subasta,
    valor: number
    // cantidadMinima: number;
}
