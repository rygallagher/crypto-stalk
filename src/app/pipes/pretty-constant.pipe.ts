import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'prettyConstant' })
export class PrettyConstantPipe implements PipeTransform {
    transform(value: string): string {
        return value.split('_').map(s => s.charAt(0) + s.substring(1).toLowerCase()).join(' ');
    }
}
