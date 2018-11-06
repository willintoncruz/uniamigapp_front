import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PersonaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PersonaHttpProvider {
  url
  headers
  constructor(public http: HttpClient) {
    this.url= localStorage.getItem('url');
  }

  crearPersonas(persona){

    let jwt = localStorage.getItem('jwt');
    let id = localStorage.getItem('id');
    this.headers = new HttpHeaders({
      'Authorization': 'Bearer ' + jwt
    })
    return this.http.post(this.url+'personas/', {      
      "persona":
        {
        	"nombres":persona.nombres,
        	"apellidos":persona.apellidos,
        	"tipo_documento":persona.tipo_documento,
        	"num_documento":persona.num_documento,
        	"tipo_persona":persona.tipo_persona,
        	"telefono":persona.telefono,
        	"usuario_id":id
        },
      headers: this.headers
    }
    )
  }

}
