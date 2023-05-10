import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http :HttpClient ) { }
  //metodo o funcionobservable que devuelve los datos
  getDatos():Observable<any> {
    //se llama al json con su path o ruta, o tambien se puede poner la url de un json online
   return this.http.get('./assets/json/data.json');
    
  }
}
