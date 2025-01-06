import { HashLink } from 'react-router-hash-link';
import imagen1 from '../img/portada.png';
import '../style/home.css';

function Home() {
    return (
        <>
        <div id='home' style={{position: "absolute", top: 0+"px"}}></div>
        <div className='portada-container'>
            <img src={imagen1} alt="imgPortada"></img>
            <h1 className='portada-titulo'>SATORI&nbsp;
                <br></br> 
                <span>ARTES MARCIALES</span>
            </h1>
            <HashLink to={"/calendario-reservas/cortesia"}>
                <div className='cortesia-btn'>
                    <p>Reservar Clase GRATIS!</p>
                </div>
            </HashLink>
        </div>
        <div className='section-container' id='nosotros'>
            <h1>Satori Jiu Jitsu - Centro de Artes Marciales.</h1>
            <p>La academia Satori Jiu Jitsu ubicada en el sector El Nogal en la ciudad de Bogotá es uno de los centros para la práctica del Jiu Jitsu Brasilero más importante de la ciudad. Las instalaciones con los mejores implementos sirve de casa a practicantes de diferentes procedencias aspirando a alcanzar sus metas personales dentro del deporte. </p>

            <p>Las clases se desarrollan en un ambiente seguro, de apoyo, de acompañamiento y a la vez de entrenamiento exigente en tatami olímpico profesional. Todas las clases son dirigidas por el instructor principal, Cinta Negra 1er Grado - Rodolfo Pertuz o en su ausencia, un instructor cinta negra/marrón asignado.</p>

            <h2>Clases de Jiu Jitsu Brasilero.</h2>
            <p>Cualquier persona puede aprender Jiu Jitsu Brasilero! Nuestros instructores ayudan tanto a los estudiantes nuevos como a los experimentados a dominar los fundamentos de las artes marciales y a alcanzar sus objetivos personales.</p>

            <p>La estructura de nuestras clases y nuestra metodología están diseñadas para atender las necesidades de todos los practicantes.</p>

            <h2>Clases de boxeo.</h2>
            <p>Entrena boxeo desde nivel principiante hasta profesional ! Aprende los fundamentos del boxeo, mejora tu condición física y aprende a defenderte con técnicas apropiadas de boxeo.</p>
            <p>Las clases son dirigídas por un profesor profesional en la disciplina del boxeo, quien guía a los alumnos a través de ejercicios de movilidad, calistenia simple y boxeo de sombra.</p>

            <h2>Clases de MMA.</h2>
            <p>Quienes se vinculan a este grupo aprenden a pelear de manera integral, desarrollando las habilidades necesarias para enetenerder las dinámicas de las Artes Marciales Mixtas (MMA por sus siglas en inglés Mixed Martial Arts) de una manera segura y divertída que les va permitir empoderarse dentro de su camino marcial y conocer todos los componentes realesde un combate.</p>
        </div>
        </>
    );
  }
  
  export default Home;