import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Capacitor } from '@capacitor/core';
import { initializeApp } from "firebase/app"
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getAuth, onAuthStateChanged, indexedDBLocalPersistence, initializeAuth  } from "firebase/auth";
import { User } from '../models/user.model';
import { getFirestore, collection, addDoc, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore';
import { getDatabase } from "firebase/database";

//const firebaseApp = initializeApp(environment.firebaseConfig);
//const dbCloudFirestore = getFirestore(firebaseApp);

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoged : any = false;
  auth: Auth;
  dbCloudFirestore: any;

  constructor() {
    const firebaseApp = initializeApp(environment.firebase);
    if (Capacitor.isNativePlatform()) {
      initializeAuth(firebaseApp, {
        persistence: indexedDBLocalPersistence
      });

      this.dbCloudFirestore = getFirestore(firebaseApp);

    }

    this.auth = getAuth(firebaseApp);
    onAuthStateChanged(this.auth, user => {
      if(user!= undefined || user != null){
        this.isLoged = user;
      }
    });
   }

   tieneSesion(){
    return this.isLoged;
   }

   getStateAuth(){
    return this.auth;
   }
     //login
  onLogin(user: User): Promise<any>{
      return signInWithEmailAndPassword(this.auth, user.email, user.password);
  }
   //register
   onRegister(user: User): Promise<any>{
      return  createUserWithEmailAndPassword(this.auth, user.email, user.password);
  }     

  
}