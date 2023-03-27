import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {
  salida: string = '';

  constructor() { }

  ngOnInit(): void {

    const promesa = new Promise((resolve) => {
      // el CallBack resolve es la función a ejecutar
      resolve('promesa OK, resolve callBack hola mundo');
    });

    promesa.then((mensaje) => {
      // .then se ejecuta al finalizar el callback correctamente
      this.salida! += mensaje + '<br>';
    }).catch((err) => {
      // .catch se ejecuta al producirse un error 
      this.salida! += 'promesa ERROR' + err + '<br>';
    }).finally(() => {
      // .finally se ejecuta siempre independientemente de como acabe el callback
      this.salida! += 'promesa finally, acabado callBack' + '<br>';
    })

    console.log('Fin ngOnInit()');
  }

}
