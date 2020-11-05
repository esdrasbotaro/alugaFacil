import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImovelDetailsComponent } from '../imovel-details/imovel-details.component';

@Component({
  selector: 'app-alugar',
  templateUrl: './alugar.page.html',
  styleUrls: ['./alugar.page.scss'],
})
export class AlugarPage implements OnInit {

  imoveis: Array<Imovel>;
 
  constructor(private modalController: ModalController) { }

  async showDetails(imovel: Imovel){
    const modal = await this.modalController.create({
      component: ImovelDetailsComponent,
      componentProps:{imovel}
    });

    await modal.present();

  }

  ngOnInit() {
    this.getImoveis();
  };
 
  getImoveis() {
    this.imoveis = [
      new Imovel(1,'Apartamento com 2 Quartos', 3000, 'Rua Augusta', '400', 'Consolação', 'São Paulo', 
      'SP', 'https://s2.glbimg.com/S68qSscRNuEDNZ2vavmrtyUWfA8=/512x320/smart/e.glbimg.com/og/ed/f/original/2018/12/10/apartamento-pequeno-doob-arquitetura09.jpg',
      '45',2,1,'04905-000',false,true,'Lindo apartamento com dois quartos com espaço aberto e linda sacada.'),
      new Imovel(2,'Casa com 3 Quartos', 4000, 'Rua Paim', '287', 'Bela Vista', 'São Paulo', 
      'SP', 'https://www.queopsimobiliaria.com.br/foto_/2020/2522/barretos-casa-padrao-fortaleza-10-08-2020_12-26-47-0.jpg',
      '70',3,2,'04570-010',true,false,'Casa espaçosa, mobiliada e bem localizada perto de pontos de interesse como teatro Renault e afins.')
    ]
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
  mobiliado: boolean;
  proxEstacao: boolean;
  descricao: string;
  
 
  constructor(id: number,nome: string, valor: number, logradouro: string, numero: string, bairro: string, 
    cidade: string, estado: string, img: string, m2: string, numeroQuarto: number, numeroVagas: number, cep: string,
    mobiliado: boolean, proxEstacao: boolean, descricao: string) {
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
    this.mobiliado = mobiliado;
    this.proxEstacao = proxEstacao;
    this.descricao = descricao;
  }
 
  public getEndereco() {
    return this.logradouro + ', ' + this.numero + ' - ' + this.bairro + ', ' + this.cidade + ' - ' + this.estado;
  }

  public getDetalhes() {
    return this.m2 + 'm² - ' + this.numeroQuarto + ' Quartos - ' + this.numeroVagas + ' Vagas';
  }
}