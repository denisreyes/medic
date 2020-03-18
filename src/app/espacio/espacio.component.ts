import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Espacio } from '../espacio';
import { HttpClient } from '@angular/common/http';
import {EspacioService} from '../espacio.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-espacio',
  templateUrl: './espacio.component.html',
  styleUrls: ['./espacio.component.css']
})
export class EspacioComponent implements OnInit {
  public espacios: Espacio[];
  public nuevoEspacio: Espacio={id:0, nombre:'', created_at: '', updated_at:''};
  ifAgregado = false;

  constructor(private servicio_espacio: EspacioService, private http:HttpClient) { }

  ngOnInit() {
    //this.servicio_espacio.obtenerEspacios(this.espacios);
    this.http.get('http://localhost:8000/api/espacio').subscribe( (data: Espacio[] )=> {
      this.actualizaListaEspacios(data);
    }); 
  }
  actualizaListaEspacios(espacios: Espacio[]){
    this.espacios = espacios;
  }
  agregarEspacio(){
    this.http.post('http://localhost:8000/api/espacio', this.nuevoEspacio).subscribe(respuesta =>{this.ifAgregado = true;
    setTimeout(function(){location.reload();},1500);
  });
  }
}
