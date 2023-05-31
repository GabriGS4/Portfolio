import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  titulo: string = ''
  descripcion: string = ''
  urlImagen: string = ''

  constructor() { }

  setTitulo(titulo: string) {
    this.titulo = titulo;
  }

  getTitulo() {
    return this.titulo;
  }

  setDescripcion(descripcion: string) {
    this.descripcion = descripcion;
  }

  getDescripcion() {
    return this.descripcion;
  }

  setUrlImagen(urlImagen: string) {
    this.urlImagen = urlImagen;
  }

  getUrlImagen() {
    return this.urlImagen;
  }
}
