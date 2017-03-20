import * as ionic from 'ionic';
import { Component } from '@angular/core';

import {Platform, NavController} from 'ionic-angular';

@Component({
  selector: 'page-TranslatePage',
  templateUrl: 'translate.html'
})
export class TranslatePage {

  public platform: Platform;

  constructor(public navCtrl: NavController, public plt: Platform) {
    this.platform = plt;
    console.log("Translate");
  }

  tr() {
    var englishElement = document.getElementById("english").children[0] as HTMLInputElement;
    this.translate(englishElement.value);

  }

  translate(text) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var spanish = document.getElementById("spanish");
        spanish.innerText = xhr.responseText;
      }
    }
    var url = 'https://travelme.mybluemix.net/translate'
    if (this.platform.is('mobileweb') || this.platform.is('core')) {
      url = '/translate'
    }
    xhr.open('GET', url + '?text=' + encodeURIComponent(text));

    xhr.send()
  }

}
