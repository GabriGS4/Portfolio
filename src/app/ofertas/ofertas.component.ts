import { Component } from '@angular/core';
import {DataSharingService} from '../data-sharing.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent {
  constructor(
    private dataSharingService: DataSharingService) {
  }

  constructorTitulo: string = 'Construction assistant'
  imgUrlConstructor: string = './assets/habilidades.jpg'
  imgUrlPlumber: string = './assets/confiar.jpg'
  plumberTitulo: string = 'Plumber'
  imgUrlElectrician: string = './assets/help3.jpg'
  electricianTitulo: string = 'Electrician'
  imgUrlMontage: string = './assets/servicios.jpg'
  montageTitulo: string = 'Montage'

  constructorDetails() {
    this.dataSharingService.setTitulo(this.constructorTitulo)
    this.dataSharingService.setUrlImagen(this.imgUrlConstructor);
  }

  plumberDetails() {
    this.dataSharingService.setTitulo(this.plumberTitulo)
    this.dataSharingService.setUrlImagen(this.imgUrlPlumber);

  }

  montageDetails() {
    this.dataSharingService.setTitulo(this.montageTitulo)
    this.dataSharingService.setUrlImagen(this.imgUrlMontage);
  }

  electricianDetails() {
    this.dataSharingService.setTitulo(this.electricianTitulo)
    this.dataSharingService.setUrlImagen(this.imgUrlElectrician);

  }

}
