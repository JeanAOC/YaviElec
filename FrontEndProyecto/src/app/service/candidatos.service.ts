import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidatosService {
  id:any;
  listarUsuario:any
  candidatos: any[] = [];
  selectedCandidato: any = null;
  url = 'http://localhost:3000/api/v1/listas';
  urlL = 'http://localhost:3000/api/v1/candidatos';
  ultimoCandidato: any[] =[];
  
  constructor(private http:HttpClient) { 
    this.loadListas();
   // this.latestLista()
   }

   loadListas() {
    return this.http.get(this.url);
  }


   addCandidato(payload: any) {
    let data = Object.values(payload)
    console.log("Data: "+ data);
    return this.http.post(this.url , payload);
  }
  addCandidatos(payload: any){
    let data = Object.values(payload)
    console.log("Data: " + data);
    return this.http.post(this.urlL, payload)
  }

  updateCandidato(id: number, payload: any) {
    const index = this.candidatos.findIndex(candidato => candidato.id === id);
    this.candidatos[index] = payload;
  }


  latestLista(id: any) {
    return this.http.get(this.url + '/' + id);
  }


  deleteCandidato(id: number) {
    const index = this.candidatos.findIndex(candidato => candidato.id === id);
    if (index > -1) {
      this.candidatos.splice(index, 1);
    }
  }

  setSelectedCandidato(id:number){
    this.selectedCandidato = id
  }

}
