import { Component } from '@angular/core';
import { CandidatosService } from 'src/app/service/candidatos.service';

@Component({
  selector: 'app-observaciones',
  templateUrl: './observaciones.component.html',
  styleUrls: ['./observaciones.component.scss']
})
export class ObservacionesComponent {
  item: any

  constructor(
    private candidatosService: CandidatosService
  ){
    this.item = this.candidatosService.selectedCandidato
    console.log(this.item)
  }

}
