import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ngx-meter',
  template: `
  <canvas id="canvas"></canvas>
  `,
  styles: []
})
export class NgxMeterComponent implements OnInit, OnChanges {

  @Input() height = 0;
  @Input() width = 0;
  @Input() score = 0;
  @Input() colors = ['red', 'orange', 'yellow', '#b5e416', 'green'];
  @Input() gradient = null;
  @Input() innerRadius = 30;
  @Input() linearGradient = null;
  @Input() radialGradiant = null;

  context: any;
  canvas: any;
  center = {
    x: 0,
    y: 0
  };
  brainHealth;
  healthInDegree;
  healthInRadian;
  range;

  constructor() { }

  ngOnInit() {
    this.initMeter();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.initMeter();
  }

  public initMeter () {
    this.center.x = this.width / 2;
    this.center.y = this.height / 2;
    this.brainHealth = this.score;
    this.healthInDegree = (this.brainHealth / 100) * 180;
    this.healthInRadian = this.healthInDegree * (Math.PI / 180);
    this.range = 1;
    if (this.healthInDegree >= 0 && this.healthInDegree <= 36) {
      this.range = 1;
    }

    if (this.healthInDegree >= 36 && this.healthInDegree <= 72) {
      this.range = 2
    }

    if (this.healthInDegree >= 72 && this.healthInDegree <= 108) {
      this.range = 3;
    }

    if (this.healthInDegree >= 108 && this.healthInDegree <= 144) {
      this.range = 4;
    }

    if (this.healthInDegree >= 144 && this.healthInDegree <= 180) {
      this.range = 5;
    }

    this.drawGauge(this.height, this.width, this.healthInRadian, this.range, this.colors, this.gradient);
  }

  public drawNeedle(x, y, radius, radianAngle, color) {
    this.context.translate(x, y);
    this.context.rotate(-radianAngle);
    this.context.beginPath();
    this.context.moveTo(0, -8);
    this.context.lineTo(radius, 0);
    this.context.lineTo(0, 8);
    this.context.fillStyle = color;
    this.context.fill();
    this.context.rotate(radianAngle);
    this.context.translate(-x, -y);
    this.context.beginPath();
    this.context.arc(x, y, 10, Math.PI * 2, 0, true);
    this.context.fill();
  }

  public drawSlice(radius, innerRadius, start, end, color, gradientColor, counterClockWise) {
    this.context.fillStyle = color;
    this.context.beginPath();
    this.context.moveTo(this.center.x, this.center.y);
    this.context.arc(this.center.x, this.center.y, radius, start, end, counterClockWise);
    this.context.arc(this.center.x, this.center.y, innerRadius, end, start, !counterClockWise);
    this.context.closePath();
    if (gradientColor) {
      let gradient;
      if (this.linearGradient) {
        gradient = this.context.createLinearGradient(
          this.linearGradient[0],
          this.linearGradient[1],
          this.linearGradient[2],
          this.linearGradient[3]
        );
      } else {
        gradient = this.context.createRadialGradient(
          this.radialGradiant[0],
          this.radialGradiant[1],
          this.radialGradiant[2],
          this.radialGradiant[3],
          this.radialGradiant[4],
          this.radialGradiant[5],
        );
      }
      gradient.addColorStop(1, color);
      gradient.addColorStop(0, gradientColor);
      this.context.fillStyle = gradient;
    }
    this.context.fill();
    this.context.strokeStyle = 'white';
    this.context.stroke();
  }

  public drawArc(radius, lineWidth, start, end, color, counterClockWise) {
    this.context.beginPath();
    this.context.arc(this.center.x, this.center.y, radius, start, end, counterClockWise);
    this.context.lineWidth = lineWidth;
    this.context.strokeStyle = color;
    this.context.stroke();
  }

  public drawGauge(width, height, needlePointer, _range, colors, gradientColors) {
    this.canvas = document.getElementById('canvas');
    this.context = this.canvas.getContext('2d');

    this.context.canvas.width = width;
    this.context.canvas.height = height;

    const div = _range;
    const fullCircle = 2 * Math.PI;
    const part = 0.628319;
    const diff = div * part;
    const range: any = fullCircle - diff;
    const sliceDiv = 1;

    this.drawSlice((this.canvas.width / 2) - 20, this.innerRadius, (fullCircle - (1 * part)), fullCircle - ((1 - 1) * part), colors[0], gradientColors ? gradientColors[0] : gradientColors, false);
    this.drawSlice((this.canvas.width / 2) - 20, this.innerRadius, (fullCircle - (2 * part)), fullCircle - ((2 - 1) * part), colors[1], gradientColors ? gradientColors[1] : gradientColors, false);
    this.drawSlice((this.canvas.width / 2) - 20, this.innerRadius, (fullCircle - (3 * part)), fullCircle - ((3 - 1) * part), colors[2], gradientColors ? gradientColors[2] : gradientColors, false);
    this.drawSlice((this.canvas.width / 2) - 20, this.innerRadius, (fullCircle - (4 * part)), fullCircle - ((4 - 1) * part), colors[3], gradientColors ? gradientColors[3] : gradientColors, false);
    this.drawSlice((this.canvas.width / 2) - 20, this.innerRadius, (fullCircle - (5 * part)), fullCircle - ((5 - 1) * part), colors[4], gradientColors ? gradientColors[4] : gradientColors, false);
    //drawSlice(30, Math.PI, 0, 'white');

    this.drawArc((this.canvas.width / 2) - 10, 16, Math.PI, 0, '#4b4b4b', false);
    this.drawArc((this.canvas.width / 2) - 10, 16, range, fullCircle - ((div - 1) * part), 'black', false);
    this.drawArc((this.canvas.width / 2) - 20, 6, Math.PI, 0, 'grey', false);

    this.drawNeedle(this.center.x, this.center.y, 80, needlePointer, 'black');
  }

}
