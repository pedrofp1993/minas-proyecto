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

    private ConfiguracionIOScol4:any[] =[{tamañomenora320: 43, tamañoentre320y375: 55, tamañomayora375: 65}];
    private ConfiguracionIOScol5:any[] =[{tamañomenora320: 27, tamañoentre320y375: 35, tamañomayora375: 43}];
    private ConfiguracionAndroidcol4:any[] = [{tamañomenora320: 58, tamañomayora350: 75, tamañomayora400: 80}];
    private ConfiguracionAndroidcol5:any[] = [{tamañomenora320: 48, tamañomayora350: 60, tamañomayora400: 65}];
    constructor(private router: Router

    ) { }

    ngOnInit(): void {

       this.anchoPantalla = screen.mainScreen.widthDIPs;
       console.log(this.anchoPantalla);
       this.isIOS = isIOS;
       this.ponerImagen2();
    }

    rabus(asiento:any,indice:number){
        this.index= 0;
        if(asiento.disponibilidad == 0){
            if(asiento.urlimage == "~/images/asiento4_sel.png")
            {
                this.index = this.Asientos_sel.findIndex(x => x.columna == asiento.columna && x.fila == asiento.fila);
                this.Asientos_sel.splice(this.index,1);
                this.Asientos[indice].urlimage = "~/images/asiento4.png";

            }
            else if(asiento.urlimage == "~/images/asiento_sel.png")
            {
                this.index = this.Asientos_sel.findIndex(x => x.columna == asiento.columna && x.fila == asiento.fila);
                this.Asientos_sel.splice(this.index,1);
                this.Asientos[indice].urlimage = "~/images/asiento.png";

            }
            else if(asiento.urlimage == "~/images/asiento4.png")
            {
                this.Asientos_sel.push(asiento);
                this.Asientos[indice].urlimage = "~/images/asiento4_sel.png";
            }
            else if(asiento.urlimage == "~/images/asiento.png")
            {
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
            if(320 >= screen.mainScreen.widthDIPs)
            {
              this.altoImagenniv1 = this.ConfiguracionIOScol4[0].tamañomenora320;
              this.anchoImagenniv1 = this.ConfiguracionIOScol4[0].tamañomenora320;
            }
            else if(320 <= screen.mainScreen.widthDIPs && 375 >= screen.mainScreen.widthDIPs)
            {
              this.altoImagenniv1 = this.ConfiguracionIOScol4[0].tamañoentre320y375;
              this.anchoImagenniv1 = this.ConfiguracionIOScol4[0].tamañoentre320y375;
            }
            else if(375 <= screen.mainScreen.widthDIPs){
              this.altoImagenniv1 = this.ConfiguracionIOScol4[0].tamañomayora375;
              this.anchoImagenniv1 = this.ConfiguracionIOScol4[0].tamañomayora375;
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
              this.altoImagenniv1 = this.ConfiguracionIOScol5[0].tamañomenora320;
              this.anchoImagenniv1 = this.ConfiguracionIOScol5[0].tamañomenora320;
            }
            else if(320 <= screen.mainScreen.widthDIPs && 375 >= screen.mainScreen.widthDIPs)
            {
              this.altoImagenniv1 = this.ConfiguracionIOScol5[0].tamañoentre320y375;
              this.anchoImagenniv1 = this.ConfiguracionIOScol5[0].tamañoentre320y375;
            }
            else if(375 <= screen.mainScreen.widthDIPs)
            {
              this.altoImagenniv1 = this.ConfiguracionIOScol5[0].tamañomayora375;
              this.anchoImagenniv1 = this.ConfiguracionIOScol5[0].tamañomayora375;
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
              this.altoImagenniv2= this.ConfiguracionIOScol4[0].tamañomenora320;
              this.anchoImagenniv2 = this.ConfiguracionIOScol4[0].tamañomenora320;
            }
            else if(320 <= screen.mainScreen.widthDIPs && 375 >= screen.mainScreen.widthDIPs)
            {
              this.altoImagenniv2 = this.ConfiguracionIOScol4[0].tamañoentre320y375;
              this.anchoImagenniv2 = this.ConfiguracionIOScol4[0].tamañoentre320y375;
            }
            else if(375 <= screen.mainScreen.widthDIPs){
              this.altoImagenniv2 = this.ConfiguracionIOScol4[0].tamañomayora375;
              this.anchoImagenniv2 = this.ConfiguracionIOScol4[0].tamañomayora375;
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
              this.altoImagenniv2 = this.ConfiguracionIOScol5[0].tamañomenora320;
              this.anchoImagenniv2 = this.ConfiguracionIOScol5[0].tamañomenora320;
            }
            else if(320 <= screen.mainScreen.widthDIPs && 375 >= screen.mainScreen.widthDIPs)
            {
              this.altoImagenniv2 = this.ConfiguracionIOScol5[0].tamañoentre320y375;
              this.anchoImagenniv2 = this.ConfiguracionIOScol5[0].tamañoentre320y375;
            }
            else if(414 <= screen.mainScreen.widthDIPs)
            {
              this.altoImagenniv2 = this.ConfiguracionIOScol5[0].tamañomayora375;
              this.anchoImagenniv2 = this.ConfiguracionIOScol5[0].tamañomayora375;
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
