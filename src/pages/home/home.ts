import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { TareaProvider } from '../../providers/tarea/tarea';
import { TareasArchivadasPage } from '../tareas-archivadas/tareas-archivadas';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tareas = []
  constructor(
    public navCtrl: NavController,
    public alerta: AlertController,
    private servicioTareas: TareaProvider
    ) {
   this.tareas = servicioTareas.obtenerTareas();
  }

  agregarTarea(){
    let alert = this.alerta.create({
      title: "Agregar tarea",
      message: "tarea....",
      inputs:[{
        type: "text",
        name: "textoTarea"
      }],
      buttons: [{text: "Cancelar"},
      {text: "Agregar",
      handler: (dato) => {
        console.log(dato);
        // this.tareas.push(dato.textoTarea);
        this.servicioTareas.agregarTarea(dato.textoTarea);
      }
    }
      ]
    });
    alert.present();
  }
  irPaginaArchivadas(){
    this.navCtrl.push(TareasArchivadasPage);
  }
  archivarTarea(indice){
    this.servicioTareas.archivarTarea(indice)
  }

}
