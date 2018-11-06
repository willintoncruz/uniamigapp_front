import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
import { PersonaPage } from '../persona/persona';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  usuario ={
    email:'',
    password:''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController,
    private auth:AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  registrar(){
    if(this.usuario.email && this.usuario.password){

      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if(!re.test(this.usuario.email)) {
  let toast = this.toast.create({
    message: "El campo email es incorrecto",
    duration: 2000
  });
  toast.present();
}else if(this.usuario.password.length!=3) {
  let toast = this.toast.create({
    message: "El campo password debe ser de 8 carácteres",
    duration: 2000
  });
  toast.present();
}else{
      this.auth.registro(this.usuario).subscribe(
        (dato:any)=>{
          console.log(dato.jwt);    
          
          localStorage.setItem('jwt',dato.jwt)     
          localStorage.setItem('id',dato.id)     
          this.navCtrl.push(PersonaPage)  
        }
      );
    }
    
    }else{
      let toast = this.toast.create({
        message: "Debe ingresar email y password",
        duration: 2000
      });
      toast.present();
      
    }
  }


}
