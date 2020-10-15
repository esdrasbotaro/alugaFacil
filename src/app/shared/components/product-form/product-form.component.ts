import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export class Imovel {
  id: number;
  nome: string;
  valor: number;
  like: boolean;
  cep: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  img: string;
  m2: string;
  numeroQuarto: number;
  numeroVagas: number;
}

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {

  @Input() public imovel: Imovel;
  @Output() public formSubmitted = new EventEmitter();

  constructor() { }

  ngOnInit() {}

}
