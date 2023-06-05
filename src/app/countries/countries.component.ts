import {Component, OnInit} from '@angular/core';
import { OfertasComponent } from '../ofertas/ofertas.component';
import Swal from 'sweetalert2';
import {Carousel, initTE} from "tw-elements";



@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit{

  ngOnInit() {
    initTE({ Carousel });
  }


  irlanda() {
    Swal.fire({
      title: 'IRLANDA',
      width:1400,
      html:'<div class="flex flex-col md:flex-row justify-center items-center align-middle">' +
        '<img class="rounded-lg" src="../../assets/irlandaAlerta.jpg" height="900" width="400" alt="">' +
        '<div class="flex flex-col justify-start items-start m-7">' +
        '<p class="text-justify">¡Irlanda es el destino perfecto para darle un impulso a tu carrera profesional! Este país cautivador te ofrece una combinación única de oportunidades laborales, calidad de vida excepcional y una rica herencia cultural que te sorprenderá.\n</p>' +
        '<p class="text-justify">En primer lugar, Irlanda es conocida como la "isla esmeralda" y alberga un floreciente sector tecnológico y de innovación. Con empresas globales de renombre y un entorno empresarial en constante crecimiento, tendrás acceso a oportunidades emocionantes en áreas como la tecnología de la información, las finanzas, las ciencias de la vida y las industrias creativas. Irlanda es un centro de innovación y emprendimiento, lo que la convierte en el lugar perfecto para desarrollar tu carrera y explorar nuevas posibilidades.\n</p>' +
        '<p class="text-justify">Además de las oportunidades laborales, Irlanda ofrece una calidad de vida excepcional. Con su hermoso paisaje, desde acantilados escarpados hasta pintorescos paisajes verdes, y una gran cantidad de actividades al aire libre, podrás disfrutar de un estilo de vida equilibrado y saludable. Las ciudades irlandesas son vibrantes y acogedoras, con una animada escena cultural y una rica tradición musical.</p>' +
        '<p class="text-justify">La educación en Irlanda es de alta calidad y reconocida a nivel mundial. Con prestigiosas universidades y centros de investigación líderes en diversas disciplinas, tendrás acceso a programas académicos de vanguardia y oportunidades de desarrollo personal y profesional.\n</p>' +
        '<p class="text-justify">La cultura irlandesa es famosa por su calidez y hospitalidad. Los irlandeses son conocidos por su amabilidad y su actitud acogedora hacia los extranjeros. Al unirte a la fuerza laboral irlandesa, tendrás la oportunidad de trabajar en un entorno multicultural y colaborativo, donde tus habilidades y talentos serán valorados.\n</p>' +
        '<p class="text-justify">Irlanda es también un lugar estratégico para viajar por Europa. Con excelentes conexiones de transporte, podrás explorar fácilmente otros países europeos durante tus días libres o vacaciones.\n</p>' +
        '<p class="text-justify">Irlanda cuenta con un sistema de impuestos favorable para los profesionales extranjeros, lo que puede resultar en beneficios financieros atractivos. Además, el proceso de solicitud de visa de trabajo y residencia en Irlanda es relativamente sencillo y accesible.</p>' +
        '</div>' +
        '</div>',
      showCloseButton: true,
      showConfirmButton: false,
    })
  }

  canada() {
    Swal.fire({
      title: 'CANADÁ',
      width:1400,
      html:'<div class="flex flex-col md:flex-row justify-center items-center align-middle">' +
        '<img class="rounded-lg" src="../../assets/canadaAlerta.jpg" height="900" width="400" alt="">' +
          '<div class="flex flex-col justify-start items-start m-7">' +
            '<p class="text-justify">¡Trabajar en Canadá es una oportunidad única que no puedes dejar pasar! Este país extraordinario no solo ofrece un entorno laboral estable y próspero, sino que también brinda una calidad de vida envidiable y numerosas ventajas para los trabajadores extranjeros.\n</p>' +
            '<p class="text-justify">En primer lugar, Canadá cuenta con una economía sólida y diversificada, lo que se traduce en una amplia gama de oportunidades laborales en diferentes sectores. Desde tecnología y salud hasta ingeniería y educación, hay demanda de profesionales calificados en múltiples campos. Además, el sistema de derechos laborales en Canadá garantiza la protección de los trabajadores y establece estándares justos en términos de salarios, horarios y condiciones de trabajo.\n</p>' +
            '<p class="text-justify">La diversidad y la inclusión son valores fundamentales en la sociedad canadiense. Independientemente de tu origen étnico, religión o género, en Canadá encontrarás un ambiente acogedor y respetuoso. El país celebra la multiculturalidad y ofrece programas de inmigración diseñados para atraer talento internacional, lo que significa que podrás construir una carrera profesional gratificante y al mismo tiempo disfrutar de la riqueza cultural que este país tiene para ofrecer.\n</p>' +
            '<p class="text-justify">Canadá es conocido por su impresionante belleza natural. Desde las majestuosas Montañas Rocosas hasta los impresionantes paisajes de la costa atlántica, este país te permitirá descubrir una variedad de entornos naturales espectaculares. Podrás disfrutar de actividades al aire libre como senderismo, esquí, kayak y mucho más, en lugares que te dejarán sin aliento.\n</p>' +
            '<p class="text-justify">Además, la calidad de vida en Canadá es excepcional. El sistema de salud es de primer nivel y accesible para todos los residentes, y la educación es de alta calidad y valorada a nivel internacional. Las ciudades canadienses son seguras, limpias y ofrecen una amplia gama de opciones culturales, recreativas y de entretenimiento.\n</p>' +
            '<p class="text-justify">Por si fuera poco, Canadá es reconocido por su política de inmigración favorable. El país cuenta con programas de inmigración diseñados específicamente para atraer y retener a trabajadores calificados, lo que facilita el proceso de establecimiento y ofrece oportunidades para la residencia permanente y la ciudadanía.\n</p>' +
          '</div>' +
        '</div>',
      showCloseButton: true,
      showConfirmButton: false,
    })
  }


  malta() {
    Swal.fire({
      title: 'MALTA',
      width:1400,
      html:'<div class="flex flex-col md:flex-row justify-center items-center align-middle">' +
        '<img class="rounded-lg" src="../../assets/maltaAlerta.jpg" height="900" width="400" alt="">' +
          '<div class="flex flex-col justify-start items-start m-7">' +
            '<p class="text-justify">¡Malta es un destino laboral que te sorprenderá en todos los sentidos! Esta hermosa isla mediterránea ofrece una combinación única de oportunidades profesionales, calidad de vida excepcional y una rica historia y cultura para disfrutar.\n</p>' +
            '<p class="text-justify">En primer lugar, Malta cuenta con un floreciente sector económico y una ubicación estratégica en el corazón del Mediterráneo. Es un centro en constante crecimiento para industrias como la tecnología, los juegos en línea, la inteligencia artificial y los servicios financieros. Si buscas trabajar en un entorno empresarial innovador y dinámico, Malta es el lugar perfecto para ti.\n</p>' +
            '<p class="text-justify">Además de sus oportunidades laborales, Malta ofrece una calidad de vida envidiable. Con su clima cálido y soleado durante gran parte del año, playas de aguas cristalinas y una atmósfera relajada, podrás disfrutar de un estilo de vida tranquilo y equilibrado. La isla también tiene una rica historia y patrimonio cultural, con sitios históricos fascinantes, festivales tradicionales y una deliciosa gastronomía mediterránea.\n</p>' +
            '<p class="text-justify">El sistema educativo en Malta es de alta calidad, con instituciones académicas reconocidas internacionalmente y una amplia gama de programas de estudio. Además, el país cuenta con una excelente infraestructura de atención médica y seguridad social para garantizar el bienestar de sus residentes.\n</p>' +
            '<p class="text-justify">Malta es un crisol de culturas y nacionalidades, lo que crea una comunidad diversa y multicultural. Te encontrarás rodeado de personas amigables y acogedoras, lo que hará que te sientas como en casa. Además, el inglés es ampliamente hablado en Malta, lo que facilita la comunicación y la integración en el entorno laboral y social.\n</p>' +
            '<p class="text-justify">La ubicación geográfica de Malta también ofrece ventajas adicionales. Como miembro de la Unión Europea, Malta brinda acceso a un mercado laboral más amplio y la posibilidad de viajar sin restricciones por Europa. Además, su excelente conexión aérea te permitirá explorar fácilmente otros destinos europeos y disfrutar de escapadas de fin de semana emocionantes.\n</p>' +
          '</div>' +
        '</div>',
      showCloseButton: true,
      showConfirmButton: false,
    })
  }

  reinoUnido() {
    Swal.fire({
      title: 'REINO UNIDO',
      width:1400,
      html:'<div class="flex flex-col md:flex-row justify-center items-center align-middle">' +
        '<img class="rounded-lg" src="../../assets/reinoUnidoAlerta.jpg" height="800" width="400" alt="">' +
          '<div class="flex flex-col justify-start items-start m-7">' +
            '<p class="text-justify">¡El Reino Unido es el lugar perfecto para trabajar y prosperar! Con una rica historia, una economía vibrante y una diversidad cultural inigualable, este país te ofrece innumerables oportunidades para desarrollar tu carrera y disfrutar de una vida emocionante.\n</p>' +
            '<p class="text-justify">En primer lugar, el Reino Unido es reconocido a nivel mundial por su excelencia académica. Con prestigiosas universidades y centros de investigación de renombre, el país se destaca en campos como la ciencia, la tecnología, la ingeniería y las artes. Si buscas crecimiento profesional y adquirir conocimientos de vanguardia, el Reino Unido es el lugar ideal para ti.\n</p>' +
            '<p class="text-justify">La economía del Reino Unido es dinámica y diversa, lo que significa que hay oportunidades laborales en una amplia gama de sectores. Desde finanzas y tecnología hasta medicina y diseño, encontrarás opciones emocionantes y bien remuneradas. Además, el Reino Unido ofrece un ambiente empresarial favorable, con una sólida infraestructura y acceso a mercados globales.\n</p>' +
            '<p class="text-justify">La vida en el Reino Unido es emocionante y enriquecedora. Tanto si prefieres la vibrante ciudad de Londres como si optas por las pintorescas ciudades universitarias o los paisajes naturales impresionantes de Escocia y Gales, hay un lugar para cada gusto. La escena cultural es diversa y en constante evolución, con teatros de renombre mundial, museos fascinantes y festivales emocionantes que te mantendrán inspirado y entretenido.\n</p>' +
            '<p class="text-justify">La calidad de vida en el Reino Unido es alta, con un sistema de salud de calidad, servicios públicos confiables y una amplia gama de opciones de ocio. Además, el país ofrece una excelente red de transporte que te permitirá explorar tanto el Reino Unido como el resto de Europa de manera conveniente y accesible.\n</p>' +
            '<p class="text-justify">La multiculturalidad es un pilar fundamental en el Reino Unido. Aquí, podrás interactuar con personas de diversas nacionalidades y culturas, lo que te brindará una experiencia enriquecedora y te permitirá ampliar tu perspectiva. El país valora la diversidad y ofrece programas de inmigración que facilitan la llegada de profesionales internacionales.</p>' +
          '</div>' +
        '</div>',
      showCloseButton: true,
      showConfirmButton: false,
    })
  }

  australia() {
    Swal.fire({
      title: 'AUSTRALIA',
      width:1200,
      html:'<div class="flex flex-col md:flex-row justify-center items-center align-middle">' +
        '<img class="rounded-lg" src="../../assets/australiaAlerta.jpg" height="600" width="400" alt="">' +
          '<div class="flex flex-col justify-start items-start m-7">' +
            '<p class="text-justify">¡Australia te espera con los brazos abiertos para una experiencia laboral única! Este vasto continente ofrece un sinfín de oportunidades profesionales, una calidad de vida excepcional y una naturaleza impresionante que te dejará sin aliento.</p>' +
            '<p class="text-justify">En primer lugar, Australia cuenta con una economía fuerte y diversificada. Con sectores en crecimiento como la tecnología, la ingeniería, la medicina, la minería y la agricultura, encontrarás una amplia gama de opciones para desarrollar tu carrera profesional. Además, el país valora la innovación y el emprendimiento, lo que significa que hay oportunidades para aquellos que deseen iniciar sus propios negocios.</p>' +
            '<p class="text-justify">La calidad de vida en Australia es reconocida en todo el mundo. Con ciudades vibrantes y seguras, playas de ensueño, parques nacionales impresionantes y una cultura al aire libre, tendrás infinitas posibilidades para disfrutar de tu tiempo libre. Además, el sistema de salud y educación en Australia es de primera clase, brindando acceso a servicios de alta calidad para ti y tu familia.</p>' +
            '<p class="text-justify">La multiculturalidad es un aspecto fundamental de la sociedad australiana. Con una población diversa y acogedora, te encontrarás inmerso en un entorno en el que se celebran todas las culturas y se fomenta la inclusión. Esto te permitirá ampliar tus horizontes y aprender de personas de todo el mundo.</p>' +
            '<p class="text-justify">Australia es conocida por su impresionante belleza natural. Desde la Gran Barrera de Coral hasta el icónico Uluru, los parques nacionales y las reservas naturales ofrecen una biodiversidad única y paisajes de ensueño. Tendrás la oportunidad de explorar playas paradisíacas, bucear en arrecifes de coral, hacer senderismo en montañas escarpadas y admirar la fauna única de este país.</p>' +
            '<p class="text-justify">Además, Australia es un país seguro y estable, con una infraestructura confiable y un sistema legal robusto que protege los derechos de los trabajadores. También cuenta con un sistema de inmigración y visas diseñado para atraer talento internacional y facilitar la integración de profesionales extranjeros.</p>' +


          '</div>' +
        '</div>',
      showCloseButton: true,
      showConfirmButton: false,

    })
  }

}
