import { Component } from '@angular/core';
import { NavController, AlertController, reorderArray, ToastController, Thumbnail } from 'ionic-angular';
import { TareaProvider } from '../../providers/tarea/tarea';
import { TareasArchivadasPage } from '../tareas-archivadas/tareas-archivadas';
import { TareaHttpProvider } from '../../providers/tarea-http/tarea-http';
import { LoginPage } from '../login/login';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tareas = []
  habilitar = false
  constructor(
    public navCtrl: NavController,
    public alerta: AlertController,
    //private servicioTareas: TareaProvider,
    private toast: ToastController,
    private tareahttp: TareaHttpProvider
    ) {
   //this.tareas = servicioTareas.obtenerTareas();
   
  }

  ionViewDidLoad(){
    this.tareahttp.obtenerTareas().subscribe(
      (datos: any[]) => {
        console.log(datos);
        
        this.tareas= datos;
      }
    );
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
        this.tareahttp.crearTareas(dato.textoTarea).subscribe(
          (datos)=>{
            this.tareas.push(datos)
          }
        )
        //this.servicioTareas.agregarTarea(dato.textoTarea);
      }
    }
      ]
    });
    alert.present();
  }
  irPaginaArchivadas(){
    this.navCtrl.push(TareasArchivadasPage);
  }
  archivarTarea(indice, id){

    this.tareahttp.eliminarTareas(id).subscribe(
      (datos)=>{           
       // this.tareas[indice]=datos
       this.tareas.splice(indice,1);
      }
    )


    
  }
  editarTarea(objTarea, indice){
    console.log(indice);
    
    let alert = this.alerta.create({
      title: "Editar tarea",
      inputs: [{
        type: "text",
        name: "textoTarea",
        value: objTarea.titulo//this.tareas[indice]
      }],
      buttons: [{
        text: "Guardar",
        handler: (datos) => {
          // this.servicioTareas.editarTarea(datos.textoTarea, id);

          this.tareahttp.editarTareas(objTarea.id,datos.textoTarea).subscribe(
            (datos)=>{
              this.tareas[indice]=datos
            }
          )

          let toast = this.toast.create({
            message: "Tarea editada exitosamente",
            duration: 2000
          });
          toast.present();
        }
      }]
    });
    alert.present();
  }

  ordenarTareas(evento){
    console.log(evento);
    reorderArray(this.tareas, evento);
  }
  toogleHabilitar(){
    this.habilitar = !this.habilitar;
  }

  cerrarSesion(){
    localStorage.removeItem("id");
    localStorage.removeItem("jwt");
    this.navCtrl.setRoot(LoginPage)
    }
}
