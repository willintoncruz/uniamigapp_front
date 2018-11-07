import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ActividadPersonaHttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ActividadPersonaHttpProvider {
  url
  headers
  constructor(public http: HttpClient) {
    this.url= localStorage.getItem('url');
  }

  consultar(){
        let personaLE = JSON.parse(localStorage.getItem('personaLE'));
        let jwt = localStorage.getItem('jwt');
        let id = localStorage.getItem('id');
        this.headers = new HttpHeaders({
          'Authorization': 'Bearer ' + jwt
        })
        console.log("consulta actividad_personas:::");
        
        return this.http.get(this.url+'actividad_personas?persona_id='+personaLE.id, {      
          headers: this.headers
        }
        )
      }

      asociarPersonas(){
        let personaLE = JSON.parse(localStorage.getItem('personaLE'));
        let jwt = localStorage.getItem('jwt');
        let id = localStorage.getItem('id');
        let actividadBus = JSON.parse(localStorage.getItem('actividadBus'));

        return this.http.post(this.url+'actividad_personas/', {      
          "actividad_persona":{
            "persona_id":personaLE.id,
            "actividad_id":actividadBus.id
          },
          headers: this.headers
        }
        )

      } 

}
