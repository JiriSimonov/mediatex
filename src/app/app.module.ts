import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component'
import { appRoutes } from './app.routes'
import { HeaderComponent } from './core/components/header/header.component'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), HeaderComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
