import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'
import localeRu from '@angular/common/locales/ru'
import { registerLocaleData } from '@angular/common'
import { AppComponent } from './app.component'
import { appRoutes } from './app.routes'
import { HeaderComponent } from './core/components/header/header.component'
import { interceptorsProviders } from './core/constants/interceptors-providers'

registerLocaleData(localeRu)

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), HeaderComponent, BrowserAnimationsModule, HttpClientModule],
  providers: [interceptorsProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
