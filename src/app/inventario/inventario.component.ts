import { Component, OnInit } from '@angular/core';
import { Inventario } from '../inventario';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {  
  url = 'http://localhost:8000/api/inventario/';
  inventarios: Inventario [];
  inventario: Inventario={id: 0, nombre: '', cantidad: 0, created_at: '', updated_at: ''};
  ifEdit = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.obtenerInventario();
  }
  obtenerInventario(){
    this.http.get(this.url).subscribe((respuesta: Inventario[])=>{this.inventarios = respuesta;});
  }
  procesar(){
    if(this.ifEdit == false){
      this.http.post(this.url, this.inventario).subscribe(respuesta =>{location.reload();})
    }else{
      this.http.put(this.url + this.inventario.id, this.inventario).subscribe(respuesta =>{location.reload();})
      this.ifEdit = false;
    }
  }
  eliminarInventario(id: number){
    this.http.delete(this.url + id).subscribe(respuesta =>{location.reload();})
  }
  obtenerInfoInventario(id: number){
    this.ifEdit = true;
    this.http.get(this.url + id).subscribe((respuesta: Inventario)=>{this.inventario = respuesta;})
  }




}
