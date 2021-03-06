import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { FillInTheBlankPage } from "../fillintheblank/fillintheblank";
import { MatchingPage } from "../matching/matching";

@Component({
  selector: 'page-PracticePage',
  templateUrl: 'practice.html'
})
export class PracticePage {

  constructor(public navCtrl: NavController) {
    console.log("Practice");
  }

  loadFillInTheBlank() {
    this.navCtrl.push(FillInTheBlankPage),{
    }

  }

  loadTestYourself() {

    this.navCtrl.push(MatchingPage),{
    }
  }

}
