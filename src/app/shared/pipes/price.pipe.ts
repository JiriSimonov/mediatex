import { Pipe, PipeTransform } from '@angular/core'
import { formatCurrency, getCurrencySymbol } from '@angular/common'

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  public transform(
    value: number,
    currencyCode: string = '₽',
    digitsInfo: string = '3.0-0',
    locale: string = 'ru',
  ): string | null {
    return formatCurrency(value, locale, getCurrencySymbol(currencyCode, 'wide'), currencyCode, digitsInfo)
  }
}
