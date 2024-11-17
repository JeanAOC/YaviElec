import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/auth/login/login/login.component';

import { HeaderComponent } from './pages/auth/header/header.component';
import { MenuComponent } from './pages/auth/menu/menu.component';
import { CandidatoComponent } from './pages/auth/candidato/candidato.component';

import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ResetPasswordComponent } from './pages/auth/login/reset-password/reset-password.component'
import { HttpClientModule } from '@angular/common/http';
import { UsuariosComponent } from './pages/auth/usuarios/usuarios.component';
import { PerfilCandidatoComponent } from './pages/auth/solicitud-candidato/perfil-candidato/perfil-candidato.component';
import { ObservacionesComponent } from './pages/auth/solicitud-candidato/observaciones/observaciones.component';
import { VerCandidatoComponent } from './pages/auth/solicitud-candidato/ver-candidato/ver-candidato.component';
import { InfoCandidatoComponent } from './pages/auth/solicitud-candidato/info-candidato/info-candidato.component';
import { SolicitudComponent } from './pages/auth/solicitud-candidato/solicitud/solicitud.component';
import { VistaIntegrantesComponent } from './pages/auth/listas/vista-integrantes/vista-integrantes.component';
import { VistaListaComponent } from './pages/auth/listas/vista-lista/vista-lista.component';

import { TableModule } from 'primeng/table';
import { AgregarUsuariosComponent } from './pages/auth/agregar-usuarios/agregar-usuarios.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { Candidato1Component } from './pages/auth/candidato1/candidato1.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CandidatoComponent,
    Candidato1Component,
    HeaderComponent,
    MenuComponent,
    PerfilCandidatoComponent,
    ObservacionesComponent,
    VerCandidatoComponent,
    InfoCandidatoComponent,
    ObservacionesComponent,
    ResetPasswordComponent,
    UsuariosComponent,
    SolicitudComponent,
    AgregarUsuariosComponent,
    VistaIntegrantesComponent,
    VistaListaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,

    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule,
    InputNumberModule,
    InputTextModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
