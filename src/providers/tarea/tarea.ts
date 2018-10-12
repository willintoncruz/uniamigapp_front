import { Injectable } from '@angular/core';

@Injectable()
export class TareaProvider {
  tareas = [];
  tareasArchivadas = [];
  constructor() {
    console.log('Hello TareaProvider Provider');
  }
  obtenerTareas(){
    return this.tareas;
  }
  obtenerTareasArchivadas(){
    return this.tareasArchivadas;
  }
  agregarTarea(tarea){
    this.tareas.push(tarea)
  }
  editarTarea(tarea, index){}
  archivarTarea(index){
    this.tareasArchivadas.push(this.tareas[index])
    this.tareas.splice(index,1);

  }

}
