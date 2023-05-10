import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DataService } from 'src/assets/services/data.service';


@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit  {
 // nombre =  "verónica";
 // apellido = "Carpio"
// cre una variable de instancia para almacenar los datos con los que trata el servicio 
nombre : string = "";
apellido : string = "";
//constructor inyecta el servicio para tener acceso en la clase a los metodos 
constructor(private dataService  : DataService ) { }
ngOnInit(): void {
  this.dataService.getDatos().subscribe (portfolio =>{
    console.log(portfolio);
   //definir  la info. a mostrar
   this.nombre = portfolio.nombre;
   this.apellido = portfolio.apellido;

  });
}
}

