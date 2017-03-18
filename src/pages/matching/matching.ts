import { Component } from '@angular/core';
import {AlertController, NavController,  NavParams} from 'ionic-angular';

/*
  Generated class for the Matching page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-matching',
  templateUrl: 'matching.html'
})
export class MatchingPage {

  questions = {
    "General Phrases": {
      'What is the word for "Hello"?': ['hola', 'salve', 'bonjour', 'hi'],
      'What is the word for "Thank you"?' : ['gracias', 'lo siento', 'cómo', 'porque'],
      'How do you say "Excuse me"?' : ['perdón','si','llamo', 'cercano'],
      'How do you ask "Where is the bathroom"?' : ['dónde está el baño', 'necesitas algo','por favor','buenos días' ],
      'How do you say "I need a telephone"?' : ['yo necesito el teléphono.','dame comida','tengo hambre','Es el amanecer' ],
      'How do you say "Yes"?':['si', 'oui','hai','yes' ],
      'How do you say "No"?': ['no','non','pero','y'],
      'What is the word for "Sorry"?':['Lo siento','Pero','Siempre','Nunca'],
      'How do you ask "Do you speak English"?':['Hablas tú inglés', 'Hablas tú americano', 'Como se dice', 'Porque ases eso'],
      'What is the word for "Please"?':['Por favor', 'Sí tu quieres','Claro','Dormir'],
    },
    "Cost/Money": {
      'How do you ask "How much is this?"?':['Cuanto cuesta esto?','Cuál es la modena?', 'Como te llamas?','Cuantos años tienes'],
      'How do you ask "Do you accept a debit card"?':['Aceptan carta de débito?','A cuanto está el dolar?','Dónde está el banco?','Cual es la hora'],
      'How do you ask "Where is the bank"?':['Dónde está el banco?','Dónde está la casa?', 'Dónde vas a la escuela','A cuanto está el dolar?'],
      'What is the word for "Money"?':['Dinero','Pesos','Oro','Modena'],
      'How do you say "I would like to withdraw money"?':['Quiero retirar dinero.','Dónde está mi dinero?', 'Cuanto dinero tengo?','Que es dinero'],
      'How do you ask "What is the currency"?':['Cual es la modena?','Cuanto cuesta esto?','Tienen espacio?','Cuantas modenas tienes?'],
      'What is the word for "Check"?':['Cheque','Carta','Papel','Cuenta'],
      'How do you say "Credit card"?': ['Carta de crédito','Cree en mi','Targeta de papel','Hoja de manejo'],
      'How do you say "Seventy"?':['Setenta', 'Sesenta','Seis','Siete'],
      'How do you say "Cash"?':['Effectivo', 'Dinero', 'Débito','Cuantó'],
    },
    "Directions": {
      'How do you say "West"?':['El oeste','El este','La calle','El tren'],
      'How do you say "Left"?':['Izquierda','Derecha','Fin','Llegada'],
      'How do you ask "Where can I buy a plane ticket"?':['Dónde puedo comprar un billete de avión?','Tienes miedo a volar?','Que es un avión?','Dondé está el avión?'],
      'What is the word for "Train station"?':['La estación de tren','El supermercado','El tren está aquí']
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

  categories = [
    "General Phrases",
    "Cost/Money",
    "Directions",
    "Time",
    "Emergencies/Medical",
    "Food",
    "Relationships",
    "Possessions"
  ]

  allCategories = [
    "General Phrases",
    "Cost/Money",
    "Directions",
    "Time",
    "Emergencies/Medical",
    "Food",
    "Relationships",
    "Possessions"
  ]

  validQuestions = [];
  validQuestionsAndAnswers = {};

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    for (var i = 0; i < this.categories.length; i++) {
      for (var j = 0; j < Object.keys(this.questions[this.categories[i]]).length; j++) {
        var key = Object.keys(this.questions[this.categories[i]])[j];
        var obj = {}
        this.validQuestions.push(key);
        this.validQuestionsAndAnswers[key] = {
          "answer": this.questions[this.categories[i]][Object.keys(this.questions[this.categories[i]])[j]][0],
          "choices": this.shuffle(this.questions[this.categories[i]][Object.keys(this.questions[this.categories[i]])[j]])
        }
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchingPage');
  }

  showCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Which topics have you studied?');

    for (var i = 0; i < this.allCategories.length; i++) {
      alert.addInput({
        type: 'checkbox',
        label: this.allCategories[i],
        value: this.allCategories[i],
        checked: (this.categories.indexOf(this.allCategories[i]) != -1)
      });
    }

    alert.addButton({
      text: 'Save',
      handler: data => {
        console.log('Checkbox data:', data);
        this.categories = [];
        for (var i = 0; i < data.length; i++) {
          this.categories.push(data[i]);
        }

        this.validQuestions = [];
        this.validQuestionsAndAnswers = {};
        for (var i = 0; i < this.categories.length; i++) {
        for (var j = 0; j < Object.keys(this.questions[this.categories[i]]).length; j++) {
          var key = Object.keys(this.questions[this.categories[i]])[j];
          var obj = {}
          this.validQuestions.push(key);
          this.validQuestionsAndAnswers[key] = {
            "answer": this.questions[this.categories[i]][Object.keys(this.questions[this.categories[i]])[j]][0],
            "choices": this.shuffle(this.questions[this.categories[i]][Object.keys(this.questions[this.categories[i]])[j]])
          }
        }
      }
      }
    });
    alert.present();
  }

  verifyChoice(event, question) {
    console.log(event);
    var element = event.srcElement.parentElement;
    if (event.srcElement instanceof HTMLButtonElement) {
      element = event.srcElement;
    }
    console.log(element);
    var answer = this.validQuestionsAndAnswers[question]["answer"];
    if (element.children[0].innerHTML == answer) {
      element.style.backgroundColor = 'green';
    } else {
      element.style.backgroundColor = 'red';
    }
  }

}
