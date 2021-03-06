import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../../Services/ofertas.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
public ofertas: any;
  constructor(private ofertasService: OfertasService) {
   }

  ngOnInit(): void {
    this.ofertas = this.ofertasService.getAllOfertas();
  }

}
