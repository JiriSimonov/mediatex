import { ChangeDetectionStrategy, Component } from '@angular/core'
import { tap } from 'rxjs'
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'mt-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardsComponent {
  public products$ = this.productsService.products.pipe(tap(console.log))

  constructor(private productsService: ProductsService) {}
}
