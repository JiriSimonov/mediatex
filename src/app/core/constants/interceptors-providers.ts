import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { DummyjsonInterceptor } from '../interceptors/dummyjson.interceptor'

export const interceptorsProviders = [{ provide: HTTP_INTERCEPTORS, useClass: DummyjsonInterceptor, multi: true }]
