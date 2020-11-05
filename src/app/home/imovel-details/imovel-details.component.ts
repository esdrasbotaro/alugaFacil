import { Imovel } from './../alugar/alugar.page';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-imovel-details',
  templateUrl: './imovel-details.component.html',
  styleUrls: ['./imovel-details.component.scss'],
})
export class ImovelDetailsComponent implements OnInit {

  @Input() imovel: Imovel;

  constructor() {
  }

  ngOnInit() {
  }
}
