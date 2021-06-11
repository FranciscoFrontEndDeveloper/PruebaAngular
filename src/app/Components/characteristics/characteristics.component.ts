import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.sass']
})
export class CharacteristicsComponent implements OnInit {
@Input() ofertas: any;
  constructor() { }

  ngOnInit(): void {

      console.log(this.ofertas);
  }

}
