import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./CarritoCompra.component.html"
})
export class CarritoCompraComponent implements OnInit {
   
    constructor(private router: Router
        
    ) { }

    ngOnInit(): void {
      
    }
}