import { Component, OnInit } from '@angular/core';
import { Configuracion } from '../models/configuracion.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  configuracion: Configuracion = {
    avace: 0,
    nombre: '',
    avatar: 0
  };
  constructor() { }

  ngOnInit() { }

  async ionViewWillEnter() {
    let datosConfiguracion: any = await localStorage.getItem('WR-configuracionDatos');
    this.configuracion = JSON.parse(datosConfiguracion);
  }

  tomeAgua() {
    if(this.configuracion.avace < 8){
      this.configuracion.avace++;
      localStorage.setItem('WR-configuracionDatos', JSON.stringify(this.configuracion));
    }
  }

}
