import { Injectable } from '@angular/core';
import { OFERTAS } from '../ofertas/ofertas.db';
@Injectable({
  providedIn: 'root'
})
export class OfertasService {
public arrayFilterOffers: any;
public arrayFilterOffer: any;

  constructor() { }

  getAllOfertas(): any{
    // console.log(OFERTAS);
    return OFERTAS;
  }


  filterOffer(OfferId: string): any {
    this.arrayFilterOffers = this.getAllOfertas();
    return this.arrayFilterOffers.filter((filter: any) => filter.id === OfferId);
  }
}


