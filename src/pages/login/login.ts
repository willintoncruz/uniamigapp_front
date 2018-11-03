import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
import { RegistroPage } from '../registro/registro';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
usuario ={
  email:'willintoncruz@gmail,com',
  password:'123456'
}
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth:AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
    if(this.usuario.email && this.usuario.password){
      this.auth.login(this.usuario).subscribe(
        (dato:any)=>{
          console.log(dato.jwt);   
          localStorage.setItem('jwt',dato.jwt)     
          localStorage.setItem('id',dato.id)     
          this.navCtrl.setRoot(HomePage)  
        }
      );
    }
  }

  registrar(){
    this.navCtrl.setRoot(RegistroPage)  

  }

}
