import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alugar',
  templateUrl: './alugar.page.html',
  styleUrls: ['./alugar.page.scss'],
})
export class AlugarPage implements OnInit {

  imoveis: Array<Imovel>;
 
  constructor() { }

  ngOnInit() {
    this.getImoveis();
  };
 
  getImoveis() {
    this.imoveis = [
      new Imovel(1,'Apartamento com 2 Quartos', 295.000, 'Rua Augusta', '400', 'Consolação', 'São Paulo', 
      'SP', 'https://s2.glbimg.com/S68qSscRNuEDNZ2vavmrtyUWfA8=/512x320/smart/e.glbimg.com/og/ed/f/original/2018/12/10/apartamento-pequeno-doob-arquitetura09.jpg',
      '45',2,1,'04905-000')]
  }}
 
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
 
  constructor(id: number,nome: string, valor: number, logradouro: string, numero: string, bairro: string, 
    cidade: string, estado: string, img: string, m2: string, numeroQuarto: number, numeroVagas: number, cep: string) {
    this.id = id;
    this.nome = nome;
    this.valor = valor;
    this.logradouro = logradouro;
    this.numero = numero;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
    this.img = img;
    this.m2 = m2;
    this.numeroQuarto = numeroQuarto;
    this.numeroVagas = numeroVagas;
    this.cep = cep;
  }
 
  public getEndereco() {
    return this.logradouro + ', ' + this.numero + ' - ' + this.bairro + ', ' + this.cidade + ' - ' + this.estado;
  }

  public getDetalhes() {
    return this.m2 + 'm² - ' + this.numeroQuarto + ' Quartos - ' + this.numeroVagas + ' Vagas';
  }
}