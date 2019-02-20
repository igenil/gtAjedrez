
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
@Injectable()
export class ListajugadoresProvider {

  email: string;
  admin: {};
  convocados: {};
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

  
      Covocados( key: string ) {
        return new Promise((resolve, reject) => {
          this.afDB.list("/jugador", ref => 
            ref.orderByChild('equipo').equalTo(key)).valueChanges().subscribe(data => {
              console.log(data);
              if(data){
                this.convocados = data;
                resolve(true);
              } else {
                resolve(false);
              }
              
            })
        })
      }
}
