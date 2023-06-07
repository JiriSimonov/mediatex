import { NgModule } from '@angular/core'
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { RouterModule } from '@angular/router'
import { RxFor } from '@rx-angular/template/for'
import { ProductsComponent } from './products.component'
import { productsRoutes } from './products.routes'
import { ProductsListComponent } from './components/product-cards/products-list.component'
import { SharedModule } from '../shared/shared.module'
import { ProductCardComponent } from './components/product-card/product-card.component'

@NgModule({
  declarations: [ProductsComponent, ProductsListComponent, ProductCardComponent],
  imports: [CommonModule, RouterModule.forChild(productsRoutes), RxFor, NgOptimizedImage, SharedModule],
})
export class ProductsModule {}
