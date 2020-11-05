import { ImovelService, Imovel } from './../../services/imovel.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  public imovel: Imovel;

  constructor(
    private imovelService: ImovelService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.imovel = this.imovelService.empty();
  }

  save() {
    this.imovelService.create(this.imovel);
    this.navCtrl.back();
  }

}
