import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  data:any;
  msgd:any;
  error:any;
  msg:any
  role:any
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) { 
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      correo: ['', Validators.required],
      clave: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      
      this.login()
      this.isRole()
      Swal.fire({
        icon: 'success',
        title: 'Usuario Logeado con Exito',
      })
    //  this.router.navigate(['candidato']);
    } else {
      alert('Usuario no registrado')
    }
  }

  login() {
    // this.loginService.login(this.loginForm.value).subscribe(
    //   response => {
    //     this.router.navigate(['solicitud']);
    //     console.log(response);
    //   }
     
    // )
    this.loginService.login(this.loginForm.value).subscribe(
      (res) => {
        this.data = Object.values(res)
        this.msgd = Object.values(this.data[0]);
        this.role = Object.values(this.msgd[1])
        localStorage.setItem('token', this.msgd[0])
        localStorage.setItem('role', this.role[4])
        this.router.navigate(['vista-lista']);
        console.log(localStorage.getItem('role'));
      },
      (err) => {
        this.error = Object.values(err)
        this.msg = Object.values(this.error[7])
        alert(this.msg[1]);
      }

    );


  }

  logOut(){
    localStorage.removeItem('token');
    alert('sesion cerrada')
  }


  isRole(){
    console.log(localStorage.getItem('role'))
  }

}
