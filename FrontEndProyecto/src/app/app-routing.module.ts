import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login/login.component';
import { HeaderComponent } from './pages/auth/header/header.component';
import { MenuComponent } from './pages/auth/menu/menu.component';
import { CandidatoComponent } from './pages/auth/candidato/candidato.component';
import { ResetPasswordComponent } from './pages/auth/login/reset-password/reset-password.component';
import { UsuariosComponent } from './pages/auth/usuarios/usuarios.component';
import { SolicitudComponent } from './pages/auth/solicitud-candidato/solicitud/solicitud.component';
import { PerfilCandidatoComponent } from './pages/auth/solicitud-candidato/perfil-candidato/perfil-candidato.component';
import { ObservacionesComponent } from './pages/auth/solicitud-candidato/observaciones/observaciones.component';
import { VerCandidatoComponent } from './pages/auth/solicitud-candidato/ver-candidato/ver-candidato.component';
import { InfoCandidatoComponent } from './pages/auth/solicitud-candidato/info-candidato/info-candidato.component';
import { AgregarUsuariosComponent } from './pages/auth/agregar-usuarios/agregar-usuarios.component';
import { VistaListaComponent } from './pages/auth/listas/vista-lista/vista-lista.component';
import { VistaIntegrantesComponent } from './pages/auth/listas/vista-integrantes/vista-integrantes.component';
import { PermisosGuard } from './guard/permisos.guard';
import { RoleGuard } from './guard/role.guard';
import { Candidato1Component } from './pages/auth/candidato1/candidato1.component';




const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'candidato', component: CandidatoComponent},
  { path: 'candidato1', component: Candidato1Component},
  { path: 'observaciones', component: ObservacionesComponent, canActivate:[PermisosGuard] },
  { path: 'solicitud', component: SolicitudComponent ,canActivate:[PermisosGuard, RoleGuard]},
  { path: 'perfil-candidato', component: PerfilCandidatoComponent ,canActivate:[PermisosGuard]},
  { path: 'observaciones', component: ObservacionesComponent ,canActivate:[PermisosGuard]},
  { path: 'ver-candidato', component: VerCandidatoComponent ,canActivate:[PermisosGuard]},
  { path: 'agregar-usuarios', component: AgregarUsuariosComponent ,canActivate:[PermisosGuard]},
  { path: 'info-candidato', component: InfoCandidatoComponent ,canActivate:[PermisosGuard]},
  { path: 'resetearContraseña', component: ResetPasswordComponent },
  { path: 'usuarios', component: UsuariosComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'agregar-usuarios', component: AgregarUsuariosComponent ,canActivate:[PermisosGuard]},
  { path: 'vista-lista', component: VistaListaComponent ,canActivate:[PermisosGuard]},
  { path: 'vista-integrantes', component: VistaIntegrantesComponent ,canActivate:[PermisosGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
