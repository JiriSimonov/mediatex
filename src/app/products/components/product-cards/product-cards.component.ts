import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Observable } from 'rxjs'
import { ProductsService } from '../../services/products.service'
import { Product } from '../../../shared/models/product.model'
import { maxImageSize } from '../../constants/max-image-size'

@Component({
  selector: 'mt-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardsComponent {
  public products$: Observable<Product[]> = this.productsService.products
  public imgOptions = maxImageSize

  constructor(private productsService: ProductsService) {}

  public getFullPrice(price: number, discount: number): number {
    return price + (price / 100) * discount
  }
}
