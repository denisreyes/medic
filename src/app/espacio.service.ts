import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Espacio} from './espacio';

@Injectable({
  providedIn: 'root'
})
export class EspacioService {

urlEspacio="http://localhost:8000/api/espacio"

  constructor(private http: HttpClient) { }

  obtenerEspacios(espacios: Espacio[]){
    this.http.get(this.urlEspacio).subscribe( (data: Espacio[] )=> espacios = data); 
  }



  
}
