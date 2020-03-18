import { Component, OnInit } from '@angular/core';
import { Prestador } from '../prestador';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prestador',
  templateUrl: './prestador.component.html',
  styleUrls: ['./prestador.component.css']
})
export class PrestadorComponent implements OnInit {

  url = 'http://localhost:8000/api/prestador/';
  prestadores: Prestador[];
  prestador: Prestador={id: 0, nombre: '', horas: 0, inicio: '', fin: '', created_at: '', updated_at: ''};
  ifEdit = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.obtenerPrestadores();
  }
  obtenerPrestadores(){
    this.http.get(this.url).subscribe((respuesta: Prestador[])=>{this.prestadores = respuesta;});
  }
  procesar(){
    if(this.ifEdit == false){
    this.http.post(this.url, this.prestador).subscribe(respuesta => {location.reload();} );
  }else{
    //alert('Actualizando datos');
    this.http.put(this.url + this.prestador.id, this.prestador).subscribe(respuesta => {location.reload();} );
  }
  }
  eliminarPrestadores(id: number){
    this.http.delete(this.url + id).subscribe(respuesta => {location.reload();});
 }
 obtenerInfoPrestador(id: number){
   this.ifEdit = true;
   this.http.get(this.url + id).subscribe((respuesta: Prestador)=>{this.prestador = respuesta;});
 }





}
