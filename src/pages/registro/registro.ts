import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { TabsPage } from '../tabs/tabs';
import { jugador } from '../../models/jugador';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  signupError: string;
  form: FormGroup;
  
  jugador: jugador = {
    nombre: '',
    email: '',
    casa:0,
    fuera:0,
    empate:0,
    ganado:0,
    perdidos:0,
    jugados:0,
    elo:0,
    capitan:false,
    admin:false,
    equipo:"sin equipo",
    juega:false
  };

	constructor(
    fb: FormBuilder,
    private auth: AuthService,
    private navCtrl: NavController,
    private afdb: AngularFireDatabase
	) {
		this.form = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      Usuario: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});
  }

  signup() {
		let data = this.form.value;
		let credentials = {
			email: data.email,
			password: data.password
    }; 
    this.jugador.email = data.email;
    this.jugador.nombre = data.Usuario;
    this.auth.signUp(credentials).then(
			() => this.navCtrl.setRoot(TabsPage),
			error => this.signupError = error.message
		);
    this.afdb.list("/jugador/").push(this.jugador); 
		
}
}
