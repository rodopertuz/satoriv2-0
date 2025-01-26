import { HashLink } from 'react-router-hash-link'
import { useEffect, useRef } from 'react'

import imagen1 from '../img/portada.png'
import imagen2 from '../img/imagen2.png'
import '../style/home.css'
import Profesores from '../components/profesores'

function Home() {
    const containerRef1 = useRef(null)

    const callbackFunction = (entries) => {
        // const [entry] = entries
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('imagenAnimadaIzqDer')
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
        // if (containerRef2.current) observer.observe(containerRef2.current)
        return() => {
            // eslint-disable-next-line
            if (containerRef1.current) observer.observe(containerRef1.current)
            // eslint-disable-next-line
            // if (containerRef2.current) observer.observe(containerRef2.current)
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
        <div id='staff' style={{position: "relative", top: -50+"px"}}></div>
        <div className='section-staff'>
            <h1>CONOCE NUESTROS PROFESORES</h1>
            <div className='staff-items-container'>
                <Profesores />
            </div>
        </div>
        </>
    );
  }
  
  export default Home;