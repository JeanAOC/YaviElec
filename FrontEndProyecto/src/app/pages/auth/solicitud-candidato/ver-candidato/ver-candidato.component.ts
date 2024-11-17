import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatosService } from 'src/app/service/candidatos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-candidato',
  templateUrl: './ver-candidato.component.html',
  styleUrls: ['./ver-candidato.component.scss']
})

export class VerCandidatoComponent {
  candidatos: any[] = [];
  selectedCandidato: any;

  constructor(private candidatoService: CandidatosService, private router: Router) {
    this.candidatos = this.candidatoService.candidatos;
  }

  verDetalleCandidato(item: any) {
    this.candidatoService.setSelectedCandidato(item);
    this.router.navigate(['/info-candidato']);
  }

  confirmarEliminacion() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Eliminar Candidato',
      text: "¿Está seguro de eliminar este candidato?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Candidato Eliminado!',
          'El candidado se ha eliminado con exito',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Candidato no eliminado :)',
          'error'
        )
      }
    })
  }

  abrirVentanaEdicion() {
    const opciones = ['Opción 1', 'Opción 2', 'Opción 3'];

    const selectHTML = `<select id="opciones" class="swal2-input">
                        ${opciones.map(opcion => `<option value="${opcion}">${opcion}</option>`)}
                      </select>`;
    Swal.fire({
      title: 'Editar usuario',
      html:
        '<input id="nombre" class="swal2-input" placeholder="Nombre y Apellido">' +
        '<input id="correo" class="swal2-input" placeholder="Correo">' +
        '<input id="carrera" class="swal2-input" placeholder="Carrera">' +
        '<input id="nivel" class="swal2-input" placeholder="Nivel">' +
        selectHTML,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      cancelButtonText: 'Cancelar',
      preConfirm: () => {
        const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
        const correo = (document.getElementById('correo') as HTMLInputElement).value;
        const carrera = (document.getElementById('carrera') as HTMLInputElement).value;
        const nivel = (document.getElementById('nivel') as HTMLInputElement).value;
        const opcionSeleccionada = (document.getElementById('opciones') as HTMLSelectElement).value;
        // Aquí puedes realizar las acciones de guardado o actualización del usuario
        console.log('Nombre:', nombre);
        console.log('Correo:', correo);
        console.log('Carrera:', carrera);
        console.log('Nivel:', nivel);
        console.log('Opción seleccionada:', opcionSeleccionada);
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Guardado', 'El usuario ha sido actualizado', 'success');
      }
    });
  }
}
