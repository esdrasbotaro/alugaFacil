import { Imovel } from './../alugar/alugar.page';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

public novoImovel: Imovel = {
  id: 0,
  nome: '',
  valor: 0,
  like: false,
  cep: '',
  logradouro: '',
  numero: '',
  bairro: '',
  cidade: '',
  estado: '',
  img: '',
  m2: '',
  numeroQuarto: 0,
  numeroVagas: 0,
  getEndereco:null,
  getDetalhes:null,
  mobiliado: false, 
  proxEstacao: false, 
  descricao: null
}

  constructor() { }

  ngOnInit() {
  }

  public handleFormSubmmit(){
    console.log('Imovel Cadastrado com Sucesso!', this.novoImovel);
  }

}
