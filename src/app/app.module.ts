import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EspacioComponent } from './espacio/espacio.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { CitaComponent } from './cita/cita.component';
import { MedicoComponent } from './medico/medico.component';
import { HomeComponent } from './home/home.component';

//routes 
import { RouterModule, Routes } from '@angular/router';
//forms
import { FormsModule } from '@angular/forms';
import { PrestadorComponent } from './prestador/prestador.component';
import { InventarioComponent } from './inventario/inventario.component';
import { ServicioComponent } from './servicio/servicio.component';

const appRoutes: Routes = [
  { path: 'espacio', component: EspacioComponent },
  { path: 'estudiante', component: EstudianteComponent },
  { path: 'prestador', component: PrestadorComponent },
  { path: 'inventario', component: InventarioComponent },
  { path: 'cita', component: CitaComponent },
  { path: 'servicio', component: ServicioComponent },
  { path: '**', component: HomeComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    EspacioComponent,
    EstudianteComponent,
    CitaComponent,
    MedicoComponent,
    HomeComponent,
    PrestadorComponent,
    InventarioComponent,
    ServicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
