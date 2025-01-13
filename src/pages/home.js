import { HashLink } from 'react-router-hash-link'
import { useEffect, useRef } from 'react'

import imagen1 from '../img/portada.png'
import imagen2 from '../img/imagen2.png'
import '../style/home.css'

function Home() {
    const containerRef1 = useRef(null)
    const containerRef2 = useRef(null)

    
    const callbackFunction = (entries) => {
        // const [entry] = entries
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('imagenAnimada')
                observer.unobserve(entry.target)
            }
        });
    }
    const options = {
        root: null,
        rootMargin: "",
        threshold: 0.2,
    }
    
    const observer = new IntersectionObserver(callbackFunction, options)
    useEffect(() =>{
        if (containerRef1.current) observer.observe(containerRef1.current)
        if (containerRef2.current) observer.observe(containerRef2.current)
        return() => {
            // eslint-disable-next-line
            if (containerRef1.current) observer.observe(containerRef1.current)
            // eslint-disable-next-line
            if (containerRef2.current) observer.observe(containerRef2.current)
        }
    // eslint-disable-next-line
    }, [options])

    return (
        <>
        <div id='home' style={{position: "absolute", top: 0+"px"}}></div>
        <div className='portada-container'>
            <img src={imagen1} alt="imgPortada"></img>
            <div className='portada-titulo'>
                <h1>SATORI&nbsp;
                    <br></br> 
                    <span>ARTES MARCIALES</span>
                    <HashLink to={"/calendario-reservas/cortesia"}>
                        <div className='cortesia-btn'>
                            Reservar Clase GRATIS!
                        </div>
                    </HashLink>
                </h1>
            </div>
        </div>
        <h1 className='section-titulo' style={{visibility: "hidden"}}>Sin Titulo</h1>
        <div className='section-container'>
            <div id='nosotros' style={{position: "relative", top: "-170px", backgroundColor: "red"}}></div>
            <div className='section-img'>
                <img src={imagen2} alt="nosotros-img" ref={containerRef1} />
            </div>
            <div className='section-texto'>
                <h1>Satori Jiu Jitsu - Centro de Artes Marciales.</h1>
                <p>La academia Satori Jiu Jitsu ubicada en el sector El Nogal en la ciudad de Bogotá es uno de los centros para la práctica del Jiu Jitsu Brasilero más importante de la ciudad. Las instalaciones con los mejores implementos sirve de casa a practicantes de diferentes procedencias aspirando a alcanzar sus metas personales dentro del deporte. </p>

                <p>Las clases se desarrollan en un ambiente seguro, de apoyo, de acompañamiento y a la vez de entrenamiento exigente en tatami olímpico profesional. Todas las clases son dirigidas por el instructor principal, Cinta Negra 1er Grado - Rodolfo Pertuz o en su ausencia, un instructor cinta negra/marrón asignado.</p>
            </div>
        </div>

        <h1 className='section-titulo' style={{visibility: "hidden"}}>Sin Titulo</h1>
        <div className='section-container' id='programas'>
            <div className='section-img'>
                <img src={imagen2} alt="nosotros-img" ref={containerRef2} />
            </div>
            <div className='section-texto'>
                <h2>Clases de Jiu Jitsu Brasilero.</h2>
                <p>Cualquier persona puede aprender Jiu Jitsu Brasilero! Nuestros instructores ayudan tanto a los estudiantes nuevos como a los experimentados a dominar los fundamentos de las artes marciales y a alcanzar sus objetivos personales.</p>

                <p>La estructura de nuestras clases y nuestra metodología están diseñadas para atender las necesidades de todos los practicantes.</p>

                <h2>Clases de boxeo.</h2>
                <p>Entrena boxeo desde nivel principiante hasta profesional ! Aprende los fundamentos del boxeo, mejora tu condición física y aprende a defenderte con técnicas apropiadas de boxeo.</p>
                <p>Las clases son dirigídas por un profesor profesional en la disciplina del boxeo, quien guía a los alumnos a través de ejercicios de movilidad, calistenia simple y boxeo de sombra.</p>

                <h2>Clases de MMA.</h2>
                <p>Quienes se vinculan a este grupo aprenden a pelear de manera integral, desarrollando las habilidades necesarias para enetenerder las dinámicas de las Artes Marciales Mixtas (MMA por sus siglas en inglés Mixed Martial Arts) de una manera segura y divertída que les va permitir empoderarse dentro de su camino marcial y conocer todos los componentes realesde un combate.</p>
            </div>
        </div>
        </>
    );
  }
  
  export default Home;