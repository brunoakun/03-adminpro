import { Component, OnDestroy, OnInit } from '@angular/core';
import { Interval } from 'chart.js/dist/scales/scale.time';
import { interval, map, Observable, take, observable, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {
  public miSubscripcion: Subscription | undefined;
  public numeros: number[] = [0];

  constructor() { }

  ngOnInit(): void {

    // Me suscribo al observable retornaObservable, cada vez que emita algo se ejecutará el CallBack
    this.miSubscripcion = this.retornaObservable().subscribe(valor => {
      console.log(valor);
      this.numeros.push(valor);
    });

  }

  retornaObservable(): Observable<number> {
    const intervalo$ = interval(500)
      .pipe(
        map(val => {
          return (val + 1);
        }),    // Con map() podemos alterar el valor devuelto
        filter(this.esPar),  // Con filter podemos filtrar que valores devuelve, filter(bool)
        take(10),   // Solo emitirá x valores
      );

    return (intervalo$);
  }

  esPar(val: number): boolean {
    var par = true;
    if (val % 2) par = false;
    return (par);
  }

  ngOnDestroy(): void {
    this.miSubscripcion?.unsubscribe();
  }

}

