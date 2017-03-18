import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-TranslatePage',
  templateUrl: 'translate.html'
})
export class TranslatePage {

  constructor(public navCtrl: NavController) {

    console.log("Translate");
  }

}
