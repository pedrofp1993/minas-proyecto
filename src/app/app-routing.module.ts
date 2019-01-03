import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import {CarritoCompraComponent } from "./CarritoCompra/CarritoCompra.component";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import {BusComponent } from './bus/bus.component';

const routes: Routes = [
    { path: "", redirectTo: "/bus", pathMatch: "full" },
    { path: "bus", component: BusComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "item", component: ItemsComponent },
    { path: "bus", component: BusComponent },
    { path: "CarritoCompra", component: CarritoCompraComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }