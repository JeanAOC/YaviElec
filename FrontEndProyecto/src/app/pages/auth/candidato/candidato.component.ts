import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { CandidatosService } from '../../../service/candidatos.service';
import Swal from 'sweetalert2';
//import { DomSanitizer } from '@angular/platform-browser';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.scss']
})
export class CandidatoComponent {
  public archivoUrl: string = 'assets/reglamento.pdf';

  nombre: string = ''; //cambio
  datosPresiNombre: string = ''; //cambio
  datosPresiCorreo: string = ''; //cambio
  datosViceNombre: string = ''; //cambio
  datosViceCorreo: string = ''; //cambio
  slogan: string = ''; //cambio
  datosSecretarioNombre: string = ''; //cambio
  datosSecretarioCorreo: string = ''; //cambio
  datosTesoreroNombre: string = ''; //cambio
  datosTesoreroCorreo: string = ''; //cambio
  nro_lista: number = 0; //cambio
  datosVocal1Nombre: string = ''; //cambio
  datosVocal1Correo: string = ''; //cambio
  datosVocal2Nombre: string = ''; //cambio
  datosVocal2Correo: string = ''; //cambio
  datosVocal3Nombre: string = ''; //cambio
  datosVocal3Correo: string = ''; //cambio
  logo: string = ''; //cambio
  propuesta: string = ''; //cambio
  estado: boolean = false;

  data: any
  form: FormGroup;
  candidatos:any[] = []
  listarUsuarios:any;
  public pre: any = [];
  public archivos: any = []

  onFile(event: any): any {
    const file: File = event.target.files[0];
    this.previewImage(file);
  }

  previewImage(file: File): any {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.pre = reader.result;
    };
    reader.readAsDataURL(file);
  }
  constructor(private formBuilder: FormBuilder,
    private candidatosService: CandidatosService,
    private router: Router
  ) {
    this.loadCandidato()
    if (this.candidatosService.selectedCandidato) {
      this.form = formBuilder.group({
        id: [this.candidatosService.selectedCandidato.id],
        nombre: [this.candidatosService.selectedCandidato.nombre, [Validators.required, Validators.minLength(2)]],
        slogan: [this.candidatosService.selectedCandidato.slogan, [Validators.required, Validators.minLength(2)]],
        nro_lista: [this.candidatosService.selectedCandidato.nro_lista, [Validators.required, Validators.min(1)]],
        logo: [this.candidatosService.selectedCandidato.logo, [Validators.required, Validators.minLength(2)]],
        propuesta: [this.candidatosService.selectedCandidato.propuesta, [Validators.required, Validators.minLength(2)]],
        estado: [this.candidatosService.selectedCandidato.estado, []],
      })
    } else {
      this.form = formBuilder.group({
        //id: [0],
        nombre: ['', [Validators.required, Validators.minLength(2)]],
        slogan: ['', [Validators.required, Validators.minLength(2)]],
        nro_lista: ['', [Validators.required, Validators.min(1)]],
        logo:this.archivos,
        propuesta: ['', [Validators.required, Validators.minLength(2)]],
        estado: [false, []],
        inputFields: this.formBuilder.array([])
      })
    }
  }

  onSubmit() {
    if (this.form.valid) {
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
          this.addCandidato();
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



  validateForm() {
    if (this.nombre === '' && this.nombre.length <= 3) {

    }
  }
  loadCandidato() {
    this.candidatosService.loadListas().subscribe(
      (res) => {
        this.listarUsuarios = <any>res;
        this.candidatos = Object.values(this.listarUsuarios);
        this.candidatos = Object.values(this.candidatos[0]);
        console.log(this.candidatos);
      },
      (err) => console.log(err)
    );
  }


  addCandidato() {
    this.candidatosService.addCandidato(this.form.value).subscribe(
      response => {
        console.log(response);
      }
    )
    this.data = Object.values(this.form.value);
    console.log("Desde componente" + this.data);
    this.candidatosService.selectedCandidato = this.candidatos;

    this.router.navigate(['/candidato1'])
  }

  // onFileSelected(event: any){
  //   const file : File = event.target.files[0]
  //   this.candidatosService.uploadImage(file)
  // }


  // addCandidatos() {
  //   this.candidatosService.addCandidatos(this.form.value).subscribe(
  //     response =>{
  //       console.log(response);
  //     }
  //   )
  //   this.data = Object.values(this.form.value);
  //   console.log("Desde componente" + this.data);
  // }
  updateCandidatos() {
    this.candidatosService.updateCandidato(this.idField.value, this.form.value);
    console.log(this.candidatosService.candidatos);
  }

  get idField() {
    return this.form.controls['id'];
  }



  get inputFields(){
    return this.form.get('inputFields') as FormArray;
  }

  addInputFied(){
    const newInputField = this.formBuilder.control('');
    this.inputFields.push(newInputField);
    console.log(this.inputFields.controls.length);
    const inpu:any = document.getElementById('inp');
    console.log(inpu);
    
    if(this.inputFields.controls.length == 7){
      alert('Numero maximo de candidatos')
      inpu.style.display = 'none';
    }
    
  }
}


