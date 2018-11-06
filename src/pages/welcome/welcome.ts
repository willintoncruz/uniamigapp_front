import { Component } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
import { AuthProvider } from '../../providers/auth/auth';
import { ActividadPage } from '../actividad/actividad';

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
    private auth:AuthProvider) {
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
          this.navCtrl.push(ActividadPage)
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
