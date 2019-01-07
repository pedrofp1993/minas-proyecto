import { Component, OnInit } from "@angular/core";
@Component({

    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./formulario.component.html",
    styleUrls: ['./formulario.css']
})
export class FormularioComponent implements OnInit {
    
    public agencia_origen:String[]=["Arequipa","Lima","Guayaquil"];
    public agencia_destino:String[]=["Arequipa","Lima","Guayaquil"];
    public tipos_documentos:String[]=["DNI","CI","CC","TI","CE"];
    ngOnInit(): void {
    }

}

