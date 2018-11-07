import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActividadPersonaHttpProvider } from '../../providers/actividad-persona-http/actividad-persona-http';
import { BuscarActividadPage } from '../buscar-actividad/buscar-actividad';
import { WelcomePage } from '../welcome/welcome';

/**
 * Generated class for the ActividadPersonaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-actividad-persona',
  templateUrl: 'actividad-persona.html',
})
export class ActividadPersonaPage {
  actividades = []
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private activdad_personahttp: ActividadPersonaHttpProvider) {
  }

  ionViewDidLoad(){
    this.activdad_personahttp.consultar().subscribe(
      (datos: any[]) => {
        console.log("actividades "+datos);        
          this.actividades= datos;
      }
    );
  }

  cerrarSesion(){
    localStorage.removeItem("id");
    localStorage.removeItem("jwt");
    localStorage.removeItem("personaLE");
     this.navCtrl.setRoot(WelcomePage)
    }

  buscarActividadAsociar(){
    console.log("esta en buscarActividadAsociar");
    
    this.navCtrl.push(BuscarActividadPage)
  }
}
