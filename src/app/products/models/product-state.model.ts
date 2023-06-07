import { Product } from 'src/app/shared/models/product.model'

export interface ProductState {
  product: Product
  inCart: boolean
}
