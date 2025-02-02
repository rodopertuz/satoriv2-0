import { useRef, useEffect } from 'react'
import Profesor from '../components/profesor.jsx'
import '../App.css'

export default function Profesores(){
    const nombres = ["Rodolfo Pertuz", "Mateo Romero", "Andres \"DobleA\" Ayala", "Juan Carlos Miranda", "Alejandro Sevilla"]
    const titulos = ["Instructor Principal", "Instructor Kids y Teens", "Instructor Boxeo", "Instructor MMA", "Instructor MMA"]
    const descripcion =  ["Cinturón negro 1er grado de Jiu Jitsu Brasilero con 14 años de experiencia en Artes Marciales. Competidor activo afiliado a IBJJF y AJP.", 
        "Cinturón negro de Jiu Jitsu Brasilero. Instructor especializado en niños y adolescentes. Competidor activo afiliado a IBJJF y AJP.", 
        "Cinturón negro de Jiu Jitsu Brasilero. Peleador profesional de Boxeo y Artes Marciales Mixtas (MMA). Actual campeón de las franquicias MATCHMAKER + Combate Global y MATCHMAKER + FFC.", 
        "Cinturón negro de Jiu Jitsu Brasilero. Peleador profesional de Artes Marciales Mixtas (MMA). Instructor especializado en Striking para MMA y JIU JITSU para MMA.", 
        "Cinturón negro de Jiu jitsu Brasilero. Instructorr especializado en lucha para MMA y JIU JITSU para MMA."]
    const fotos = ["rodo", "mateo", "doblea", "chiqui", "monkey"]

    const profesor1Ref = useRef(null)
    const profesor2Ref = useRef(null)
    const profesor3Ref = useRef(null)
    const profesor4Ref = useRef(null)
    const profesor5Ref = useRef(null)

    const refProfesores = [profesor1Ref,profesor2Ref,profesor3Ref,profesor4Ref,profesor5Ref]
    
    const callbackFunction = (entries) => {
        // const [entry] = entries
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const clase = 'divAnimadaAbajoArriba' + entry.target.title
                entry.target.classList.add(clase)
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
        if (profesor1Ref.current) observer.observe(profesor1Ref.current)
        if (profesor2Ref.current) observer.observe(profesor2Ref.current)
        if (profesor3Ref.current) observer.observe(profesor3Ref.current)
        if (profesor4Ref.current) observer.observe(profesor4Ref.current)
        if (profesor5Ref.current) observer.observe(profesor5Ref.current)
        return() => {
            // eslint-disable-next-line
            if (profesor1Ref.current) observer.observe(profesor1Ref.current)
            // eslint-disable-next-line
            if (profesor2Ref.current) observer.observe(profesor2Ref.current)
                // eslint-disable-next-line
            if (profesor3Ref.current) observer.observe(profesor3Ref.current)
                // eslint-disable-next-line
            if (profesor4Ref.current) observer.observe(profesor4Ref.current)
                // eslint-disable-next-line
            if (profesor5Ref.current) observer.observe(profesor5Ref.current)
        }
    // eslint-disable-next-line
    }, [options])

    return(
        <>
            {nombres.map((nombre, index)=> {
                return(
                    <Profesor key={index} nombre={nombre} titulo={titulos[index]} descripcion={descripcion[index]} fotos={fotos} refProfesores={refProfesores} index={index}/>
                )
            })}
        </>
    )
}