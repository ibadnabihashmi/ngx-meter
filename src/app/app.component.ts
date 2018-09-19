import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularGaugeLibrary';
  height = 300;
  width = 300;
  score = 0;
  colors = ['red', 'orange', 'yellow', '#b5e416', 'green'];

  constructor () {

  }

  ngOnInit () {

  }

  changeScore () {
    this.score++;
  }
}
