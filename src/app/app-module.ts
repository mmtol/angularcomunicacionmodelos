import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from '../app.routing';
import { appRoutingProvider } from '../app.routing';

import { App } from './app';
import { ListaproductosComponent } from '../components/listaproductos.component/listaproductos.component';
import { MenuComponent } from '../components/menu.component/menu.component';

@NgModule({
  declarations: [
    App,
    ListaproductosComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [
    provideBrowserGlobalErrorListeners(), appRoutingProvider
  ],
  bootstrap: [App]
})
export class AppModule { }
