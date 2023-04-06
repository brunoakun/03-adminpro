import { Pipe, PipeTransform } from '@angular/core';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/esm/locale';

/**
 * Muestra fecha/hora (desde x hasta ahora) con formato amigable
 */

@Pipe({
  name: 'friendlyTimestamp'
})
export class FriendlyTimestampPipe implements PipeTransform {

  transform(value: number): string {
    // Pasar del time() de PHP al time de js
    return formatDistanceToNow(new Date(value * 1000), { locale: es });
  }

}
