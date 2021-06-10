import { Injectable } from '@angular/core';
import { OFERTAS } from '../ofertas/ofertas.db';
@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  constructor() { }

  getAllOfertas(): any{
    return OFERTAS;
  }
}
