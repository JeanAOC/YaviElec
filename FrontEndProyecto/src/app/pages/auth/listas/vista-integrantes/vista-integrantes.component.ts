import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vista-integrantes',
  templateUrl: './vista-integrantes.component.html',
  styleUrls: ['./vista-integrantes.component.scss']
})
export class VistaIntegrantesComponent {

  constructor(
    private router: Router
  ){}

  clickRegresar(){
    this.router.navigate(['vista-lista'])
  }

  registrarVoto() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Voto Registrado',
      text: 'Sesión Cerrada',
      showConfirmButton: false,
      timer: 2000
    })
    this.logOut();
 }
 logOut(){
  localStorage.removeItem('token');
  this.router.navigate(['login']);
}

}
