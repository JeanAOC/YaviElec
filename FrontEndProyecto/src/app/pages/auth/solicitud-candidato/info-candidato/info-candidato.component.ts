import { Component } from '@angular/core';
import { CandidatosService } from 'src/app/service/candidatos.service';

@Component({
  selector: 'app-info-candidato',
  templateUrl: './info-candidato.component.html',
  styleUrls: ['./info-candidato.component.scss']
})
export class InfoCandidatoComponent {
  item: any

  constructor(
    private candidatosService: CandidatosService
  ){
    this.item = this.candidatosService.selectedCandidato
    console.log(this.item)
  }


  
  
}
