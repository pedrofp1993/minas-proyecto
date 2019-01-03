import { Component, OnInit } from "@angular/core";
import { asiento } from "~/app/bus/Asiento";
import { Router } from "@angular/router";
import {isAndroid, isIOS,screen,device } from 'tns-core-modules/platform/platform';
@Component({

    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./bus.component.html",
    styleUrls: ['./bus.css']
})
export class BusComponent implements OnInit {
    columnaniv1: number = 4;
    columnaniv2:number = 5;
    urlasientoniv2:String = "";
    urlasientoniv1:String = "";
    index:number;
    anchoPantalla:number;

    altoImagenniv1:number;
    anchoImagenniv1:number;

    altoImagenniv2:number;
    anchoImagenniv2:number;

    isIOS:boolean;

    private Asientos:asiento[]=[        {nivel:  1, fila: 0,columna: 0,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  1, fila: 0,columna: 1,tipo: 'A',disponibilidad:0,urlimage:""},
                                        {nivel:  1, fila: 0,columna: 4,tipo: 'A',disponibilidad:0,urlimage:""},

                                        {nivel:  1, fila: 1,columna: 0,tipo: 'A',disponibilidad:0,urlimage:""},
                                        {nivel:  1, fila: 1,columna: 1,tipo: 'A',disponibilidad:0,urlimage:""},
                                        {nivel:  1, fila: 1,columna: 4,tipo: 'A',disponibilidad:1,urlimage:""},

                                        {nivel:  1, fila: 2,columna: 0,tipo: 'A',disponibilidad:0,urlimage:""},
                                        {nivel:  1, fila: 2,columna: 1,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  1, fila: 2,columna: 4,tipo: 'A',disponibilidad:1,urlimage:""},

                                        {nivel:  1, fila: 3,columna: 0,tipo: 'A',disponibilidad:0,urlimage:""},
                                        {nivel:  1, fila: 3,columna: 1,tipo: 'A',disponibilidad:0,urlimage:""},
                                        {nivel:  1, fila: 3,columna: 4,tipo: 'A',disponibilidad:0,urlimage:""},

                                        {nivel:  2, fila: 0,columna: 0,tipo: 'A',disponibilidad:0,urlimage:""},
                                        {nivel:  2, fila: 0,columna: 1,tipo: 'A',disponibilidad:0,urlimage:""},
                                        {nivel:  2, fila: 0,columna: 3,tipo: 'A',disponibilidad:0,urlimage:""},
                                        {nivel:  2, fila: 0,columna: 4,tipo: 'A',disponibilidad:0,urlimage:""},

                                        {nivel:  2, fila: 1,columna: 0,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 1,columna: 1,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 1,columna: 3,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 1,columna: 4,tipo: 'A',disponibilidad:1,urlimage:""},

                                        {nivel:  2, fila: 2,columna: 0,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 2,columna: 1,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 2,columna: 3,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 2,columna: 4,tipo: 'A',disponibilidad:1,urlimage:""},

                                        {nivel:  2, fila: 3,columna: 0,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 3,columna: 1,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 3,columna: 3,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 3,columna: 4,tipo: 'A',disponibilidad:1,urlimage:""},

                                        {nivel:  2, fila: 4,columna: 0,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 4,columna: 1,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 4,columna: 3,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 4,columna: 4,tipo: 'A',disponibilidad:1,urlimage:""},

                                        {nivel:  2, fila: 5,columna: 0,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 5,columna: 1,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 5,columna: 3,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 5,columna: 4,tipo: 'A',disponibilidad:1,urlimage:""},

                                        {nivel:  2, fila: 6,columna: 0,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 6,columna: 1,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 6,columna: 3,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 6,columna: 4,tipo: 'A',disponibilidad:1,urlimage:""},

                                        {nivel:  2, fila: 7,columna: 0,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 7,columna: 1,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 7,columna: 3,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 7,columna: 4,tipo: 'A',disponibilidad:1,urlimage:""},

                                        {nivel:  2, fila: 8,columna: 0,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 8,columna: 1,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 8,columna: 3,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 8,columna: 4,tipo: 'A',disponibilidad:1,urlimage:""},

                                        {nivel:  2, fila: 9,columna: 0,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 9,columna: 1,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 9,columna: 3,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 9,columna: 4,tipo: 'A',disponibilidad:1,urlimage:""},

                                        {nivel:  2, fila: 10,columna: 0,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 10,columna: 1,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 10,columna: 3,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 10,columna: 4,tipo: 'A',disponibilidad:1,urlimage:""},

                                        {nivel:  2, fila: 11,columna: 0,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 11,columna: 1,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 11,columna: 3,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 11,columna: 4,tipo: 'A',disponibilidad:1,urlimage:""},

                                        ];
    private Asientos_sel = [];
    private ConfiguracionIOS:any[] =[];
    private ConfiguracionAndroidcol4:any[] = [{tamañomenora320: 68, tamañomayora350: 82, tamañomayora400: 88}];
    private ConfiguracionAndroidcol5:any[] = [{tamañomenora320: 50, tamañomayora350: 60, tamañomayora400: 65}];
    constructor(private router: Router

    ) { }

    ngOnInit(): void {

       this.anchoPantalla = screen.mainScreen.widthDIPs;
       console.log(this.anchoPantalla);
       this.ponerImagen2();
    }

    rabus(asiento:any,indice:number){
        this.index= 0;
        if(asiento.disponibilidad == 0){
            if(asiento.urlimage == "~/images/asiento4_sel.png")
            {
              console.log(indice)
              console.log("entra 1 4_sel");
                this.index = this.Asientos_sel.findIndex(x => x.columna == asiento.columna && x.fila == asiento.fila);
                console.log(this.index);
                this.Asientos_sel.splice(this.index,1);
                this.Asientos[indice].urlimage = "~/images/asiento4.png";

            }
            else if(asiento.urlimage == "~/images/asiento_sel.png")
            {
              console.log("entra a sel");
                this.index = this.Asientos_sel.findIndex(x => x.columna == asiento.columna && x.fila == asiento.fila);
                console.log(this.index);
                this.Asientos_sel.splice(this.index,1);
                this.Asientos[indice].urlimage = "~/images/asiento.png";

            }
            else if(asiento.urlimage == "~/images/asiento4.png")
            {

              console.log("entra a asiento4");
              console.log(this.index);
                this.Asientos_sel.push(asiento);
                this.Asientos[indice].urlimage = "~/images/asiento4_sel.png";
            }
            else if(asiento.urlimage == "~/images/asiento.png")
            {
              console.log("entra a asiento");
              console.log(this.index);
                this.Asientos_sel.push(asiento);
                this.Asientos[indice].urlimage = "~/images/asiento_sel.png";
            }

            console.log(this.Asientos_sel);
        }

    }

    obtenercol1():number{
        return this.columnaniv1 ;
    }

    obtenercol2():number{
        return this.columnaniv2;
    }

    ponerImagen2(){
        for(let i in this.Asientos){
            if(isAndroid){
            if(this.obtenercol1() == 4 && this.Asientos[i].nivel == 1){
                if(320 >= screen.mainScreen.widthDIPs){

                    this.altoImagenniv1 = this.ConfiguracionAndroidcol4[0].tamañomenora320;
                    this.anchoImagenniv1 = this.ConfiguracionAndroidcol4[0].tamañomenora320;

                } 
                else if(350 < screen.mainScreen.widthDIPs && 400 > screen.mainScreen.widthDIPs)
                {
                  //477
                  //468
                  this.altoImagenniv1 = this.ConfiguracionAndroidcol4[0].tamañomayora350;
                  this.anchoImagenniv1 = this.ConfiguracionAndroidcol4[0].tamañomayora350;

                }
                else if(400 < screen.mainScreen.widthDIPs){

                    this.altoImagenniv1 = this.ConfiguracionAndroidcol4[0].tamañomayora400;
                    this.anchoImagenniv1 = this.ConfiguracionAndroidcol4[0].tamañomayora400;

                }

                if(this.Asientos[i].disponibilidad == 0)
                {
                    this.Asientos[i].urlimage = "~/images/asiento4.png";

                } else if(this.Asientos[i].disponibilidad == 1)
                {
                    this.Asientos[i].urlimage = "~/images/asiento4_reservado.png";
                }

            } else if(this.obtenercol1() == 5 && this.Asientos[i].nivel == 1  ){

                if(320 >= screen.mainScreen.widthDIPs)
                {
                    this.altoImagenniv1 = this.ConfiguracionAndroidcol5[0].tamañomenora320;
                    this.anchoImagenniv1 = this.ConfiguracionAndroidcol5[0].tamañomenora320;
                } 
                else if(350 < screen.mainScreen.widthDIPs && 400 > screen.mainScreen.widthDIPs)
                {
                  //477
                  //468
                  this.altoImagenniv1 = this.ConfiguracionAndroidcol5[0].tamañomayora350;
                  this.anchoImagenniv1 = this.ConfiguracionAndroidcol5[0].tamañomayora350;

                }
                else if(400 < screen.mainScreen.widthDIPs)
                {

                    this.altoImagenniv1 = this.ConfiguracionAndroidcol5[0].tamañomayora400;
                    this.anchoImagenniv1 = this.ConfiguracionAndroidcol5[0].tamañomayora400;

                }

              if(this.Asientos[i].disponibilidad == 0)
              {

                  this.Asientos[i].urlimage  = "~/images/asiento.png";

              } else if(this.Asientos[i].disponibilidad == 1)
              {
                this.Asientos[i].urlimage  = "~/images/asiento_reservado.png";
              }

            }

            if(this.obtenercol2() == 4 && this.Asientos[i].nivel == 2){
                    if(320 >= screen.mainScreen.widthDIPs){
                        this.altoImagenniv2 = this.ConfiguracionAndroidcol4[0].tamañomenora320;
                        this.anchoImagenniv2 = this.ConfiguracionAndroidcol4[0].tamañomenora320;
                    } 
                    else if(350 < screen.mainScreen.widthDIPs && 400 > screen.mainScreen.widthDIPs)
                    {
                  //477
                  //468
                        this.altoImagenniv2 = this.ConfiguracionAndroidcol4[0].tamañomayora350;
                        this.anchoImagenniv2 = this.ConfiguracionAndroidcol4[0].tamañomayora350;

                    }
                    else if(400 < screen.mainScreen.widthDIPs)
                    {

                        this.altoImagenniv2 = this.ConfiguracionAndroidcol4[0].tamañomayora400;
                        this.anchoImagenniv2 = this.ConfiguracionAndroidcol4[0].tamañomayora400;

                    }
                    if(this.Asientos[i].disponibilidad == 0)
                    {
                        this.Asientos[i].urlimage = "~/images/asiento4.png";

                    } else if(this.Asientos[i].disponibilidad == 1)
                    {
                        this.Asientos[i].urlimage = "~/images/asiento4_reservado.png";
                    }
            } else if(this.obtenercol2() == 5 && this.Asientos[i].nivel == 2 ){
                if(320 >= screen.mainScreen.widthDIPs){
                    this.altoImagenniv2 = this.ConfiguracionAndroidcol5[0].tamañomenora320;
                    this.anchoImagenniv2 = this.ConfiguracionAndroidcol5[0].tamañomenora320;
                } 
                else if(350 < screen.mainScreen.widthDIPs && 400 > screen.mainScreen.widthDIPs)
                {

                  this.altoImagenniv2 = this.ConfiguracionAndroidcol5[0].tamañomayora350;
                  this.anchoImagenniv2 = this.ConfiguracionAndroidcol5[0].tamañomayora350;

                }
                else if(400 < screen.mainScreen.widthDIPs){

                    this.altoImagenniv2 = this.ConfiguracionAndroidcol5[0].tamañomayora400;
                    this.anchoImagenniv2 = this.ConfiguracionAndroidcol5[0].tamañomayora400;

                }
                  if(this.Asientos[i].disponibilidad == 0)
                  {
                      this.Asientos[i].urlimage  = "~/images/asiento.png";

                  } else if(this.Asientos[i].disponibilidad == 1)
                  {
                    this.Asientos[i].urlimage  = "~/images/asiento5_reservado.png";
                  }
            }
        }

        else if(isIOS){
          if(this.obtenercol1() == 4 && this.Asientos[i].nivel == 1)
          {
            console.log("entra 1");
            if(320 >= screen.mainScreen.widthDIPs)
            {
              this.altoImagenniv1 = 43;
              this.anchoImagenniv1 = 43;
              console.log("entra 2");
            }
            else if(320 <= screen.mainScreen.widthDIPs && 375 >= screen.mainScreen.widthDIPs)
            {
              this.altoImagenniv1 = 55;
              this.anchoImagenniv1 = 55;
            }
            else if(375 <= screen.mainScreen.widthDIPs){
              this.altoImagenniv1 = 65;
              this.anchoImagenniv1 = 65;
            }
            if(this.Asientos[i].disponibilidad == 0)
            {
              this.Asientos[i].urlimage = "~/images/asiento4.png";
            }
            else if(this.Asientos[i].disponibilidad == 1)
            {
              this.Asientos[i].urlimage = "~/images/asiento4_reservado.png";
            }
          }
          else if(this.obtenercol1() == 5 && this.Asientos[i].nivel == 1  )
          {
            if(320 >= screen.mainScreen.widthDIPs)
            {
              this.altoImagenniv1 = 25;
              this.anchoImagenniv1 = 25;
              console.log("entra 3");
            }
            else if(320 <= screen.mainScreen.widthDIPs && 375 >= screen.mainScreen.widthDIPs)
            {
              this.altoImagenniv1 = 35;
              this.anchoImagenniv1 = 35;
            }
            else if(375 <= screen.mainScreen.widthDIPs)
            {
              this.altoImagenniv1 = 45;
              this.anchoImagenniv1 = 45;
            }
            if(this.Asientos[i].disponibilidad == 0)
            {
              this.Asientos[i].urlimage  = "~/images/asiento.png";
            }
            else if(this.Asientos[i].disponibilidad == 1)
            {
              this.Asientos[i].urlimage  = "~/images/asiento_reservado.png";
            }
          }
          if(this.obtenercol2() == 4 && this.Asientos[i].nivel == 2)
          {
            if(320 >= screen.mainScreen.widthDIPs)
            {
              this.altoImagenniv2= 43;
              this.anchoImagenniv2 = 43;
              console.log("entra 4");
            }
            else if(320 <= screen.mainScreen.widthDIPs && 375 >= screen.mainScreen.widthDIPs)
            {
              this.altoImagenniv2 = 55;
              this.anchoImagenniv2 = 55;
            }
            else if(375 <= screen.mainScreen.widthDIPs){
              this.altoImagenniv2 = 65;
              this.anchoImagenniv2 = 65;
            }
            if(this.Asientos[i].disponibilidad == 0)
            {
              this.Asientos[i].urlimage = "~/images/asiento4.png";
            }
            else if(this.Asientos[i].disponibilidad == 1)
            {
              this.Asientos[i].urlimage = "~/images/asiento4_reservado.png";
            }
          }
          else if(this.obtenercol2() == 5 && this.Asientos[i].nivel == 2 )
          {
            if(320 >= screen.mainScreen.widthDIPs)
            {
              this.altoImagenniv2 = 25;
              this.anchoImagenniv2 = 25;
              console.log("entra 5");
            }
            else if(320 <= screen.mainScreen.widthDIPs && 375 >= screen.mainScreen.widthDIPs)
            {
              this.altoImagenniv2 = 35;
              this.anchoImagenniv2 = 35;
            }
            else if(414 <= screen.mainScreen.widthDIPs)
            {
              this.altoImagenniv2 = 40;
              this.anchoImagenniv2 = 40;
            }
            if(this.Asientos[i].disponibilidad == 0)
            {
              this.Asientos[i].urlimage  = "~/images/asiento.png";
            }
            else if(this.Asientos[i].disponibilidad == 1)
            {
              this.Asientos[i].urlimage  = "~/images/asiento5_reservado.png";
            }
          }
        }
      }
    }
    iraCarritoCompra(){
        this.router.navigate(['/CarritoCompra',this.Asientos_sel]);
    }

    calcularTamañoImagenes()
    {

    }

}
