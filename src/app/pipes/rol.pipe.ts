import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rol'
})
export class RolPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return 'hola';
  }

}
