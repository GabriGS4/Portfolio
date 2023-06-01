import { Component } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';
@Component({
  selector: 'app-help-you',
  templateUrl: './help-you.component.html',
  styleUrls: ['./help-you.component.css']
})
export class HelpYouComponent {
  constructor(
    private dataSharingService: DataSharingService) { }

  habilidadesTitulo: string = '¿Cuáles son mis habilidades?'
  imgUrlHabilidades: string = './assets/help1.jpg'
  habilidadesDesc: string = 'El proceso de adquirir la capacidad de reconocer y familiarizarse con tus aptitudes implica sumergirte en un viaje de autoexploración que te brinda una perspectiva más profunda sobre ti mismo. Al identificar y comprender tus habilidades, podrás tener una visión clara de tus fortalezas y debilidades en las distintas áreas de tu vida. Esta valiosa introspección te permitirá no solo reconocer lo que eres capaz de lograr, sino también comprender en qué áreas específicas destacas. Al tener un conocimiento sólido de tus aptitudes, te encontrarás en una posición ventajosa para aprovechar al máximo tus talentos y habilidades innatas. Conocer tus fortalezas te brinda una guía para enfocar tus esfuerzos y energía en las áreas en las que tienes un mayor potencial de éxito. Además, te proporciona una base sólida para establecer metas realistas y alcanzables, tanto a nivel profesional como personal. Es importante destacar que la identificación y comprensión de tus aptitudes no solo te beneficia a nivel individual, sino que también juega un papel fundamental en tu desarrollo profesional. Al conocer tus habilidades profesionales, puedes tomar decisiones informadas sobre tu carrera y elegir un camino que se alinee con tus fortalezas. Esto te permite no solo disfrutar de tu trabajo, sino también destacarte en tu campo y alcanzar el éxito profesional.'
  imgUrlConfiar: string = './assets/help2.jpg'
  confiarTitulo: string = '¿Por qué confiar en nosotros?'
  confiarDesc: string = 'Deseamos convertirnos en un aliado confiable y comprometido, dispuesto a abordar todos tus desafíos, preocupaciones e incluso necesidades insatisfechas. Nuestra meta es brindarte un servicio que vaya más allá de tus expectativas, respaldado por nuestro conocimiento especializado y creatividad. Estamos aquí para ofrecerte soluciones eficientes y efectivas en todo momento, a través de planteamientos innovadores y propuestas que se ajusten a tus necesidades. En nuestro enfoque, tú eres nuestra máxima prioridad. Nos esforzamos para que te sientas bien en cada etapa de nuestra colaboración, garantizando que tus requisitos y deseos sean atendidos de manera integral. Como equipo, trabajamos con flexibilidad para adaptarnos a tus circunstancias cambiantes, reconociendo que cada situación es única y merece una atención personalizada. Nuestro objetivo es ser tu socio de confianza, aquel en quien puedas depositar tu plena confianza para superar cualquier obstáculo o desafío que se presente en tu camino. Estamos aquí para proporcionarte nuestro expertise, basado en años de experiencia y conocimientos especializados en nuestra área de trabajo. Además, nos esforzamos por aportar un enfoque ingenioso y creativo a todas nuestras soluciones, buscando siempre superar tus expectativas.'
  imgUrlIdiomas: string = './assets/help2.jpg'
  idiomasTitulo: string = '¿Puedo irme a trabjar al extranjero sin saber idiomas?'
  idiomasDesc: string = 'Definitivamente, ir a trabajar al extranjero sin saber idiomas es una aventura emocionante, pero también puede ser una tarea desafiante y requerir un gran esfuerzo por tu parte. Sin embargo, esto no debe disuadirte de buscar esta experiencia, ya que hay muchas maneras de aprender un idioma en el extranjero. Ir a un país que no habla tu idioma natal puede ser intimidante al principio, pero también es una oportunidad única para sumergirte en una nueva cultura y aprender un nuevo idioma en un ambiente auténtico y real. Podrás experimentar la cultura local y aprender el idioma de manera natural, en situaciones cotidianas, como en el trabajo, en el supermercado o en el transporte público. Es cierto que si no hablas el idioma local, es posible que tengas dificultades para comunicarte con tus compañeros de trabajo y otros locales. Sin embargo, esto no significa que no puedas hacer amigos o tener éxito en tu trabajo. Muchas empresas internacionales buscan empleados que hablen inglés, por lo que puedes encontrar trabajo en un entorno donde no necesitas hablar el idioma local para empezar. Pero lo más importante es tener una actitud positiva y estar dispuesto a aprender. Si estás dispuesto a esforzarte y a trabajar duro, puedes aprender el idioma rápidamente y mejorar tus habilidades de comunicación. También puedes aprovechar la oportunidad de tomar clases de idiomas en línea o en una escuela local para ayudarte a mejorar. En conclusión, es posible ir a trabajar al extranjero sin saber el idioma local, pero debes estar dispuesto a enfrentar un desafío y a trabajar duro para aprender el idioma y adaptarte a la cultura local. Si estás dispuesto a hacer esto, esta experiencia puede ser muy gratificante y transformadora, y puedes regresar a casa con nuevas habilidades y perspectivas que te servirán en tu vida profesional y personal.'
  imgUrlDiferencia:string = './assets/help3.jpg'
  diferenciaTitulo: string = '¿Cuáles son los beneficios de utilizar nuestros servicios de reclutamiento para buscar empleo en otros países?'
  diferenciaDesc: string = 'En nuestro enfoque cercano y comprometido, nos consideramos más que una empresa: somos tus verdaderos compañeros de viaje en esta odisea que es la vida. Entendemos la importancia de contar con apoyo y guía en cada paso que das, y por eso nos comprometemos a estar a tu lado en cada etapa de tu camino. Nuestro objetivo principal es brindarte un asesoramiento integral, de principio a fin. Queremos que te sientas respaldado y seguro en tus decisiones, sabiendo que puedes contar con nosotros para proporcionarte la información y el apoyo necesario en cada situación que enfrentes. Estamos aquí para escucharte, comprender tus necesidades y ofrecerte soluciones adecuadas y personalizadas. Además, nos enorgullece decir que no cobramos costos adicionales por nuestro asesoramiento. Creemos firmemente en la importancia de brindar un servicio accesible y de calidad, sin que el aspecto económico sea una barrera para obtener el apoyo que necesitas. Nuestro compromiso es brindarte un valor real y significativo, y eso incluye asegurarnos de que puedas acceder a nuestros servicios sin preocuparte por cargos adicionales. Nos esforzamos por ser un punto de apoyo confiable en tu viaje. Puedes acudir a nosotros en cualquier momento, sin importar las circunstancias en las que te encuentres. Ya sea que necesites orientación en momentos de incertidumbre, asistencia en la toma de decisiones importantes o simplemente alguien con quien compartir tus inquietudes, estamos aquí para ti.'
  imgUrlRequisitos: string = './assets/help2.jpg'
  requisitosTitulo: string = '¿Cuáles son los requisitos para ser reclutado y trabajar o ir a trabajar a otro país?'
  requisitosDesc: string = 'Para ser reclutado y trabajar en otro país a través de nuestra agencia, debes cumplir con los siguientes requisitos: - Ser mayor de edad. - Tener un pasaporte válido con al menos seis meses de vigencia restante. - Contar con la documentación necesaria para trabajar legalmente en el país de destino (visas, permisos de trabajo, etc.). - Estar dispuesto a cumplir con las regulaciones y normativas del país de destino. - Estar dispuesto a adaptarte a nuevas culturas y entornos laborales. - No tener antecedentes penales.'


  habilidadesDetails() {
    this.dataSharingService.setTitulo(this.habilidadesTitulo)
    this.dataSharingService.setDescripcion(this.habilidadesDesc);
    this.dataSharingService.setUrlImagen(this.imgUrlHabilidades);
  }

  confiarDetails() {
    this.dataSharingService.setTitulo(this.confiarTitulo)
    this.dataSharingService.setDescripcion(this.confiarDesc);
    this.dataSharingService.setUrlImagen(this.imgUrlConfiar);

  }

  idiomasDetails() {
    this.dataSharingService.setTitulo(this.idiomasTitulo)
    this.dataSharingService.setDescripcion(this.idiomasDesc);
    this.dataSharingService.setUrlImagen(this.imgUrlIdiomas);

  }

  diferenciaDetails() {
    this.dataSharingService.setTitulo(this.diferenciaTitulo)
    this.dataSharingService.setDescripcion(this.diferenciaDesc);
    this.dataSharingService.setUrlImagen(this.imgUrlDiferencia);

  }


  requisitosDetails() {
    this.dataSharingService.setTitulo(this.requisitosTitulo)
    this.dataSharingService.setDescripcion(this.requisitosDesc);
    this.dataSharingService.setUrlImagen(this.imgUrlRequisitos);
  }
}
