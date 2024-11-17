import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatosService } from 'src/app/service/candidatos.service';

@Component({
  selector: 'app-perfil-candidato',
  templateUrl: './perfil-candidato.component.html',
  styleUrls: ['./perfil-candidato.component.scss']
})
export class PerfilCandidatoComponent {
  candidatos: any[] = [];
  selectedCandidato: any;

  constructor(private candidatoService: CandidatosService, private router: Router) {
    this.candidatos = this.candidatoService.candidatos;
  }

  createCandidato() {
    this.candidatoService.selectedCandidato = null;
    this.router.navigate(['candidato']);
  }

  editCandidato(candidato: any) {
    this.candidatoService.selectedCandidato = candidato;
    this.router.navigate(['candidato']);
  }

  deleteCandidato(id: number) {
    this.candidatoService.deleteCandidato(id);
    console.log(this.selectedCandidato.candidatos);
  }
}
