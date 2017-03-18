import {LearnPage} from '../learn/learn';
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { PracticePage } from "../practice/practice";
import { TranslatePage } from "../translate/translate";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToLearn() {
    this.navCtrl.parent.select(1);
    // this.navCtrl.push(LearnPage);
  }
  goToPractice() {
    this.navCtrl.parent.select(2);
    // this.navCtrl.push(PracticePage);
  }
  goToTranslate() {
    this.navCtrl.parent.select(3);
  //  this.navCtrl.push(TranslatePage);
  }}
