import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { ActividadPersonaPage } from '../actividad-persona/actividad-persona';
import { PersonaHttpProvider } from '../../providers/persona-http/persona-http';
import { ActividadPersonaHttpProvider } from '../../providers/actividad-persona-http/actividad-persona-http';

/**
 * Generated class for the DetalleActividadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detalle-actividad',
  templateUrl: 'detalle-actividad.html',
})
export class DetalleActividadPage {
  actividadBus = []
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private actividadPersonahttp: ActividadPersonaHttpProvider) {
  }

  ionViewDidLoad() {
    console.log("2. " + localStorage.getItem('actividadBus'));    
    this.actividadBus =JSON.parse(localStorage.getItem('actividadBus'));
    console.log("3. "+ this.actividadBus);
    
    console.log('ionViewDidLoad DetalleActividadPage');
  }

  cerrarSesion(){
    localStorage.removeItem("id");
    localStorage.removeItem("jwt");
    localStorage.removeItem("personaLE");
    localStorage.removeItem("actividadBus");
     this.navCtrl.setRoot(WelcomePage)
    }

    asociarActividad(){
      this.actividadPersonahttp.asociarPersonas().subscribe(
        (datos)=>{          
          this.navCtrl.push(ActividadPersonaPage)  
          // this.tareas.push(datos)
        }
      )
    }

}
