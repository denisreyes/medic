import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Estudiante} from './estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  urlEstudiante="http://localhost:8000/api/estudiante"

  constructor(private http: HttpClient) { }
  obtenerEstudiantes(estudiantes: Estudiante[]){
    this.http.get(this.urlEstudiante).subscribe( (data: Estudiante[] )=> estudiantes = data); 
  }
}
