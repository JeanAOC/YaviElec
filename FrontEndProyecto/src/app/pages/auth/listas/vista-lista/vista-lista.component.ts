import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatosService } from 'src/app/service/candidatos.service';

@Component({
  selector: 'app-vista-lista',
  templateUrl: './vista-lista.component.html',
  styleUrls: ['./vista-lista.component.scss']
})

export class VistaListaComponent {
  candidatos: any[] = [];
  selectedCandidato: any;
  listarUsuario:any
  constructor(private candidatoService: CandidatosService, private router: Router) {
    this.loadCandidato()
  }
/**
 * funcion llevar a la vista candidatos
 */
clickVerCandidatos(){
  this.router.navigate(['vista-integrantes'])
}

loadCandidato() {
  this.candidatoService.loadListas().subscribe(
    (res) => {
      this.listarUsuario = <any>res;
      this.candidatos = Object.values(this.listarUsuario);
      this.candidatos = Object.values(this.candidatos[0]);
     // this.tipoLista = Object.values(this.data[0].tipoLista)
    },
    (err) => console.log(err)
  );
}
}
