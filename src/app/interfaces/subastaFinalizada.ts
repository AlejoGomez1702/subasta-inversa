import { Oferta } from "./oferta";
import { Subasta } from "./subasa";

export interface SubastaFinalizada
{
    uid: string;
    oferta: Oferta;
    subasta: Subasta;
}
