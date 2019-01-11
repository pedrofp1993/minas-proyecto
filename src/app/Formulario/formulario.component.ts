import { Component, OnInit, ViewContainerRef  } from "@angular/core";
import { ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { Page } from "tns-core-modules/ui/page/page";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { HomeModalViewComponent } from '../modals/HomeModalView.component';
@Component({

    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./formulario.component.html",
    styleUrls: ['./formulario.css']
})
export class FormularioComponent implements OnInit {    
    public nacionalidad:String[]=["Peruana","Argentina","Alemana"];
    public peliculas:String[]=["Flash Gordon","Dragon ball Evolution","Sandra Bullock con una venda en los ojos"];
    public agencia_sel_ori:String;
    public agencia_sel_dest:String;
    public tipo_documento_sel:String;
    public tipo_listpicker:number=1;
    constructor(private _vcRef: ViewContainerRef, private _modalService:ModalDialogService , private _page: Page, private router: RouterExtensions, private _activeRoute: ActivatedRoute){}
      
    onTap(): Promise<any> {

        const options: ModalDialogOptions = {
            viewContainerRef: this._vcRef,
            context: this.tipo_listpicker,
            fullscreen: false
        };
    
        return this._modalService.showModal(HomeModalViewComponent, options)
            
    }
    getagenciaorigen(){
        this.onTap().then(result=>{
            if(this.validate(result)){
                this.agencia_sel_ori = result;
            }
        });
        
    }
    getagenciadestino(){
        this.onTap().then(result=>{
            if(this.validate(result)){
                this.agencia_sel_dest = result;
            }
        });
        
    }
    gettipodedocumento(){
        this.onTap().then(result=>{
            if(this.validate(result)){
                this.tipo_documento_sel = result;
            }
        });
    }
    private validate(result: any) {
        return !!result;
    }

    ngOnInit(): void {
    }

}

