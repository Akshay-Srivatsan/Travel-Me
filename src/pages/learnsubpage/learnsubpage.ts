import { Component } from '@angular/core';

import {NavParams, NavController} from 'ionic-angular';

@Component({
  selector: 'page-LearnSubpagePage',
  templateUrl: 'learnsubpage.html'
})
export class LearnSubpagePage {

  title = "Testing"
  public category: any;
  public specificPhrases: any;
  public phraseKeys: any;

  public audio: HTMLAudioElement;
  public lastPhrase: String;

  phrases = {
    "General Phrases": {
      'Thank you':'Gracias',
      'Yes':'Sí',
      'No':'No',
      'Please':'Por favor',
      'Sorry':'Lo siento',
      'Do you speak ___?':'Hablas tú ___?',
      'Excuse me':'Perdón',
      'Hello I am ___':'Hola yo me llamo ___.',
      'Where is the bathroom?':'Dónde está el baño?',
      'I need a phone.':'Yo necessito un teléphono',
    },
    "Cost/Money": {
      'Money':'El dinero',
      'How much is this?':'Cuantó cuesta esto?',
      'How much is the check?':'Cuantó es la cuenta?',
      'What is the currency?':'Cuál es la modena?',
      'Where is the bank?':'Dónde está el banco?',
      'Credit card':'La carta de crédito',
      'Debit card':'La carta de débito',
      'Cash':'El effectivo',
      'Check':'El cheque',
      'Do you accept ___?':'Aceptan ____?',
      'I would like to exchange money.':'Me gustaría cambiar dinero.',
      'I want to withdraw money.':'Quiero retirar dinero.',
      'Where is the nearest ATM?':'Dónde está el cajero más cercano?',
      'How many ____ can I buy for a dollar?':'A cuanto está el dolar?',
      'one':'uno',
      'two':'dos',
      'three':'tres',
      'four':'cuatro',
      'five':'cinco',
      'six':'seis',
      'seven':'siete',
      'eight':'ocho ',
      'nine':'nueve',
      'ten':'dies',
      'eleven':'once',
      'twelve':'doce',
      'thirteen':'trece',
      'fourteen':'catorce',
      'fifteen':'quince',
      'sixteen':'dieciséis',
      'seventeen':'diecisiete',
      'eighteen':'dieciocho',
      'nineteen':'diecinueve',
      'twenty':'veinte',
      'thirty':'treinta',
      'forty':'cuarenta',
      'fifty':'cincuenta',
      'sixty':'sesenta',
      'seventy':'setenta',
      'eigthy':'ochenta',
      'ninety':'noventa',
      'one hundred':'cien',
      'one thousand':'mil',
      'zero':'cero',
    },
    "Directions": {
      'left':'izquierda',
      'right':'derecho',
      'center':'centro',
      'above':'arriba',
      'below':'debajo de',
      'entrance':'entrada',
      'exit':'salida',
      'traffic':'tráfico',
      'arrival':'llegada',
      'end':'el fin',
      'start':'el comienzo',
      'here':'aquí',
      'there':'allí',
      'north':'el norte',
      'south':'el sur',
      'east':'el este',
      'west':'el oeste',
      'direction':'la dirección',
      'hotel':'el hotel',
      'motel':'el motel',
      'store':'la tienda',
      'supermarket':'el supermercado',
      'street':'la calle',
      'train station':'la estación de tren',
      'airport':'el aeropuerto',
      'train':'el tren',
      'plane':'el avión',
      'where is ____?':'Dónde está ___?',
      'How do i get to ___?':'Cómo llego a ___?',
      'Where can I buy a ___ ticket?':'Dónde puedo comprar un billete de ____?',
    },
    "Time": {
      'Today':'hoy',
      'yesterday':'ayer',
      'tomorrow':'mañana',
      'weekdays':'días de la semana',
      'weekend':'el fin de la semana',
      'monday':'el lunes',
      'tuesday':'el martes',
      'wednesday':'el miercoles',
      'thursday':'el jueves',
      'friday':'el viernes',
      'saturday':'el sábado',
      'sunday':'el domingo',
      'month':'el mes',
      'week':'la semana',
      'morning':'la mañana',
      'evening':'la tarde',
      'night':'la noche',
      'dawn':'el amanecer',
      'season':'el tiempo',
      'what time is it?':'cual hora es?',
      'What time does ____ start?':'A cual hora impieza ____?',
      'What time does ____ end?':'A cual hora termina ____?',
      'Am I on time?':'Estoy a tiempo?',
      'Am I late?':'Estoy tarde?',
      'When does the train depart?':'A cual hora se va el tren?',
      'When does the train arrive?':'A cual hora llega el tren?',
      'When does the plane depart?':'A cual hora se va el avión?',
      'When does the plane arrive?':'A cual hora llega el avión?',
    },
    "Emergencies/Medical": {
      'Hospital':'El hospital',
      'Ambulance':'La ambulancia',
      'Firefighters':'Los bomberos',
      'CPR':'RCP',
      'AED':'DEA',
      'Police':'Policia',
      'Doctor':'El doctor',
      'Nurse':'El enfermero',
      'Can you call ___?':'Puedes llamar a ____?',
      'Do you know how to do CPR?':'Sabes como hacer RCP?',
      'Do you know where the nearest AED is?':'Sabes dónde está el DEA más cercano?',
      'I\'m hurt.':'Estoy herido',
      'Help me.':'Ayúdame.',
      'Do you need help?':'Necesitas ayuda?',
      'What hurts?':'Que te duele?',
      'That\'s dangerous.':'Eso es peligroso.',
      'Medecine':'La medicina',
      'Where is the nearest pharmacy?':'Dónde está la farmacia más cercana?',
      'head':'la cabeza',
      'feet':'los pies',
      'foot':'el pie',
      'arms':'los brasos',
      'fingers':'los dedos',
      'stomach':'el estómago',
      'my ___ hurts.':'Me duele(n) ___.',
    },
    "Food": {
      'what do you want to eat?':'Que te gustaría para comer?',
      'I would like ____':'Me gustaría ____.',
      'What do you want to drink?':'que te gustría para beber?',
      'menu':'el menú',
      'vegeterian':'vegetariano',
      'vegan':'vegano',
      'I am vegetarian':'Yo soy vegetariano',
      'I am vegan':'Yo soy vegano',
      'Are there vegetarian options?':'Hay opciones vegetarianas?',
      'Are there vegan options?':'Hay opciones veganas?',
      'Water':'el agua',
      'milk':'la leche',
      'fruits':'las frutas',
      'vegetables':'los vegetales',
      'coffee':'el café',
      'meat':'la carne',
      'appetizer':'el apertivo',
      'entrée':'el plato fuerte',
      'dessert':'el postre',
    },
    "Relationships": {
      'Mother':'madre',
      'father':'padre',
      'brother':'hermano',
      'sister':'hermana',
      'siblings':'hermanos',
      'son':'hijo',
      'daughter':'hija',
      'husband':'esposo',
      'wife':'esposa',
      'girlfriend':'novia',
      'boyfriend':'novio',
      'coworker':'el colego',
      'boss':'jefe',
      'employee':'el empleado',
      'friend':'amigo',
      'family':'familia',
      'this is my _____.':'Esta/Este es mi ____.',
      'these are my ____.':'Estas/Estos son mis ___.',
      'I\'m here with my ___.':'Estoy aquí con mi ____.',
    },
    "Possessions": {
      'Wallet':'La cartera',
      'Purse':'La bolsa',
      'Luggage':'el equipaje',
      'backpack':'la mochila',
      'clothes':'la ropa',
      'passport':'el passaporte',
      'license':'la liciencia',
      'watch':'el reloj',
      'jewelry':'La joyería',
      'My (singular)':'mi',
      'your (singular)':'tu',
      'his/her/usted (singular)':'su',
      'our (singular)':'nuestro',
      'theirs/ustedes':'su',
      'my (plural)':'mis',
      'your (plural)':'tus',
      'his/her/usted (plural)':'sus',
      'our (plural)':'nuestros',
      'Theirs/Ustedes':'sus',
    }
  }


  constructor(public navCtrl: NavController, public params: NavParams) {
    console.log("LearnSubpagePage");
    this.category = params.get("category");
    console.log(this.category);
    this.title = this.category;
    this.specificPhrases = this.phrases[this.category];
    this.phraseKeys = Object.keys(this.specificPhrases);

  }

  playAudio(item) {
    console.log(item)
    if (this.audio) {
      this.audio.pause()
      this.lastPhrase = ""
      this.audio = null;
      return;
    }
    if (item == this.lastPhrase) {
      this.lastPhrase = "";
    } else {
      this.audio = new Audio('assets/' + item.replace('?', '') + '.m4a');
      this.audio.play();
      this.lastPhrase = item;
    }
  }

  ionViewDidLeave() {
    if (this.audio) {
      this.audio.pause()
      this.lastPhrase = ""
      this.audio = null;
      return;
    }
  }
}
