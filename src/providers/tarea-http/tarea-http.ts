import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TareaHttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TareaHttpProvider {
url
headers
  constructor(public http: HttpClient) {
    this.url= localStorage.getItem('url');
    
  }
  obtenerTareas(){
    let jwt = localStorage.getItem('jwt');
    let id = localStorage.getItem('id');
    this.headers = new HttpHeaders({
      'Authorization': 'Bearer ' + jwt
    })

    return this.http.get(this.url+'usuarios/'+id+'/tareas',{
      headers: this.headers
    })   
  }

  crearTareas(tarea){

    let jwt = localStorage.getItem('jwt');
    let id = localStorage.getItem('id');
    this.headers = new HttpHeaders({
      'Authorization': 'Bearer ' + jwt
    })
    return this.http.post(this.url+'usuarios/'+id+'/tareas', {      
      "tarea":{
        "titulo":tarea,
        "finalizada":false
      },
      headers: this.headers
    }
    )
  }
  editarTareas(indice, tarea){

    let jwt = localStorage.getItem('jwt');
    let id = localStorage.getItem('id');
    this.headers = new HttpHeaders({
      'Authorization': 'Bearer ' + jwt
    })

    return this.http.put(this.url+'usuarios/'+id+'/tareas/'+indice, {
      "tarea":{
        "titulo":tarea
      }
    }
    )
  }

  eliminarTareas(id){
    let jwt = localStorage.getItem('jwt');
    let idusu = localStorage.getItem('id');
    this.headers = new HttpHeaders({
      'Authorization': 'Bearer ' + jwt
    })
    return this.http.delete(this.url+'usuarios/'+idusu+'/tareas/'+id
    )
  }

}
