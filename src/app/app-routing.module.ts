import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import {CarritoCompraComponent } from "./CarritoCompra/CarritoCompra.component";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import {BusComponent } from './bus/bus.component';
import { FormularioComponent } from './Formulario/formulario.component';
import { HomeModalViewComponent } from './modals/HomeModalView.component';
const routes: Routes = [
    { path: "", redirectTo: "/formulario", pathMatch: "full" },
    { path: "bus", component: BusComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "item", component: ItemsComponent },
    { path: "bus", component: BusComponent },
    { path: "CarritoCompra", component: CarritoCompraComponent },
    { path: "formulario", component: FormularioComponent },
    { path: "homemodal", component: HomeModalViewComponent },
    {path: "modal-view-actionbar",
        component: FormularioComponent,
        data: { title: "Main page" },
        children: [
            {
                path: "modal-view", component: HomeModalViewComponent
            }
        ]}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }