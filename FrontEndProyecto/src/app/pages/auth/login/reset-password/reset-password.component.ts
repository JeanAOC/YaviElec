import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetForm!: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }
  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  onSubmit() {
    if (this.resetForm.valid) {
      alert('Contraseña nueva enviada a su correo')
    } else {
      alert('E-mail no valido')
    }
  }
/**
 * funcion cancelar
 */

clickCancel(){
  this.router.navigate(['login'])
}
}
