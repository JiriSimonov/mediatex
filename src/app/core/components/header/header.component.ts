import { ChangeDetectionStrategy, Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CartService } from 'src/app/cart/services/cart.service'
import { SharedModule } from '../../../shared/shared.module'
import { Product } from '../../../shared/models/product.model'

@Component({
  selector: 'mt-header',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public cartItems$ = this.cartService.cartItems$

  constructor(private cartService: CartService) {}

  public getCartSummary(products: Product[]): number {
    return products.reduce((acc, price) => acc + price.price, 0)
  }
}
