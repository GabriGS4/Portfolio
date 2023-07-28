import {Component} from '@angular/core';
import {DataSharingService} from '../data-sharing.service';

@Component({
  selector: 'app-help-you',
  templateUrl: './help-you.component.html',
  styleUrls: ['./help-you.component.css']
})
export class HelpYouComponent {
  constructor(
    private dataSharingService: DataSharingService) {
  }

  habilidadesTitulo: string = '¿Cuáles son mis habilidades?'
  imgUrlHabilidades: string = './assets/habilidades.jpg'
  habilidadesDesc: string = 'El proceso de adquirir la capacidad de reconocer y familiarizarse con tus aptitudes implica sumergirte en un viaje de autoexploración que te brinda una perspectiva más profunda sobre ti mismo. Al identificar y comprender tus habilidades, podrás tener una visión clara de tus fortalezas y debilidades en las distintas áreas de tu vida. Esta valiosa introspección te permitirá no solo reconocer lo que eres capaz de lograr, sino también comprender en qué áreas específicas destacas. Al tener un conocimiento sólido de tus aptitudes, te encontrarás en una posición ventajosa para aprovechar al máximo tus talentos y habilidades innatas. Conocer tus fortalezas te brinda una guía para enfocar tus esfuerzos y energía en las áreas en las que tienes un mayor potencial de éxito. Además, te proporciona una base sólida para establecer metas realistas y alcanzables, tanto a nivel profesional como personal. Es importante destacar que la identificación y comprensión de tus aptitudes no solo te beneficia a nivel individual, sino que también juega un papel fundamental en tu desarrollo profesional. Al conocer tus habilidades profesionales, puedes tomar decisiones informadas sobre tu carrera y elegir un camino que se alinee con tus fortalezas. Esto te permite no solo disfrutar de tu trabajo, sino también destacarte en tu campo y alcanzar el éxito profesional.'
  imgUrlConfiar: string = './assets/confiar.jpg'
  confiarTitulo: string = '¿Por qué confiar en nosotros?'
  confiarDesc: string = 'Deseamos convertirnos en un aliado confiable y comprometido, dispuesto a abordar todos tus desafíos, preocupaciones e incluso necesidades insatisfechas. Nuestra meta es brindarte un servicio que vaya más allá de tus expectativas, respaldado por nuestro conocimiento especializado y creatividad. Estamos aquí para ofrecerte soluciones eficientes y efectivas en todo momento, a través de planteamientos innovadores y propuestas que se ajusten a tus necesidades. En nuestro enfoque, tú eres nuestra máxima prioridad. Nos esforzamos para que te sientas bien en cada etapa de nuestra colaboración, garantizando que tus requisitos y deseos sean atendidos de manera integral. Como equipo, trabajamos con flexibilidad para adaptarnos a tus circunstancias cambiantes, reconociendo que cada situación es única y merece una atención personalizada. Nuestro objetivo es ser tu socio de confianza, aquel en quien puedas depositar tu plena confianza para superar cualquier obstáculo o desafío que se presente en tu camino. Estamos aquí para proporcionarte nuestro expertise, basado en años de experiencia y conocimientos especializados en nuestra área de trabajo. Además, nos esforzamos por aportar un enfoque ingenioso y creativo a todas nuestras soluciones, buscando siempre superar tus expectativas.'
  imgUrlIdiomas: string = './assets/help3.jpg'
  idiomasTitulo: string = '¿Puedo irme a trabajar al extranjero sin saber idiomas?'
  idiomasDesc: string = 'Definitivamente, ir a trabajar al extranjero sin saber idiomas es una aventura emocionante, pero también puede ser una tarea desafiante y requerir un gran esfuerzo por tu parte. Sin embargo, esto no debe disuadirte de buscar esta experiencia, ya que hay muchas maneras de aprender un idioma en el extranjero. Ir a un país que no habla tu idioma natal puede ser intimidante al principio, pero también es una oportunidad única para sumergirte en una nueva cultura y aprender un nuevo idioma en un ambiente auténtico y real. Podrás experimentar la cultura local y aprender el idioma de manera natural, en situaciones cotidianas, como en el trabajo, en el supermercado o en el transporte público. Es cierto que si no hablas el idioma local, es posible que tengas dificultades para comunicarte con tus compañeros de trabajo y otros locales. Sin embargo, esto no significa que no puedas hacer amigos o tener éxito en tu trabajo. Muchas empresas internacionales buscan empleados que hablen inglés, por lo que puedes encontrar trabajo en un entorno donde no necesitas hablar el idioma local para empezar. Pero lo más importante es tener una actitud positiva y estar dispuesto a aprender. Si estás dispuesto a esforzarte y a trabajar duro, puedes aprender el idioma rápidamente y mejorar tus habilidades de comunicación. También puedes aprovechar la oportunidad de tomar clases de idiomas en línea o en una escuela local para ayudarte a mejorar. En conclusión, es posible ir a trabajar al extranjero sin saber el idioma local, pero debes estar dispuesto a enfrentar un desafío y a trabajar duro para aprender el idioma y adaptarte a la cultura local. Si estás dispuesto a hacer esto, esta experiencia puede ser muy gratificante y transformadora, y puedes regresar a casa con nuevas habilidades y perspectivas que te servirán en tu vida profesional y personal.'
  imgUrlDiferencia: string = './assets/servicios.jpg'
  imgUrlPaises: string = './assets/documentacionPaises.jpg'
  diferenciaTitulo: string = '¿Cuáles son los beneficios de utilizar nuestros servicios de reclutamiento para buscar empleo en otros países?'
  diferenciaDesc: string = 'En nuestro enfoque cercano y comprometido, nos consideramos más que una empresa: somos tus verdaderos compañeros de viaje en esta odisea que es la vida. Entendemos la importancia de contar con apoyo y guía en cada paso que das, y por eso nos comprometemos a estar a tu lado en cada etapa de tu camino. Nuestro objetivo principal es brindarte un asesoramiento integral, de principio a fin. Queremos que te sientas respaldado y seguro en tus decisiones, sabiendo que puedes contar con nosotros para proporcionarte la información y el apoyo necesario en cada situación que enfrentes. Estamos aquí para escucharte, comprender tus necesidades y ofrecerte soluciones adecuadas y personalizadas. Además, nos enorgullece decir que no cobramos costos adicionales por nuestro asesoramiento. Creemos firmemente en la importancia de brindar un servicio accesible y de calidad, sin que el aspecto económico sea una barrera para obtener el apoyo que necesitas. Nuestro compromiso es brindarte un valor real y significativo, y eso incluye asegurarnos de que puedas acceder a nuestros servicios sin preocuparte por cargos adicionales. Nos esforzamos por ser un punto de apoyo confiable en tu viaje. Puedes acudir a nosotros en cualquier momento, sin importar las circunstancias en las que te encuentres. Ya sea que necesites orientación en momentos de incertidumbre, asistencia en la toma de decisiones importantes o simplemente alguien con quien compartir tus inquietudes, estamos aquí para ti.'
  imgUrlRequisitos: string = './assets/requisitos.jpg'
  requisitosTitulo: string = '¿Cuáles son los requisitos para ser reclutado y trabajar o ir a trabajar a otro país?'
  requisitosDesc: string = 'Cuando se trata de trabajar en otros países, es fundamental comprender que los requisitos y procesos pueden variar significativamente según el país específico y el tipo de empleo al que se aspire. Cada nación tiene sus propias regulaciones y políticas en materia de inmigración y empleo, lo que implica que los candidatos deberán cumplir con los requisitos específicos establecidos por las autoridades correspondientes.\n' +
    '\n' +
    'En términos generales, uno de los aspectos fundamentales para trabajar en otro país es contar con una oferta de trabajo válida en el país de destino. Esta oferta debe ser proporcionada por una empresa o empleador dispuesto a patrocinar tu empleo y respaldar tu proceso de visado. Es importante destacar que las condiciones laborales y los derechos pueden variar en cada país, por lo que es esencial investigar y comprender las leyes laborales y los beneficios que se ofrecen.\n' +
    '\n' +
    'Además de la oferta de trabajo, los candidatos deberán cumplir con los requisitos de inmigración y visado establecidos por las autoridades del país en cuestión. Estos requisitos pueden incluir la presentación de documentación específica, como pasaporte válido, certificados académicos, pruebas de experiencia laboral y posiblemente pruebas médicas. Es fundamental estar preparado para proporcionar la documentación necesaria y cumplir con los plazos establecidos.\n' +
    '\n' +
    'En este sentido, contar con el apoyo de una empresa de reclutamiento especializada puede resultar de gran ayuda. Nosotros nos dedicamos a guiar y asesorar a los candidatos en todo el proceso, desde la identificación de oportunidades laborales en otros países hasta la facilitación de la documentación requerida. Nuestro equipo de reclutadores tiene un profundo conocimiento de los requisitos y procesos específicos de cada país, lo que nos permite brindar una asistencia personalizada y asegurarnos de que los candidatos cumplan con los requisitos necesarios.'
  imgBeneficios: string = './assets/beneficios.jpg'
  beneficiosTitulo: string = '¿Qué beneficios tiene irme a trabajar a otro país?'
  beneficiosDesc: string = 'Existen varios beneficios al trabajar en otro país, los cuales pueden tener un impacto positivo tanto a nivel personal como profesional. Algunos de estos beneficios incluyen:\n' +
    '\n' +
    'Oportunidades de crecimiento profesional: Trabajar en otro país puede brindarte la oportunidad de acceder a nuevos mercados, industrias y oportunidades laborales que pueden impulsar tu crecimiento profesional. Puedes adquirir nuevas habilidades, conocimientos y experiencias que te harán más atractivo/a para futuros empleadores.\n' +
    '\n' +
    'Desarrollo cultural y personal: Vivir y trabajar en otro país te permite sumergirte en una nueva cultura, interactuar con personas de diferentes orígenes y ampliar tu perspectiva del mundo. Esto te ayuda a desarrollar habilidades interculturales, adaptabilidad y tolerancia, y puede enriquecer tu vida personal de diversas formas.\n' +
    '\n' +
    'Aprendizaje de idiomas: Trabajar en un país donde se hable un idioma diferente te brinda la oportunidad de aprender o mejorar tus habilidades lingüísticas. El dominio de otro idioma puede abrirte puertas en tu carrera profesional y ampliar tus posibilidades de comunicación y colaboración con personas de diferentes culturas.\n' +
    '\n' +
    'Red de contactos internacionales: Al trabajar en otro país, tendrás la oportunidad de establecer una red de contactos internacionales. Estas conexiones pueden ser valiosas tanto a nivel profesional como personal, ya que te permitirán establecer relaciones comerciales, intercambiar conocimientos y tener acceso a oportunidades futuras en diferentes partes del mundo.\n' +
    '\n' +
    'Experiencia multicultural: Trabajar en un entorno multicultural te brinda la oportunidad de trabajar con personas de diferentes nacionalidades, antecedentes y perspectivas. Esta experiencia puede fomentar la creatividad, la colaboración y la capacidad de trabajar en equipos diversos, habilidades cada vez más valoradas en el entorno laboral actual.\n' +
    '\n' +
    'Desarrollo de habilidades transferibles: Trabajar en otro país a menudo implica enfrentar desafíos y situaciones nuevas y desconocidas. Esto te brinda la oportunidad de desarrollar habilidades transferibles como la adaptabilidad, la resiliencia, la resolución de problemas y la toma de decisiones efectivas, que son altamente valoradas en cualquier entorno laboral.\n' +
    '\n' +
    'Crecimiento personal y ampliación de horizontes: Vivir y trabajar en otro país te brinda la oportunidad de salir de tu zona de confort, enfrentar nuevos desafíos y crecer como persona. Te permite conocer diferentes formas de vida, ampliar tu perspectiva y desarrollar una mayor confianza y autonomía.\n' +
    '\n' +
    'Estos son solo algunos de los beneficios que puedes experimentar al trabajar en otro país. Cada experiencia es única y puede ofrecer oportunidades y beneficios adicionales dependiendo del lugar al que te dirijas y tus objetivos personales y profesionales.';
  imgProcesos: string = './assets/help1.jpg';
  procesosTitulo: string = '¿Cuáles son los requisitos y procesos para trabajar en otros países?';
  paisesTitulo: string = '¿Qué documentación necesito?';

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

  procesosDetails() {
    this.dataSharingService.setTitulo(this.procesosTitulo);
    this.dataSharingService.setDescripcion(this.requisitosDesc);
    this.dataSharingService.setUrlImagen(this.imgProcesos);
  }

  requisitosDetails() {
    this.dataSharingService.setTitulo(this.requisitosTitulo)
    this.dataSharingService.setDescripcion(this.requisitosDesc);
    this.dataSharingService.setUrlImagen(this.imgUrlRequisitos);
  }

  beneficiosDetails() {
    this.dataSharingService.setTitulo(this.beneficiosTitulo)
    this.dataSharingService.setDescripcion(this.beneficiosDesc);
    this.dataSharingService.setUrlImagen(this.imgBeneficios);
  }

  paisesDetails() {
    this.dataSharingService.setTitulo(this.paisesTitulo);
    this.dataSharingService.setUrlImagen(this.imgUrlPaises);
  }
}
