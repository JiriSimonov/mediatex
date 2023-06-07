import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Observable } from 'rxjs'
import { ProductsService } from '../../services/products.service'
import { Product } from '../../../shared/models/product.model'
import { CartService } from '../../../cart/services/cart.service'
import { ProductState } from '../../models/product-state.model'

@Component({
  selector: 'mt-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
  public products$: Observable<Product[]> = this.productsService.products

  constructor(private productsService: ProductsService, private cartService: CartService) {}

  public onClickHandler({ inCart, product }: ProductState): void {
    if (inCart) {
      this.cartService.removeFromCart(product)
      return
    }
    this.cartService.addToCart(product)
  }

  public trackItem(id: number, item: Product): number {
    return item.id
  }
}
