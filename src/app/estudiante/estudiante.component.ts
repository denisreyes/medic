import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../estudiante';
import { HttpClient } from '@angular/common/http';
import {EstudianteService} from '../estudiante.service';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {
  estudiante: Estudiante = {id: 0, nombre: '', carrera: '', created_at: '', updated_at: '' };
  estudiantes: Estudiante[];
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.obtenerEstudiantes();
  }
    obtenerEstudiantes(){
      this.http.get('http://localhost:8000/api/estudiante').subscribe(
        (data: Estudiante[])=>{ this.estudiantes =  data;}
      );
    }

    eliminarEstudiante(idEstudiante){
       //alert('Eliminando estudiante con id ' + idEstudiante);
       this.http.delete('http://localhost:8000/api/estudiante'+ idEstudiante).subscribe(
        (data)=>{alert(data['message']);
        location.reload();
      });
    }
  
}
