import { Injectable } from '@angular/core'
import { Product } from 'src/app/shared/models/product.model'
import { Observable } from 'rxjs'
import { ProductsHttpService } from './products-http.service'

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private productsHttpService: ProductsHttpService) {}

  public get products(): Observable<Product[]> {
    return this.productsHttpService.products
  }
}
