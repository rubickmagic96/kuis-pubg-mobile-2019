import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GameplayPage } from '../gameplay/gameplay';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  playNow() {
    this.navCtrl.push(GameplayPage);
  }

}
