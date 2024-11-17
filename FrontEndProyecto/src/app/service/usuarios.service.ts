import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url = 'http://localhost:3000/api/v1/usuarios';
  usuarios: any[] = [];
  selectedUsuario: any = null

  constructor(private http:HttpClient) {
    this.loadUsuarios()
  }

  loadUsuarios() {
    return this.http.get(this.url);
  }

  /**
   * funtion agregar usuarios
   */
  addUsuarios(payload: any) {
    let data = Object.values(payload)
    console.log("Data: "+ data);
    return this.http.post(this.url , payload);
  }
  /**
   * function actualizar usuarios 
   */
  updateUsuario(id: number, payLoad: any) {
    const index = this.usuarios.findIndex(usuario => usuario.id === id);
    this.usuarios[index] = payLoad;
  }

  /**
   * function borrar usuarios
   */
  deleteUsuario(id: number, payLoad: any) {
    const index = this.usuarios.findIndex(usuario => usuario.id === id);
    if (index < -1) {
      this.usuarios.splice(index, 1)
    }
  }

  /**
   * function selected usuario
   */
  setSelectedUsuario(id: number) {
    this.selectedUsuario = id
  }
}
