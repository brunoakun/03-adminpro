import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
  @Input() _porcentaje: number = 0;
  @Input() btnClass: string = 'btn btn-primary';  // class por defecto
  @Output() val: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  get porcentaje() {
    return (`${this._porcentaje}%`);
  }

  cambiarValor(valor: number) {
    if (this._porcentaje > 100) this._porcentaje = 100;
    
    if (this._porcentaje <= 5 && valor < 0) {
      this._porcentaje = 0;
      this.val.emit(0);
      return;
    }
    if (this._porcentaje >= 95 && valor > 1) {
      this._porcentaje = 100;
      this.val.emit(100);
      return;
    }
    this._porcentaje = this._porcentaje + valor;
    this.val.emit(this._porcentaje);
  }


  onChange(valor: number) {
    if (valor > 100) valor = 100;
    if (valor < 0) valor = 0;
    this.val.emit(valor);
  }


}
