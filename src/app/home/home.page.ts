import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  imoveis: Array<Imovel>;
 
  constructor() { }

  ngOnInit() {
    this.getImoveis();
  };
 
  getImoveis() {
    this.imoveis = [
      new Imovel(1,'Apartamento com 2 Quartos', 295.000, 'Rua Augusta', '400', 'Consolação', 'São Paulo', 'SP', 'https://s2.glbimg.com/S68qSscRNuEDNZ2vavmrtyUWfA8=/512x320/smart/e.glbimg.com/og/ed/f/original/2018/12/10/apartamento-pequeno-doob-arquitetura09.jpg')]
      
  }}
 
export class Imovel {
  id: number;
  nome: string;
  valor: number;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  img: string;
 
  constructor(id: number,nome: string, valor: number, logradouro: string, numero: string, bairro: string, cidade: string, estado: string, img: string) {
    this.id = id;
    this.nome = nome;
    this.valor = valor;
    this.logradouro = logradouro;
    this.numero = numero;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
    this.img = img;
  }
 
  public getEndereco() {
    return this.logradouro + ', ' + this.numero + ' - ' + this.bairro + ', ' + this.cidade + ' - ' + this.estado;
  }
}