import { useEffect, useRef } from 'react'

import imagen2 from '../img/imagen2.png'


function Programas() {
    const containerRef1 = useRef(null)
    const containerRef2 = useRef(null)
    const containerRef3 = useRef(null)
    const containerRef4 = useRef(null)

    const callbackFunction = (entries) => {
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
        if (containerRef2.current) observer.observe(containerRef2.current)
        if (containerRef3.current) observer.observe(containerRef3.current)
        if (containerRef4.current) observer.observe(containerRef4.current)
        return() => {
            // eslint-disable-next-line
            if (containerRef1.current) observer.observe(containerRef1.current)
                // eslint-disable-next-line
            if (containerRef2.current) observer.observe(containerRef2.current)
                // eslint-disable-next-line
            if (containerRef3.current) observer.observe(containerRef3.current)
                // eslint-disable-next-line
            if (containerRef4.current) observer.observe(containerRef4.current)
        }
    // eslint-disable-next-line
    }, [options])

    return(
        <>  
            <div id='programas' style={{position: "absolute", top: 0+"px"}}></div>
            <h1 className='section-titulo' style={{visibility: "hidden"}}>Sin Titulo</h1>
            <div className='section-container'>
                <div className='section-img'>
                    <img src={imagen2} alt="nosotros-img" ref={containerRef1} />
                </div>
                <div className='section-texto'>
                    <h1>Jiu Jitsu Brasilero Niños (4-11 años) Y Adolescentes (12-17 años).</h1>
                    <p>Cualquier persona puede aprender Jiu Jitsu Brasilero! Nuestros instructores ayudan tanto a los estudiantes nuevos como a los experimentados a dominar los fundamentos de las artes marciales y a alcanzar sus objetivos personales.</p>

                    <p>La estructura de nuestras clases y nuestra metodología están diseñadas para atender las necesidades de todos los practicantes.</p>
                </div>
            </div>

            <h1 className='section-titulo' style={{visibility: "hidden"}}>Sin Titulo</h1>
            <div className='section-container'>
                <div className='section-img'>
                    <img src={imagen2} alt="nosotros-img" ref={containerRef2} />
                </div>
                <div className='section-texto'>
                    <h1>Jiu Jitsu Brasilero Adultos.</h1>
                    <p>Cualquier persona puede aprender Jiu Jitsu Brasilero! Nuestros instructores ayudan tanto a los estudiantes nuevos como a los experimentados a dominar los fundamentos de las artes marciales y a alcanzar sus objetivos personales.</p>

                    <p>La estructura de nuestras clases y nuestra metodología están diseñadas para atender las necesidades de todos los practicantes.</p>
                </div>
            </div>

            <h1 className='section-titulo' style={{visibility: "hidden"}}>Sin Titulo</h1>
            <div className='section-container'>
                <div className='section-img'>
                    <img src={imagen2} alt="nosotros-img" ref={containerRef3} />
                </div>
                <div className='section-texto'>
                    <h1>Boxeo.</h1>
                    <p>Entrena boxeo desde nivel principiante hasta profesional ! Aprende los fundamentos del boxeo, mejora tu condición física y aprende a defenderte con técnicas apropiadas de boxeo.</p>
                    <p>Las clases son dirigídas por un profesor profesional en la disciplina del boxeo, quien guía a los alumnos a través de ejercicios de movilidad, calistenia simple y boxeo de sombra.</p>
                </div>
            </div>

            <h1 className='section-titulo' style={{visibility: "hidden"}}>Sin Titulo</h1>
            <div className='section-container'>
                <div className='section-img'>
                    <img src={imagen2} alt="nosotros-img" ref={containerRef4} />
                </div>
                <div className='section-texto'>
                    <h1>Clases de MMA.</h1>
                    <p>Quienes se vinculan a este grupo aprenden a pelear de manera integral, desarrollando las habilidades necesarias para enetenerder las dinámicas de las Artes Marciales Mixtas (MMA por sus siglas en inglés Mixed Martial Arts) de una manera segura y divertida que les va permitir empoderarse dentro de su camino marcial y conocer todos los componentes reales de un combate.</p>
                </div>
            </div>
        </>
    )
}

export default Programas