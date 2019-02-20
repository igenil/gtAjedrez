
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
@Injectable()
export class ListajugadoresProvider {

  email: string;
  admin: {};

  constructor(private afDB: AngularFireDatabase) {
    
  }

  verificarUsuario( email: string ) {
    return new Promise((resolve, reject) => {
      this.afDB.list('/jugador/',  ref => ref.orderByChild('email').equalTo(email))
        .valueChanges().subscribe(data => {
          console.log(data);
          if(data){
            this.email = email;
            this.admin = data;
            resolve(true);
          } else {
            resolve(false);
          }
          
        })
    })
  }
}
