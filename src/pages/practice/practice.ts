import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-PracticePage',
  templateUrl: 'practice.html'
})
export class PracticePage {

  constructor(public navCtrl: NavController) {
    console.log("Practice");
  }

  loadFillInTheBlank() {

  }
  
  loadMatchingGame() {

  }

}
