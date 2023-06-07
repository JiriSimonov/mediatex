import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'
import { Product } from '../../shared/models/product.model'
import { productsLimit } from '../constants/products-limit'
import { ProductsResponse } from '../models/products-response.model'

@Injectable({
  providedIn: 'root',
})
export class ProductsHttpService {
  constructor(private http: HttpClient) {}

  public get products(): Observable<Product[]> {
    return this.http
      .get<ProductsResponse>('products', { params: { limit: productsLimit } })
      .pipe(map((productsResponse) => productsResponse.products))
  }
}
