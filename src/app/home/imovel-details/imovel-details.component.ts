import { Imovel } from './../../services/imovel.service';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-imovel-details',
  templateUrl: './imovel-details.component.html',
  styleUrls: ['./imovel-details.component.scss'],
})
export class ImovelDetailsComponent implements OnInit {

  @Input() imovel: Imovel;

  public getEndereco() {
    // tslint:disable-next-line: max-line-length
    return this.imovel.logradouro + ', ' + this.imovel.numero + ' - ' + this.imovel.bairro + ', ' + this.imovel.cidade + ' - ' + this.imovel.estado;
  }

  public getDetalhes() {
    return this.imovel.m2 + 'm² - ' + this.imovel.numeroQuarto + ' Quartos - ' + this.imovel.numeroVagas + ' Vagas';
  }


  constructor() {
  }

  ngOnInit() {
  }
}
