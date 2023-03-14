import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})

export class ProgressComponent implements OnInit {

  _porcen01: number = 10;
  _porcen02: number = 45;

  constructor() { }

  ngOnInit(): void {
  }

  get porcen01() {
    return (`${this._porcen01}%`)
  }

  get porcen02() {
    return (`${this._porcen02}%`)
  }
  

}
