import { Component } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
import { AuthProvider } from '../../providers/auth/auth';
import { ActividadPage } from '../actividad/actividad';
import { PersonaHttpProvider } from '../../providers/persona-http/persona-http';
import { PersonaPage } from '../persona/persona';
import { ActividadPersonaPage } from '../actividad-persona/actividad-persona';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  usuario ={
    email:'',
    password:''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController,
    private auth:AuthProvider,
    private personaHttp: PersonaHttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  registrar(){
    console.log('registrar');
    //  this.navCtrl.setRoot(RegistroPage)
     this.navCtrl.push(RegistroPage)
  }



  iniciarSes(){
    if(this.usuario.email && this.usuario.password){
      this.auth.login(this.usuario).subscribe(
        (dato:any)=>{
          console.log(dato.jwt);   
          localStorage.setItem('jwt',dato.jwt)     
          localStorage.setItem('id',dato.id)   
          
          //consultar el id de la persona
          this.personaHttp.consultar(dato.id).subscribe(
            (dato2:any)=>{
              console.log("dato2.id :: "+dato2.id); 
              localStorage.setItem("personaLE",JSON.stringify(dato2)) 
              console.log("tipo_persona::::" + dato2.tipo_persona);
                
              if(dato2.id){
                if(dato2.tipo_persona == 'Beneficiario'){
                  this.navCtrl.push(ActividadPage)
                }else{
                  this.navCtrl.push(ActividadPersonaPage)
                }
              }else{//si no existe como persona
                this.navCtrl.push(PersonaPage)  
              }             

            }
          );
          // this.navCtrl.push(ActividadPage)
        }
      );
    }else{
      this.muestaToas("Debe llenar todos los campos")
    }
  }

  muestaToas(mensaje){
    let toast = this.toast.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }

}
