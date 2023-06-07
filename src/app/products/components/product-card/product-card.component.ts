import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { Product } from 'src/app/shared/models/product.model'
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

  public getFullPrice(price: number, discount: number): number {
    return price + (price / 100) * discount
  }

  public onClickHandler(): void {
    this.a.emit({ inCart: this.inCart, product: this.product })
    this.inCart = !this.inCart
  }

  public getStars(rating: number): number[] {
    return Array.from({ length: Math.round(rating) })
  }
}
