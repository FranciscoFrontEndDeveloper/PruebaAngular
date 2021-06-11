import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.sass']
})
export class PricesComponent implements OnInit {
@Input() ofertas: any;
  constructor() { }

  ngOnInit(): void {

      // console.log(this.ofertas);
  }

}
