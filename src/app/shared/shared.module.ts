import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PricePipe } from './pipes/price.pipe'
import { RubPipe } from './pipes/rub.pipe'

@NgModule({
  declarations: [PricePipe, RubPipe],
  exports: [PricePipe, RubPipe],
  imports: [CommonModule],
})
export class SharedModule {}
