import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ActividadHttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ActividadHttpProvider {
  url
  headers
  constructor(public http: HttpClient) {
    this.url= localStorage.getItem('url');
  }

  obtenerActividades(){
    let jwt = localStorage.getItem('jwt');
    let id = localStorage.getItem('id');
    let personaLE = JSON.parse(localStorage.getItem('personaLE'));
    this.headers = new HttpHeaders({
      'Authorization': 'Bearer ' + jwt
    })

    return this.http.get(this.url+'/actividads?persona_id='+personaLE.id,{
      headers: this.headers
    })   
  }

  crearActividad(nombre, descripcion){

    let jwt = localStorage.getItem('jwt');
    let id = localStorage.getItem('id');
    let personaLE = JSON.parse(localStorage.getItem('personaLE'));

    this.headers = new HttpHeaders({
      'Authorization': 'Bearer ' + jwt
    })
    return this.http.post(this.url+'actividads/', {
      "actividad":
      {
      	"nombre":nombre,
      	"descripcion":descripcion,
      	"persona_id":personaLE.id
      },
      headers: this.headers
    }
    )
  }

  buscarActividades(descripcion){
    let jwt = localStorage.getItem('jwt');
    let id = localStorage.getItem('id');    
    this.headers = new HttpHeaders({
      'Authorization': 'Bearer ' + jwt
    })

    return this.http.get(this.url+'/actividads?descripcion='+descripcion,{
      headers: this.headers
    })   
  }

}
