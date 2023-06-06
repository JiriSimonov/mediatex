import { Pipe, PipeTransform } from '@angular/core'
import { dollarExchangeRate } from '../constants/dollar-exchange-rate'

@Pipe({
  name: 'rub',
})
export class RubPipe implements PipeTransform {
  public transform(value: number): number {
    return value * dollarExchangeRate
  }
}
