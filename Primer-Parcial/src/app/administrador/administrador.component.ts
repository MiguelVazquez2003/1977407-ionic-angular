import { Component, OnInit ,Input} from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { NgModel } from '@angular/forms';
import { FuncionesService } from '../services/funcion.service';
import { resolve } from 'dns';
import { FirestoreService } from '../services/firestore.service';
import { AlertController, LoadingController, NumericValueAccessor, ToastController } from '@ionic/angular';
import { Articulos} from '../models/articulo.model';
import { getDiffieHellman } from 'crypto';
import { read } from 'fs';
import { FirestorageService } from '../services/firestorage.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  newFile='';
  loading:any;
  limpiar=false;
articulos:Articulos[]=[];
  private path="articulos/";
  newImage='';
 newArticulo:Articulos={

  nombre:'',
  precio:0,
  imagen:'',
  reviews:[''],
  id:this.servicio.getId(),
  categoria:''


 };



  private coleccionFirebase: AngularFirestoreCollection<Articulos>;
  articulosFirebase: Observable<Articulos[]>;
  articuloDoc: any;



constructor(private aFirestore:AngularFirestore, private aFireStorage: AngularFireStorage,
  private servicio:FirestoreService,public loadingcontroller:LoadingController,
  public ToastController: ToastController,public alertController:AlertController,public firestorage:FirestorageService)
  {
  this.coleccionFirebase = this.aFirestore.collection<Articulos>('articulos');
   this.articulosFirebase = this.coleccionFirebase.valueChanges({idField: 'id'});
   const ref = this.aFireStorage.storage;
   
}
  ngOnInit(): void {
    this.getProductos();
  }
  progress : number | undefined;
  subirFoto(event: any){
    //Sube foto del input de File
    const archivo: File = event.target.files[0];
    console.log(archivo.name);

    //const pathArchivo = `${archivo.name}` // ${this.articulo} // necesitamos un folder por articulo

    const pathArchivo = `${archivo.name}`
    const task = this.aFireStorage.upload(pathArchivo, archivo);
    const ref=this.aFireStorage.ref(pathArchivo);

     task.percentageChanges().subscribe(res => {
      this.progress = res;
     });
//duda tengo que agregar la URL automaticamente
     ref.getDownloadURL().subscribe(res =>{
      const downloadURL=res;
      console.log("recibi"+res);
      
     });


    task.snapshotChanges().subscribe();
   
  }

async agregarArticulo(){
  this.presentLoading();
  const path='Articulos/';
  const name=this.newArticulo.nombre;
  
  const res=await this.firestorage.uploadImage(this.newFile,path,name);
this.newArticulo.imagen=res;
this.servicio.createDoc(this.newArticulo,this.path,this.newArticulo.id).then(res=>{
this.loading.dismiss(); //cuando se cumpla la promesa lo cerramos
this.presentToast("Articulo guardado exitosamente");
}).catch(error=>{
this.presentToast("Articulo no se pudo guardar");
});

}

getProductos(){
  this.servicio.getCollection<Articulos>(this.path).subscribe(res=>{
    this.articulos=res;
    });
}

async deleteArticulo(articulo:Articulos){
 
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: '¿Seguro que deseas <strong>eliminar</strong> este producto?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'normal',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Si',
          handler: () => {
            console.log('Confirm Okay');
            this.servicio.deleteDoc(this.path,articulo.id).then(res=>{
              this.loading.dismiss(); //cuando se cumpla la promesa lo cerramos
              this.presentToast("Articulo eliminado exitosamente");
              this.alertController.dismiss();
              }).catch(error=>{
              this.presentToast("Articulo no se pudo eliminar");
              });
          }
        }
      ]
    });

    await alert.present();
  }

nuevo(){
  this.limpiar=true;
  this.newArticulo={

    nombre:'',
    precio:0,
    imagen:'',
    reviews:[''],
    id:this.servicio.getId(),
    categoria:''
  
  
   };
}

async presentLoading() {
  this.loading = await this.loadingcontroller.create({
    cssClass:"normal",
    message: 'Guardando articulo.....',
  });
  await this.loading.present();

 // await loading.onDidDismiss();

  //console.log('Loading dismissed!');
}
async presentToast(mensaje:string){
  const toast=await this.ToastController.create({
    message:mensaje,
    duration:2000

  });
  toast.present();
}

async nuevaImagen(event:any){
  if(event.target.files && event.target.files[0]){
    this.newFile=event.target.files[0];
    const reader=new FileReader();
    reader.onload=(image=>{
    this.newArticulo.imagen=image.target?.result as string;
    });
    reader.readAsDataURL(event.target.files[0]);
    }
   


}
}
