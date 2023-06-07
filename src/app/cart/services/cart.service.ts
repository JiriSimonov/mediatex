import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { Product } from '../../shared/models/product.model'

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems$$ = new BehaviorSubject<Product[]>([])
  public cartItems$ = this.cartItems$$.asObservable()

  public addToCart(product: Product): void {
    this.cartItems$$.next([...this.cartItems$$.value, product])
  }

  public removeFromCart(product: Product): void {
    this.cartItems$$.next([...this.cartItems$$.value.filter((cartProduct) => product.id !== cartProduct.id)])
  }
}
