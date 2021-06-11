import { Component, OnInit, Input } from '@angular/core';
import { Ofertas } from 'src/app/model/ofertas.model';
import { OfertasService } from '../../Services/ofertas.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.sass']
})
export class OfferComponent implements OnInit {
@Input() ofertas: any;
public ofertaFiltrada: any[];
public caracteristicas: any[];
// public pruebaid: string;
  constructor(private ofertasService: OfertasService) {
    // this.pruebaid = 'PO_Tec7009695';
    this.ofertaFiltrada = [];
    this.caracteristicas = [];
  }

  ngOnInit(): void {

      // console.log(this.ofertas);
  }

  ofertaFilter(offerId: any): any{
    console.log(typeof offerId.target.value);
    this.ofertaFiltrada = this.ofertasService.filterOffer(offerId.target.value);
    // console.log(this.ofertafiltrada);
    // console.log(pruebaid);


  }


}
