import { Product } from '../../shared/models/product.model'

export interface ProductsResponse {
  products: Product[]
  total: number
  skip: number
  limit: number
}
