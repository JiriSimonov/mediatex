import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'rub',
})
export class RubPipe implements PipeTransform {
  public transform(value: number): number {
    return value * 80
  }
}
