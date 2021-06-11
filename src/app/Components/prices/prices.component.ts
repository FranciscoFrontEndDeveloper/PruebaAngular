import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.sass']
})
export class PricesComponent implements OnInit {

@Input() productOffering: any = ""

  constructor() { }

  ngOnInit(): void {
  }
}
