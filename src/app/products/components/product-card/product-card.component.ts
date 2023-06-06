import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { Product } from 'src/app/shared/models/product.model'
import { maxImageSize } from '../../constants/max-image-size'
import { ProductState } from '../../models/product-state.model'

@Component({
  selector: 'mt-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  @Input() public product!: Product
  @Output() public a = new EventEmitter<ProductState>()

  public inCart = false
  public readonly imgOptions = maxImageSize
  protected readonly maxImageSize = maxImageSize

  public getFullPrice(price: number, discount: number): number {
    return price + (price / 100) * discount
  }

  public onClickHandler(): void {
    this.a.emit({ inCart: this.inCart, product: this.product })
    this.inCart = !this.inCart
  }
}
