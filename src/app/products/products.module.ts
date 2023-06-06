import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ProductsComponent } from './products.component'
import { productsRoutes } from './products.routes'

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, RouterModule.forChild(productsRoutes)],
})
export class ProductsModule {}
