import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {

  model: any = {};
  titulo: '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // CON navParams.data LLEGAN LOS PARAMETROS DESDE LA VISTA ANTERIOR
    this.model = this.navParams.data.datos;
    this.titulo = this.navParams.data.titulo;
  }

  ionViewDidLoad() {
  }

}
