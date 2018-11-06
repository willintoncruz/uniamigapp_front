import { Component } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { PersonaHttpProvider } from '../../providers/persona-http/persona-http';
import { ActividadPage } from '../actividad/actividad';

/**
 * Generated class for the PersonaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-persona',
  templateUrl: 'persona.html',
})
export class PersonaPage {
  persona ={
    nombres:'',
    apellidos:'',
    tipo_documento:'',
    num_documento:'',
    tipo_persona:'',
    telefono:''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, private personahttp: PersonaHttpProvider) {
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonaPage');
  }

  cerrarSesion(){
    localStorage.removeItem("id");
    localStorage.removeItem("jwt");
    localStorage.removeItem("personaLE");
    this.navCtrl.setRoot(WelcomePage)
    }

    registrar(){

      if(!this.persona.nombres || !this.persona.apellidos
        || !this.persona.tipo_documento
        || !this.persona.num_documento
        || !this.persona.tipo_persona 
        || !this.persona.telefono){
          console.log(this.persona.nombres);
          console.log(this.persona.apellidos);
          console.log(this.persona.tipo_documento);
          console.log(this.persona.num_documento);
          console.log(this.persona.tipo_persona);
          console.log(this.persona.telefono);
          
          this.muestaToas("Debe llenar todos los campos")
      }else if(!this.validaNumero(this.persona.telefono)){
        this.muestaToas("Debe ingresar un número telefónico válido")
      }else{
        this.personahttp.crearPersonas(this.persona).subscribe(
          (datos)=>{
            localStorage.setItem("personaLE",JSON.stringify(datos))
            this.navCtrl.push(ActividadPage)  
            // this.tareas.push(datos)
          }
        )

  
      }
      
    }

    muestaToas(mensaje){
      let toast = this.toast.create({
        message: mensaje,
        duration: 2000
      });
      toast.present();
    }

    validaNumero(valor){
      let regExp = /^[0-9]{10}$/;
      console.log("valor::" + valor);
      console.log(regExp.test(valor));
      
      if (!/^([0-9])*$/.test(valor)){
        return false;
      }else{
        return true;
      }
    }

}
