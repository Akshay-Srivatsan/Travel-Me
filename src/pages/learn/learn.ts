import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LearnSubpagePage } from "../learnsubpage/learnsubpage";

@Component({
  selector: 'page-LearnPage',
  templateUrl: 'learn.html'
})
export class LearnPage {

  subpages = [
    "General Phrases",
    "Cost/Money",
    "Directions",
    "Time",
    "Emergencies/Medical",
    "Food",
    "Relationships",
    "Possessions"
]

  constructor(public navCtrl: NavController) {
    console.log("Learn");

  }
goToSubpage (item: String){
  this.navCtrl.push(LearnSubpagePage,{
    category: item
  })
}
}
