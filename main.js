/**
*
* This is an app for online hiking.
*
* The hike is stored in the tasks array. Each task consists
* of an image with the task, a message with explanation, a question and the correct answer.
* The question should be answered correctly at the end of the task to be able to proceed
* to the next task. You can go back and forward between completed tasks.
*
* The first two tasks are special. The first one asks the name and adds it to the
* header, the second asks the group name and adds it to the header.
*
* To make it work include it in the body of your HTML and add script main.js
* and Vue. Also add main.css and bootstrap for style.
*
* Copyright 2020 Aernout Koolen
* License MIT - see https://opensource.org/licenses/mit-license.php
*
*/

var HikingApp = new Vue ({
  el: '#app',
  data: {
    group: "IJmondtrekkers",
    patrouille: "",
    scout: "",
    hike: "IJmondtrekkers Online Hike",
    tasks: [
      {
        message: "Welkom bij de eerste online hike van scouting de IJmondtrekkers. De hike bestaat uit 6 opdrachten. Aan het eind van elke opdracht is een virtuele post. Daar moet je een vraag beantwoorden. Als je het antwoord goed hebt, dan krijg je de volgende opdracht.",
        question: "Hoe heet je?",
        correctanswer: "",
        image: "./images/image1.jpg"
      },
      {
        message: "We gaan bijna beginnen.",
        question: "In welke patrouille zit je?",
        correctanswer: "",
        image: "./images/image2.jpg"
      },
      {
        message: "De eerste opdracht is een foto route. Hierboven zie je 8 foto's. Ze staan niet in de goede volgorde. Ga naar het <a href='https://www.google.nl/maps/@52.4514536,4.6117985,3a,75y,331.9h,87.5t/data=!3m7!1e1!3m5!1svq4VW5TGixUNgyISmSU2kw!2e0!6s%2F%2Fgeo3.ggpht.com%2Fcbk%3Fpanoid%3Dvq4VW5TGixUNgyISmSU2kw%26output%3Dthumbnail%26cb_client%3Dmaps_sv.tactile.gps%26thumb%3D2%26w%3D203%26h%3D100%26yaw%3D136.33257%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656' target='_blank'>clubhuis</a> en loop het pad af. Op elk kruispunt moet je zoeken naar de goede foto. Voetpaden tellen niet mee. Die vertelt je welke kant je op moet.",
        question: "Aan het einde van de fotoroute: hoe heet deze sportclub (alleen het laatste woord)?",
        correctanswer: "Stormvogels",
        image: "./images/image3.png"
      },
      {
        message: "Hierboven zie je een kruispuntenroute. Op elke kruispunt staat getekend waar je vandaan komt en waar je naartoe moet. We lopen op de stafkaart. Deze kan je online vinden op <a href='https://topokaartnederland.nl/'target=_'blank'>topokaartnederland.nl/</a>. Zoek eerst het beginpunt op! Let op: voetpaden (dat zijn de stippellijnen op de kaart tellen ook mee). <br><br>Het is misschien handig om de kaart af te drukken dan kan je de route tekenen. Klik <a href='./images/topoijmuiden.png' target='_blank'>hier</a> om de kaart af te drukken. Succes!",
        question: "Aan het einde van de kruispuntenroute: Hoe heet de vishandel aan de linkerkant (7 letters)? Dat kan je vinden met Google Streetview.",
        correctanswer: "Mercuur",
        image: "./images/image4.jpg"
      },
      {
        message: "Hierboven zie je een oleaat. Dat moet je bovenop de kaart leggen en kijken waar je uitkomt. Gebruik weer <a href='https://topokaartnederland.nl/'target=_'blank'>de topografische kaart</a>. Of je kan de ook kaart gebruiken die je bij de vorige opdracht hebt afgedrukt. Zoek eerst het beginpunt op, dat ligt in de buurt van waar de vorige opdracht stopte. Misschien moet je in- en uitzoomen om het oleaat passend te krijgen. Succes!",
        question: "Aan het einde van het oleaat: Hoe heet de website op het witte bestelautootje (inclusief .nl)? Dat kan je vinden met Google Streetview.",
        correctanswer: "belguy.nl",
        image: "./images/oleaat.jpg"
      },
      {
        message: "Je bent halverwege. Tijd voor de Limonade en koekjespost. Ga op zoek in huis naar wat lekkers. Van de leiding mag het!",
        question: "Als je klaar bent met eten en drinken: Hoeveel meter afstand moet je houden (gebruik een puntje tussen de getallen)?",
        correctanswer: "1.5",
        image: "./images/limonade.jpg"
      },
      {
        message: "Dit is een opdracht met een kompas. Maar dat kan nu natuurlijk niet. Onthoud dat op de kaart het Noorden (dat is nul graden) altijd naar boven wijst. Gebruik <a href='https://www.google.com/maps/@52.4599326,4.6129105,15.25z' target='_blank'>Google Maps</a>. Je kan met Google Maps makkelijk de afstand tussen twee punten meten. Dat is handig bij deze opdracht. Begin op de kruising waar je net bent gestopt - hoek Wijkaanzeeerweg en Schoutenstraat.",
        question: "Je staat nu midden op de kruising. Wat is het nummer van de wegwijzer (4 cijfers)?",
        correctanswer: "5494",
        image: "./images/kompas.png"
      },
      {
        message: "Dit is een strippenkaart. De rechtdoorgaande lijn is de weg die je loopt. De streepjes stellen de wegen voor die je NIET loopt. Loop op Google Maps. De route begint <a href='https://www.google.com/maps/@52.4625751,4.6309998,188m/data=!3m1!1e3' target='_blank'>hier</a>. Let op bij het vierde kruispunt, gebruik google streetview om te kijken hoe het precies zit.",
        question: "Loop na het laatste kruispunt een stukje door. Hoeveel rode deuren zie je?",
        correctanswer: "5",
        image: "./images/strippenkaart.jpg"
      },
      {
        message: "De laatste opdracht is een puzzel. We konden helaas niet op paaskamp. Met deze puzzel maken we een rondje langs scoutingkampeerterreinen. Op elke locatie van de puzzel vind je een letter.",
        question: "De gevonden letters in de goede volgorde geeft de oplossing.",
        correctanswer: "Kampvuur",
        image: "./images/quiz.png"
      }
    ],
    message: "",
    image: "",
    question: "",
    correctanswer: "",
    answer: "",
    btnNextDisable: true,
    btnPreviousDisable: true,
    current: 0,
    last: 0,
    max: 3,
    done: false,
    error: false
  },
  mounted: function() {
    this.image = this.tasks[0].image;
    this.message = this.tasks[0].message;
    this.question = this.tasks[0].question;
    this.correctanswer = this.tasks[0].correctanswer;
    this.max = this.tasks.length - 1;
    this.$refs.answer.focus();
  },
  methods: {
    getCurrent: function () {
      this.image = this.tasks[this.current].image;
      this.message = this.tasks[this.current].message;
      this.question = this.tasks[this.current].question;
      this.correctanswer = this.tasks[this.current].correctanswer;
      this.$refs.answer.focus();
      if (this.current < this.last || this.done)
        this.answer = this.correctanswer;
      else
        this.answer = "";
    },
    toNext: function() {
      if (this.current < this.max) this.current++;
      this.getCurrent();
      if (this.last === this.current || this.current === this.max) this.btnNextDisable = true;
      if (this.current > 0) this.btnPreviousDisable = false;
    },
    toPrevious: function() {
      if (this.current > 0) this.current--;
      this.getCurrent();
      if (this.last > this.current) this.btnNextDisable = false;
      if (this.current === 0) this.btnPreviousDisable = true;
    },
    checkAnswer: function() {
      this.error = false;
      if (this.current === 0) {
        /* Set naam scout */
        this.scout = this.answer;
        this.last++;
        this.toNext();
      } else if (this.current === 1) {
        /* Set naam patrouille */
        this.patrouille = this.answer;
        this.last++;
        this.toNext();
      } else if (this.answer.toUpperCase().trim() === this.correctanswer.toUpperCase().trim()) {
        /* If answer is correct allow next task or display congratulations */
        if (this.current < this.max) {
          if (this.last < this.max) this.last++;
          this.toNext();
        } else {
          this.displaySuccess();
        }
      } else {
        this.error = true;
      }
    },
    displaySuccess: function () {
      this.done = true;
      this.current++;
      this.btnNextDisable = true;
      this.image = "./images/congrats.png";
      this.message = "Gefeliciteerd! Je hebt de hike helemaal uitgelopen. Neem contact op met de leiding en geef de geheime code door die je hierboven ziet.";
      this.question = "";
      this.correctanswer = "";
    }
  },
  template: `
    <div>
      <div class="masthead">
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div class="col-12 text-center">
              <h1 class="font-weight-heavy">Welkom {{scout}}</h1>
              <h2 class="font-weight-heavy">Patrouille {{patrouille}}</h2>
              <h2 class="font-weight-heavy">{{group}}</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="mainpage">
        <div class="container h-100 py-5">
          <div class="row">
            <div class="col-2 align-middle">
              <input type="button" id="previous" name="previous" value="Vorige opdracht" class="btn btn-primary mb-2 mr-2" :disabled="btnPreviousDisable" @click="toPrevious">
            </div>
            <div class="col-8">
              <div class="card">
                <div class="card-header">
                  {{hike}}
                </div>
                <img class="card-img-top" :src="image" alt="Opdracht">
                <div class="card-body">
                  <p class="card-title" v-html="message"></p>
                  <p class="card-text">{{question}}</p>
                  <div v-show="this.current <= this.last" class="form-group form-inline">
                    <input type="text" id="answer" name="answer" class="form-control col" ref="answer" placeholder="Antwoord" rows=10 v-on:keyup.enter="checkAnswer" v-model='answer'>
                    <input type="button" id="docheck" name="docheck" value="Controleer antwoord" class="btn btn-primary btn-default ml-2" v-on:click="checkAnswer">
                  </div>
                  <p v-show="error" class="errormsg">Helaas dit is niet het goede antwoord.</p>
                </div>
              </div>
            </div>
            <div class="col-2 align-middle">
              <input type="button" id="next" name="next" value="Volgende opdracht" class="btn btn-primary mb-2 mr-2" :disabled="btnNextDisable" v-on:click="toNext">
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p class="text-center"> &copy; 2020 Aernout Koolen</p>
      </footer>
    </div>
  `
})
