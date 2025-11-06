import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from '../app.routing';
import { appRoutingProvider } from '../app.routing';
import { FormsModule } from '@angular/forms';

import { App } from './app';
import { ListaproductosComponent } from '../components/listaproductos.component/listaproductos.component';
import { MenuComponent } from '../components/menu.component/menu.component';
import { HijococheComponent } from '../components/hijocoche.component/hijocoche.component';
import { PadrecochesComponent } from '../components/padrecoches.component/padrecoches.component';
import { HijodeporteComponent } from '../components/hijodeporte.component/hijodeporte.component';
import { PadredeportesComponent } from '../components/padredeportes.component/padredeportes.component';
import { ComicsComponent } from '../components/comics.component/comics.component';
import { ComicComponent } from '../components/comic.component/comic.component';

@NgModule({
  declarations: [
    App,
    ListaproductosComponent,
    MenuComponent,
    HijococheComponent,
    PadrecochesComponent,
    HijodeporteComponent,
    PadredeportesComponent,
    ComicsComponent,
    ComicComponent
  ],
  imports: [
    BrowserModule, routing, FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(), appRoutingProvider
  ],
  bootstrap: [App]
})
export class AppModule { }
