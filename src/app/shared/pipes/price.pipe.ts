import { Pipe, PipeTransform } from '@angular/core'
import { formatCurrency } from '@angular/common'
import { pricePipeOptions } from '../constants/price-pipe-options'
import { dollarExchangeRate } from '../constants/dollar-exchange-rate'

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  public transform(
    value: number,
    currencyCode: string = pricePipeOptions.currencyCode,
    digitsInfo: string = pricePipeOptions.digitsInfo,
    locale: string = pricePipeOptions.locale,
  ): string {
    return formatCurrency(value * dollarExchangeRate, locale, currencyCode, currencyCode, digitsInfo)
  }
}
