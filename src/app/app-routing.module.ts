import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import {BusComponent } from './bus/bus.component';

const routes: Routes = [
    { path: "", redirectTo: "/bus", pathMatch: "full" },
    { path: "bus", component: BusComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "item", component: ItemsComponent },
    { path: "bus", component: BusComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }