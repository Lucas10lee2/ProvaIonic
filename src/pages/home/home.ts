import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  nomes = [
    {
    teste: '',
    title: 'Digite o nome de um usuário', 
    content: 'Ana',
    }
]

onItemClick (nome){
  console.log("item-click", nome)
  this.navCtrl.push('ChatPage', {
    nomeParam: nome
  });
}
}