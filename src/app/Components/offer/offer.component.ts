import { Component, OnInit, Input } from '@angular/core';
import { OfertasService } from '../../Services/ofertas.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.sass']
})
export class OfferComponent implements OnInit {
@Input() ofertas: any;
public ofertaFiltrada: any[];



  constructor(private ofertasService: OfertasService) {

    this.ofertaFiltrada = [];

  }

  ngOnInit(): void {
  }

  ofertaFilter(offerId: any): any{
    this.ofertaFiltrada = this.ofertasService.filterOffer(offerId.target.value);
  }


}
