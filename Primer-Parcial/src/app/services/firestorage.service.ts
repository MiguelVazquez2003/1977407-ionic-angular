import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirestorageService {

  constructor(public storage:AngularFireStorage) { }


  uploadImage(file:any,path:string,nombre:string):Promise<string>{
    return new Promise(resolve=> {
     
      const pathArchivo =path+ '/'+nombre;
      const ref=this.storage.ref(pathArchivo);
      
      const task = ref.put(file);
      task.snapshotChanges().pipe(
        finalize(() => {
          ref.getDownloadURL().subscribe(res=>{
            const downloadURL=res;
            resolve(downloadURL);
            return;
          }

          )
        }
       )
     )
    .subscribe();
      
    });
  }



}
0