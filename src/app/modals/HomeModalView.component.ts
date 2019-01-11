import { OnInit, Component } from "@angular/core";
import { ListPicker } from "tns-core-modules/ui/list-picker";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
@Component({

    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./HomeModalView.component.html"
})
export class HomeModalViewComponent implements OnInit {
    public agencia_origen:String[]=["Arequipa","Lima","Guayaquil"];
    public tipos_documentos:String[]=["DNI","CI","CC","TI","CE"];
    public agencia_sel:String;
    public tipo_listpicker:number;
    constructor(private params:ModalDialogParams){
        this.tipo_listpicker = params.context;
        console.log(this.tipo_listpicker);
    }
    ngOnInit(){

    }
    public selectedIndexChanged(args){
        
        let picker = <ListPicker>args.object;
        this.agencia_sel = this.agencia_origen[picker.selectedIndex];
        console.log(this.agencia_sel );
        console.log(this.agencia_origen[picker.selectedIndex]);
    }
    public registrar_agencia(){
        this.params.closeCallback(this.agencia_sel);
    }
}