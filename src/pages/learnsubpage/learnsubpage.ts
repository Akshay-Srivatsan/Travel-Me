import { Component } from '@angular/core';

import {NavParams, NavController} from 'ionic-angular';

@Component({
  selector: 'page-LearnSubpagePage',
  templateUrl: 'learnsubpage.html'
})
export class LearnSubpagePage {

  title = "Testing"
  public category: any;

  phrases = {
    "General Phrases": {
      "hello": "hola"
    },
    "Cost/Money": {

    },
    "Directions": {

    },
    "Time": {

    },
    "Emergencies/Medical": {

    },
    "Food": {

    },
    "Relationships": {

    },
    "Possessions": {

    }
  }


  constructor(public navCtrl: NavController, public params: NavParams) {
    console.log("LearnSubpagePage");
    this.category = params.get("category");
    console.log(this.category);
    this.title = this.category;

  }
}
