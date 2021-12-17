import { useEffect } from 'react';
import indraDiscipulos from "./image/indraDiscipulos.jpg";
import indraPalomaBlanca from "./image/indraPalomaBlanca.jpg";
import indraSaiBaba from "./image/indraSaiBaba.jpg";
import "./styles.css";

const Content = () => {
    useEffect(()=>{
        window.scroll(0,0);
    });
    return(
        <div className="stylesPaginaTributo">
            {/* <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script> */}
            {/* <link rel="preconnect" href="https://fonts.gstatic.com"> */}
            {/* <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400&display=swap" rel="stylesheet"> */}
            <div id="main">
            <h1 id="title">Mataji Indra Devi</h1>
            <p>La primera dama del yoga en América</p>
            <div id="contenedor">

        {/* <!-- Parte 1 --> */}
            <section id="tribute-info" className="tribute-info tribute1">
            <h3>Un resumen de la vida de Indra Devi</h3>
            <ul>
                <li>Indra Devi nació en Rusia el 12 de Mayo de 1899 y fue bautizada como Eugenie Peterson.</li>
                <li>En 1920 fue a Alemania con su madre y allí entro a formar parte de un famoso teatro ruso. En calidad del mismo, visitó la mayoría de las capitales europeas.</li>
                <li>En 1927 concretó su gran sueño de viajar a la india. Vivió allí durante doce años, primero como turista, luego como esposa de un diplomático estranjero y finalmente como estudiante de yoga.</li>
                <li>Indra Devi comenzó sus estudios poco despues de haber sido curada de una dolencia cardíaca que le había aquejado durante cuatro años, por medio de métodos propios de esta milenaria disciplina.</li>
                <li>En 1939, transfirieron a su marido a Shangai, China, donde abrió la primer escuela de yoga que existió en China.</li>
                <li>En 1946, ya había vuelto a la India, se publicó su primer libro: "Yoga, la técnica de llegar a tener salud y felicidad". Muy pronto comenzó a dar clases y conferencias, llegando a ser conocida como la primera mujer occidental que enseñaba yoga en la India.</li>
                <li>En ese mismo año, 1946, vuelve a Shangai por el fallecimiento de su marido. Y en lugar de volver a la India como tenía planeado, optó por viajar a California, donde arribó en enero de 1947.</li>
                <li>Comenzó a dar clases y conferencias sobre yoga en Hollywood, allí escribió "Yoga para todos", "Por siempre joven, por siempre sano" y "Renueve su vida practicando yoga".</li>
            </ul>
            </section>

            <figure id="img-div" className="img-div img-div1">
                <img id="image" className="image img1" src={indraPalomaBlanca} alt="Indra Devi ya de adulta, arrodillada en el pasto y soltando una paloma blanca."/>
                <figcaption id="img-caption" className="img-caption img-c1">
                    Indra Devi sola arrodillada en el pasto con un monte detrás. Con su cómoda vestimenta de mantas abre las manos y se va volvando una paloma blanca.<br/>
                    <a target="_top" href="http://yogaconciencia.blogspot.com/2015/10/que-es-el-yoga-por-indra-devi.html" className="tribute-link fuente-link">
                    Fuente
                    </a>
                </figcaption>
            </figure>
                        

        {/* <!-- Parte 2 --> */}
            <figure id="img-div" className="img-div img-div2">
                <img id="image" className="image img2" src={indraDiscipulos} alt="Indra Devi ensañándole yoga a dos discípulos."/>
                <figcaption id="img-caption" className="img-caption img-c2">
                    Indra Devi enseñándole yoga a dos discípulos suyos. Ella está sentada al fondo mirando al frente, delante se posan los aprendices, los dos están boca abajo encorbados con el mentón hacia arriba y los brazos sobre su espalda toman los pies con las manos, formando así una especie de triángulo.<br/>
                    <a target="_top" href="https://www.escuelamahashakti.com/" className="tribute-link fuente-link">
                        Fuente
                    </a>
                </figcaption>
            </figure>

            <section id="tribute-info" className="tribute-info tribute2">
                            {/* <!-- <h3>Un resumen de la vida de Indra Devi</h3> --> */}
            <ul>
                <li>Estos últimos tres libros llegaron pronto a ser best sellers y se vendieron en 29 países, siendo traducido a 10 idiomas diferentes.</li>
                <li>En 1953 se casó con el Dr. Sigfrid Knauer, un distinguido médico y humanista.</li>
                <li>En 1960 dió conferencias sobre el yoga y sus beneficios a los funcionarios del Kremlin, Moscú, y fue la responsable del levantamiento de la prohibición que pesaba sobre el yoga. Un año después, en México, ella inauguró una sede de la Fundación Indra Devi donde implemento el programa de Entrenamiento de Profesores de Yoga</li>
                <li>En 1966 viajó nuevamente a la India, conoció a Sathya Sai Baba, adorado por millones de personas en todo el mundo como ávatar de esta era.</li>
                <li>En 1977, con su esposo muy enfermo deciden mudarse a una casa cerca del Ashram de Sai Baba.</li>                      
                <li>En ese mismo año el gobierno el gobierno del Salvador, la invitó a introducir el yoga en las escuelas de ese país. Es importante destacar que es la primera vez que un gobierno comprende el inmenso aporte que esta disciplina puede aportar a la formación completa, total e integral de la juventud.</li>
                <li>En 1982 Indra Devi conoció la Argentina. Ella se "enamoró" de nuestro país y en 1985, poco despues del fallecimiento de su marido, se radica definitivamente en la Argentina.</li>
            </ul>
            </section>

        {/* <!-- Parte 3 --> */}
            <figure id="img-div" className="img-div img-div3">
                <img id="image" className="image img3" src={indraSaiBaba} alt="Indra Devi con Sai Baba"/>
                <figcaption id="img-caption" className="img-caption img-c3">
                    Indra Devi con Sai Baba, ambos de pie mirando las hojas de un libro, ambos con atuendos característicos de divulgadores de la disciplina del yoga. Sai Baba, según sus propios dichos, fue el Ávatar para nuestra era, es decir, una encarnación divina enviada a la Tierra para provocar la renovación espiritual.<br/>
                    <a target="_top" href="https://ar.pinterest.com/comunarte/sathya-sai-baba/" className="tribute-link fuente-link">
                        Fuente
                    </a>
                </figcaption>
            </figure>


            <section id="tribute-info" className="tribute-info tribute3">
                            {/* <!-- <h3>Un resumen de la vida de Indra Devi</h3> --> */}
            <ul>
                <li>Haciendo centro en Buenos Aires, Indra Devi comienza una amplia tarea de difusión del yoga clásico dando conferencias y seminarios en distintas ciudades de la República, y en otros países de América como Brasil, Uruguay, Paraguay, Chile, México, sin dejar de lado sus viajes por Europa.</li>
                <li>En 1988 creó, junto a Iana y David Lifar, sus discípulos más directos en nuestro país, la "Fundación Indra Devi, Yoga, Arte y Ciencia de Vida", dedicada a la enseñanza y difusión del yoga.</li>
                <li>En 1991 realizó seminarios en Los Ángeles, Santa Mónica y Curacao. En ese mismo año se lanzó al mercado editorial su libro "Sai Yoga", considerado la sorpresa de la Feria del Libro por encabezar la lista de los más vendidos</li>
                <li>En 1995 siguió su dilatada tarea con inagotable energía y profundo amor, transmitiendo el yoga como único método para el desarrollo integral y armónico que le permite al ser humano tener una vida sana y feliz, sin enfermedades, tensiones, estrés ni miedo tanto a la vida como a la muerte.</li>                        
                <li>En 1999, el 8 de marzo, Día Internacional de la Mujer, se le rindió un homenaje por ser ella un verdadero ejemplo de vida en el Salón de los Pasos Perdidos el Congreso de la Nación.</li>
                <li>El 12 de mayo de ese mismo año, 1999, se festejaron sus juveniles cien años en el mini-estadio del Club Ferrocarril Oeste, donde asistieron más de 3500 personas.</li>
                <li className="li-link"><a href="http://indradevi-international.net.ar/" target="_top" className="tribute-link">Haz click en este enlace para obtener más información sobre el yoga y sobre la Escuela Virtual de Yoga "Indra Devi International"</a></li>
            </ul>
            </section>
        </div>
        </div>
    </div>
    );
}

export default Content;