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
    xhr.open('GET', '/translate?text=' + encodeURIComponent(text));

    xhr.send()
  }

}
