import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';
import { Location } from "@angular/common";

@Component({
  selector: 'app-help-details',
  templateUrl: './help-details.component.html',
  styleUrls: ['./help-details.component.css']
})
export class HelpDetailsComponent {
  constructor(
    private dataSharingService: DataSharingService,
    private location: Location,
              ) { }
  titulo: string = ''
  descripcion: string = ''
  imagen: string = ''
  paises: boolean = false;

  ngOnInit() {
    window.scrollTo(0, 0);


    this.titulo = this.dataSharingService.getTitulo();
    this.descripcion = this.dataSharingService.getDescripcion();
    this.imagen = this.dataSharingService.getUrlImagen();
    if (this.titulo === '¿Qué documentación necesito?') {
      this.paises = true;
    }

  }

  public openAcordeon(e: any) {
    let text: HTMLElement | null = document.getElementById(e);
    if (text) {
      if (text.classList.contains('hidden')) {
        // Buscar todos los elementos con el patrón "accordion-collapse-body-" + un número
        const elements = document.querySelectorAll('[id^="accordion-collapse-body-"]');
        elements.forEach((element) => {
          if (element.classList.contains('d-flex')) {
            element.classList.remove('d-flex');
            element.classList.add('hidden');
          }
        });
        text.classList.remove('hidden');
        text.classList.add('d-flex');
      } else if (text.classList.contains('d-flex')) {
        text.classList.remove('d-flex');
        text.classList.add('hidden');
      }
    }
  }


  public goBack(): void {
    this.location.back();
  }
}
