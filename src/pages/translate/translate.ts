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

  translate(text) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(xhr.responseText);
      }
    }
    xhr.open('GET', '/api');
    var username = "6051df59-03cc-4ef8-afab-52f3b1f4145c";
    var password = "jn6OpyKtyR3h";


    var params = JSON.stringify({ source: "en", target: "es", text: text });
    xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password))
    xhr.send(params)
  }

}
