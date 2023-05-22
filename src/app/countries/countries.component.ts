import { Component } from '@angular/core';
import { OfertasComponent } from '../ofertas/ofertas.component';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent {


  paisesBajos() {
    Swal.fire({
      title: 'PAÍSES BAJOS',
      width:1400,
      html:'<div class="flex flex-row justify-center items-center align-middle">' +
        '<img class="rounded-lg" src="../../assets/holandaPaisaje2.jpg" height="900" width="400" alt="">' +
          '<div class="flex flex-col justify-start items-start m-7">' +
            '<p class="text-left">Los Países Bajos son atractivos para aquellos que buscan vivir y trabajar en un entorno de alta calidad de vida y equilibrio entre el trabajo y la vida personal. Con una economía estable y próspera, el país ofrece numerosas oportunidades laborales y facilidades fiscales para migrantes cualificados y empresarios. Además, su tamaño compacto facilita la exploración de este nuevo hogar, mientras que su destacado sistema educativo beneficia tanto a los residentes como a los extranjeros, muchos de los cuales hablan inglés con fluidez, facilitando la comunicación y la integración.\n</p>' +
            '<p class="text-left">Los Países Bajos también se destacan por su hermoso paisaje y su enfoque en la sostenibilidad y la protección del medio ambiente. Con emblemáticos molinos de viento, pintorescos canales y coloridos campos de tulipanes, el país atrae a visitantes y residentes con su belleza natural única.\n</p>' +
            '<p class="text-left">El sistema de transporte en los Países Bajos es reconocido por su eficiencia, con una amplia red de trenes, tranvías y autobuses que conectan todas las ciudades y pueblos importantes. Además, el país es famoso por ser uno de los más amigables para los ciclistas, con una infraestructura especialmente diseñada para fomentar el uso de la bicicleta como medio de transporte.\n</p>' +
            '<p class="text-left">La cultura holandesa es diversa y acogedora, con una rica historia y una mentalidad abierta. Los Países Bajos se destacan por su tolerancia y respeto hacia diferentes culturas, religiones y orientaciones sexuales. La vida social en el país es vibrante, con una amplia variedad de festivales, eventos culturales y actividades recreativas para disfrutar.\n</p>' +
            '<p class="text-left">Además, los Países Bajos ofrecen un excelente sistema de atención médica, accesible y de alta calidad. Los residentes tienen acceso a una amplia gama de servicios médicos y hospitales bien equipados, lo que brinda tranquilidad y seguridad en términos de salud.\n</p>' +
            '<p class="text-left">En términos de oportunidades laborales, los Países Bajos brindan un entorno favorable para el crecimiento profesional. Existe una alta demanda de profesionales altamente calificados en sectores como la tecnología, la ingeniería, la medicina y las ciencias. Además, el país se destaca por su próspera escena empresarial y su enfoque en la innovación y la creatividad.\n</p>' +
            '<p class="text-left">En resumen, mudarse a los Países Bajos puede brindar numerosas ventajas y oportunidades. Desde la calidad de vida y el equilibrio entre el trabajo y la vida personal, hasta el enfoque en la sostenibilidad, la diversidad cultural y las oportunidades laborales, este país ofrece un entorno propicio para aquellos que buscan una experiencia gratificante tanto a nivel personal como profesional.</p>' +
          '</div>' +
        '</div>',
      confirmButtonText:
        '<i class="fa fa-times text-xl"></i> CERRAR',
      confirmButtonAriaLabel: 'CERRAR',
      confirmButtonColor: '#808d99',
    })
  }

  austria() {
    Swal.fire({
      title: 'AUSTRIA',
      width:1400,
      html:'<div class="flex flex-row justify-center items-center align-middle">' +
        '<img class="rounded-lg" src="../../assets/austriaPaisaje2.jpg" height="800" width="400" alt="">' +
          '<div class="flex flex-col justify-start items-start m-7">' +
            '<p class="text-left">La hostelería austriaca es una industria próspera y emocionante que ofrece una amplia gama de motivos convincentes para vivir y trabajar en ella. Al trabajar en este sector, los empleados tienen la oportunidad de sumergirse en la rica cultura local y colaborar con personas de todo el mundo, lo que fomenta la diversidad y el intercambio cultural.\n</p>' +
            '<p class="text-left">Una de las ventajas más destacadas de trabajar en la hostelería austriaca es la estabilidad laboral que ofrece. Existe una gran demanda de trabajadores en este sector, lo que significa que las oportunidades de empleo son abundantes. Además, la industria ofrece múltiples posibilidades de crecimiento profesional, desde roles de entrada hasta puestos gerenciales, lo que permite a los trabajadores desarrollar y avanzar en sus carreras.\n</p>' +
            '<p class="text-left">Trabajar en la hostelería austriaca también brinda la oportunidad de adquirir nuevas habilidades y conocimientos. Por ejemplo, muchos empleados tienen la posibilidad de aprender un nuevo idioma, como el alemán, que es ampliamente hablado en Austria. Además, aquellos interesados en el mundo del vino pueden adquirir conocimientos en enología, ya que Austria es conocida por sus excelentes viñedos y vinos de alta calidad.\n</p>' +
            '<p class="text-left">En cuanto a los beneficios laborales, la hostelería austriaca ofrece salarios competitivos, lo que proporciona una remuneración justa por el trabajo realizado. Además, los empleados suelen recibir propinas generosas, lo que puede aumentar significativamente sus ingresos. Algunos establecimientos también ofrecen beneficios adicionales, como alojamiento y comidas gratuitas, lo que contribuye a reducir los gastos diarios y mejora la calidad de vida de los trabajadores.\n</p>' +
            '<p class="text-left">Austria, en general, es conocida por su alta calidad de vida. El país cuenta con un sistema de salud público de clase mundial, lo que garantiza que los empleados tengan acceso a atención médica de calidad. Asimismo, el sistema educativo austriaco es sólido y se valora la educación, lo que brinda oportunidades de aprendizaje y crecimiento tanto para los trabajadores como para sus familias.\n</p>' +
            '<p class="text-left">Además de las ventajas laborales y los servicios públicos de calidad, Austria ofrece una amplia variedad de actividades culturales y deportivas para disfrutar durante el tiempo libre. Desde conciertos y eventos teatrales hasta impresionantes paisajes naturales para explorar, el país brinda opciones para todos los gustos e intereses. Ya sea que desees visitar los Alpes austríacos para esquiar o disfrutar de los festivales culturales en Viena, hay algo para todos.</p>' +
            '<p class="text-left">En resumen, mudarse a los Países Bajos puede brindar numerosas ventajas y oportunidades. Desde la calidad de vida y el equilibrio entre el trabajo y la vida personal, hasta el enfoque en la sostenibilidad, la diversidad cultural y las oportunidades laborales, este país ofrece un entorno propicio para aquellos que buscan una experiencia gratificante tanto a nivel personal como profesional.</p>' +
          '</div>' +
        '</div>',
      confirmButtonText:
        '<i class="fa fa-times text-xl"></i> CERRAR',
      confirmButtonAriaLabel: 'CERRAR',
      confirmButtonColor: '#808d99',
    })
  }

  suiza() {
    Swal.fire({
      title: 'SUIZA',
      width:1200,
      html:'<div class="flex flex-row justify-center items-center align-middle">' +
        '<img class="rounded-lg" src="../../assets/suizaPaisaje2.jpg" height="600" width="400" alt="">' +
          '<div class="flex flex-col justify-start items-start m-7">' +
            '<p class="text-left">Existen múltiples razones por las que alguien podría contemplar la idea de trasladarse a Suiza para vivir y trabajar. El país helvético es reconocido por su elevado nivel de vida y se ubica consistentemente entre los lugares más atractivos del mundo para establecerse.</p>' +
            '<p class="text-left">En 2021, el Índice de Mejor Vida de la OCDE reveló que Suiza se sitúa por encima del promedio de los países miembros en aspectos como el bienestar subjetivo, el empleo y los ingresos, la salud, las conexiones sociales, la calidad del medio ambiente, la educación y las habilidades, el equilibrio entre la vida laboral y personal, la vivienda y la seguridad personal. Además, Suiza es reconocida por su gran puntualidad y organización. Es el hogar de muchas grandes empresas multinacionales y ofrece amplias oportunidades de trabajo para expatriados.</p>' +
            '<p class="text-left">No hay que dejar de lado la belleza de Suiza como país, con sus majestuosas montañas, su delicioso chocolate, sus paisajes de ensueño. Resulta muy fácil quedar maravillado con la vista que se disfruta al viajar en tren o fascinado con el estilo de vida de sus habitantes. En conclusión, es una experiencia sumamente recomendable.</p>' +
          '</div>' +
        '</div>',
      confirmButtonText:
        '<i class="fa fa-times text-xl"></i> CERRAR',
      confirmButtonAriaLabel: 'CERRAR',
      confirmButtonColor: '#808d99',
    })
  }
}
