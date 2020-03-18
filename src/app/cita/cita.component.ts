import { Component, OnInit } from '@angular/core';
import { Cita } from '../cita';
import { HttpClient } from '@angular/common/http';
import { Espacio } from '../espacio';
import { Servicio } from '../servicio';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit {

  url = 'http://localhost:8000/api/cita/';
  urlE = 'http://localhost:8000/api/espacio/';
  urlS = 'http://localhost:8000/api/servicio/';
  citas: Cita[];
  espacios: Espacio[];
  servicios: Servicio[];
  cita: Cita = {id: 0, fechaHora: '', espacio: '', nombre: '', servicio: '',created_at: '',updated_at: ''};
  ifEdit =  false;
  ifAgregado = false;
  ifActualizado = false;
  ifEliminado = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.obtenerCitas();
    this.obtenerEspacio();
    this.obtenerServicio();
  }
  obtenerCitas(){
    this.http.get(this.url).subscribe((respuesta: Cita[])=>{this.citas = respuesta;});
  }
  obtenerEspacio(){
    this.http.get(this.urlE).subscribe((respuesta: Espacio[])=>{this.espacios = respuesta;});
  }
  obtenerServicio(){
    this.http.get(this.urlS).subscribe((respuesta: Servicio[])=>{this.servicios = respuesta;});
  }
  procesar(){
    if(this.ifEdit == false){
      this.http.post(this.url, this.cita).subscribe(respuesta =>{this.ifAgregado=true;
        setTimeout(function(){location.reload();},2000)
      });
    }else{
      this.http.put(this.url + this.cita.id, this.cita).subscribe(respuesta =>{this.ifActualizado=true;
        setTimeout(function(){location.reload();},2000)
      });
    }
   
  }
  eliminarCita(id: number){
    this.http.delete(this.url + id).subscribe(respuesta =>{this.ifEliminado=true;
      setTimeout(function(){location.reload();},2000)});
  }
  obtenerInfoCita(id: number){
    this.ifEdit = true;
    this.http.get(this.url + id).subscribe((respuesta: Cita)=> {this.cita = respuesta;});
  }





}
