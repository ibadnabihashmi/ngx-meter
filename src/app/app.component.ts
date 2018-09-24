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
  gradient = ['yellow', '#f9c970', '#ffffbe', '#b5e41691', 'lightgreen'];
  innerRadius = 40;
  radialGradiant = [150, 0, 0, 150, 150, 150];

  constructor () {

  }

  ngOnInit () {

  }

  changeScore () {
    this.score++;
  }
}
