import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { RxFor } from '@rx-angular/template/for'
import { ProductsComponent } from './products.component'
import { productsRoutes } from './products.routes'
import { ProductCardsComponent } from './components/product-cards/product-cards.component'

@NgModule({
  declarations: [ProductsComponent, ProductCardsComponent],
  imports: [CommonModule, RouterModule.forChild(productsRoutes), RxFor],
})
export class ProductsModule {}
