import { Component } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-help-details',
  templateUrl: './help-details.component.html',
  styleUrls: ['./help-details.component.css']
})
export class HelpDetailsComponent {
  constructor(private dataSharingService: DataSharingService) { }
  titulo: string = ''
  descripcion: string = ''
  imagen: string = ''
  ngOnInit() {
    this.titulo = this.dataSharingService.getTitulo();
    this.descripcion = this.dataSharingService.getDescripcion();
    this.imagen = this.dataSharingService.getUrlImagen();
  }
}
