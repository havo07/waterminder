import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Configuracion } from '../models/configuracion.model';
import OneSignal from 'onesignal-cordova-plugin';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  formulario: Configuracion = {
    nombre: '',
    avace: 0,
    avatar: 0
  };
  constructor(
    private router: Router
  ) {
    try {
      OneSignal.initialize(environment.keyOneSingal);
      OneSignal.Notifications.requestPermission(true).then((success: Boolean) => {
        console.log("Notification permission granted " + success);
      });
    } catch (error) {
      console.log('Error con OneSignal');
    }
  }

  guardarConfiguracion() {
    localStorage.setItem('WR-configuracion', 'true');
    localStorage.setItem('WR-configuracionDatos', JSON.stringify(this.formulario));
    this.router.navigateByUrl( '/main' );
  }

}
