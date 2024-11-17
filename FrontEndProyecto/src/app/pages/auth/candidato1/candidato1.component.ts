import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { CandidatosService } from '../../../service/candidatos.service';
import Swal from 'sweetalert2';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-candidato1',
  templateUrl: './candidato1.component.html',
  styleUrls: ['./candidato1.component.scss']
})
export class Candidato1Component {
  public archivoUrl: string = 'assets/reglamento.pdf';

  nombre: string = ''; //cambio

  data: any
  form: FormGroup;
  candidatos: any[] = []
  ultimoCandidato: any[] = []
  listarUsuarios: any;
  lista: any[] = [];
  id: any
  btn: any = document.getElementById('registrar');

  public pre: any = [];
  public archivos: any = []

  constructor(private formBuilder: FormBuilder,
    private candidatosService: CandidatosService,
  ) {
    this.loadCandidato()    
    console.log(this.ultimoCandidato);

    this.form = formBuilder.group({
      lista: [this.ultimoCandidato[0]],
      nombre: [''],
      correo: [''],
      cargo: ['']
    })

  }

  onSubmit() {
    if (this.form.valid) {
      this.addCandidato();
      // this.onFileSelected(this.logo)
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })

      swalWithBootstrapButtons.fire({
        title: 'Esta seguro de que quiere registrar esta lista?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Registrar lista',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Lista Registrada con Exito!',
            'Se enviará un correo de confirmación si su lista ha sido aceptada',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado!',
            'No se ha Registrado la Lista :)',
            'error'
          )
        }
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'No se ha completado el Registro',
        text: 'Complete el registro para continuar!',
      })
    }
    console.log(this.form.valid);
  }

  loadCandidato() {
    this.candidatosService.loadListas().subscribe(
      (res) => {
         this.listarUsuarios = <any>res;
        this.candidatos = Object.values(this.listarUsuarios);
        this.candidatos = Object.values(this.candidatos[0]);
        return this.ultimoCandidato.push(this.candidatos[this.candidatos.length - 1])
      },
      (err) => console.log(err)
    );
  }
  validateForm() {
    if (this.nombre === '' && this.nombre.length <= 3) {

    }
  }

  addCandidato() {
    this.candidatosService.addCandidatos(this.form.value).subscribe(
      response => {
        console.log(response);
      }
    )
    this.data = Object.values(this.form.value);
    console.log("Desde componente" + this.data);

  }

  get idField() {
    return this.form.controls['id'];
  }
}


