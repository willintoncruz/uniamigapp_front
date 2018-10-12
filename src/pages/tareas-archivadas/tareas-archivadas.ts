import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TareaProvider } from '../../providers/tarea/tarea';

@Component({
  selector: 'page-tareas-archivadas',
  templateUrl: 'tareas-archivadas.html',
})
export class TareasArchivadasPage {
  tareasArchivadas = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private servicioTareas: TareaProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TareasArchivadasPage');
    this.tareasArchivadas = this.servicioTareas.obtenerTareasArchivadas();
  }

}
