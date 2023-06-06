import { NgModule } from '@angular/core'
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { RouterModule } from '@angular/router'
import { RxFor } from '@rx-angular/template/for'
import { ProductsComponent } from './products.component'
import { productsRoutes } from './products.routes'
import { ProductCardsComponent } from './components/product-cards/product-cards.component'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [ProductsComponent, ProductCardsComponent],
  imports: [CommonModule, RouterModule.forChild(productsRoutes), RxFor, NgOptimizedImage, SharedModule],
})
export class ProductsModule {}
