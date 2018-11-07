import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { ActividadHttpProvider } from '../../providers/actividad-http/actividad-http';
import { ActividadPersonaPage } from '../actividad-persona/actividad-persona';
import { DetalleActividadPage } from '../detalle-actividad/detalle-actividad';

/**
 * Generated class for the BuscarActividadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-buscar-actividad',
  templateUrl: 'buscar-actividad.html',
})
export class BuscarActividadPage {
  actividad ={
    descripcion:''
  }

  actividades = []
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private activdadhttp: ActividadHttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscarActividadPage');
  }

  cerrarSesion(){
    localStorage.removeItem("id");
    localStorage.removeItem("jwt");
    localStorage.removeItem("personaLE");
    localStorage.removeItem("actividadBus");
     this.navCtrl.setRoot(WelcomePage)
    }

    buscarActi(){
      this.activdadhttp.buscarActividades(this.actividad.descripcion).subscribe(
        (datos: any[]) => {
          console.log(datos); 

           this.actividades= datos;
           //this.navCtrl.setRoot(BuscarActividadPage)
        }
      );
    }

    detalleActividad(actividadBus, indice){
      localStorage.setItem("indiceAct",indice)
      console.log("1.actividadBus " + actividadBus);
      
      localStorage.setItem("actividadBus",JSON.stringify(actividadBus)) 
      this.navCtrl.setRoot(DetalleActividadPage)      
    }

}
