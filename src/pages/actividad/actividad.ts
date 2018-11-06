import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { ActividadHttpProvider } from '../../providers/actividad-http/actividad-http';

/**
 * Generated class for the ActividadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-actividad',
  templateUrl: 'actividad.html',
})
export class ActividadPage {
  actividades = []
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private activdadhttp: ActividadHttpProvider,
    public alerta: AlertController,
    private toast: ToastController) {
  }

  ionViewDidLoad(){
    this.activdadhttp.obtenerActividades().subscribe(
      (datos: any[]) => {
        console.log(datos);        
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

    agregarActivdad(){
      let alert = this.alerta.create({
        title: "Agregar Actividad",
        message: "Activdad....",
        inputs:[{
          type: "text",
          name: "nombreActivdad"
        },{
          type: "text",
          name: "descripcionActivdad"
        }],
        buttons: [{text: "Cancelar"},
        {text: "Agregar",
        handler: (dato) => {
          if(dato.nombreActivdad && dato.descripcionActivdad){
            console.log(dato);
            // this.tareas.push(dato.textoTarea);
            this.activdadhttp.crearActividad(dato.nombreActivdad, dato.descripcionActivdad).subscribe(
              (datos)=>{
                this.actividades.push(datos)
              }
            )
            //this.servicioTareas.agregarTarea(dato.textoTarea);
          }else{
            let toast = this.toast.create({
              message: "Debe ingresar nombre y desscripción",
              duration: 2000
            });
            toast.present();
          }
         
        }
      }
        ]
      });
      alert.present();
    }

}
