import { ListaproductosComponent } from "./components/listaproductos.component/listaproductos.component";

import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
const appRoutes:Routes=
[
    {
        path:"listaproductos",
        component:ListaproductosComponent
    }
]

export const appRoutingProvider: any[] = [];

export const routing:ModuleWithProviders<any> =
RouterModule.forRoot(appRoutes);