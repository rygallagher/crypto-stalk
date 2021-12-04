import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'moneyPipe' })
export class MoneyPipe implements PipeTransform {
    transform(value: number): string {
        if (isNaN(value)) {
            return value.toFixed(2);
        } else {
            return (+value).toFixed(2);
        }
    }
}
