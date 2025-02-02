
import '../style/horarios.css'
import kidsIcon from '../img/kidsBjjIcon.png'
import teensIcon from '../img/teensBjjIcon.png'
import adultosIcon from '../img/adultsBjjIcon.png'
import boxeoIcon from '../img/boxeoIcon.png'
import mmaIcon from '../img/mmaIcon.png'
import todosIcon from '../img/todosIcon.png'

import {dataHorarios} from '../data/horariosJson.js' 

function Horarios() {

    function cambiarSlide(slideIndex, evento){
        const botonesDiv = document.getElementById("botones-planes-disciplinas")
        const botones = botonesDiv.getElementsByTagName("button")
        const celdas = document.getElementsByClassName("section-horarios-horario-fil-item")
        var numeroFilas = []

        var boton = evento.target
        document.getElementById("corregirAlturaPorTopMenu").scrollIntoView({ behavior: 'smooth' })
        while (boton.tagName.toUpperCase() !== 'BUTTON'){
            boton = boton.parentNode
        }
        
        for (let i=0; i<botones.length; i++){
            botones[i].className = "boton-planes-disciplina"            
        }
        botones[slideIndex].className = "boton-planes-disciplina boton-planes-activo";
        
        for (let i=7; i<celdas.length; i++){
            var mod7 = i%7;
            if ((celdas[i].innerText.toLowerCase().indexOf(boton.title.toLowerCase()) !== -1) || (boton.title.toLowerCase() === 'todos') || (mod7 === 0)) {
                numeroFilas.push(parseInt(celdas[i].title))
                celdas[i].firstChild.className = 'horario-item fade'
            } else {
                celdas[i].firstChild.className = 'horario-item fadeOut'
            }
        }
    }

    const styleBjjKids = {
        border: "1px solid #ff2c63",
    }

    const styleBjjTeens = {
        border: "1px solid #007d03",
    }

    const styleBjjAdultos = {
        border : "1px solid var(--azulSatori)",
    }

    const styleBoxeo = {
        border : "1px solid var(--colorDobleA)",
    }

    const styleMMA = {
        border: "1px solid var(--rojoSatori)",
    }

    const styleTodos = {
        border: "1px solid black",
    }

    function determinarColor(datos) {
        var colorFondo = ""
        var color = "white" 
        var imagenFondo = ""
        if (datos.indexOf("Kids") !== -1){
            colorFondo = "#ff2c63"
            if (datos.indexOf("Teens") !== -1) {
                colorFondo = ""
                imagenFondo = "linear-gradient(to right, #ff2c63 , #007d03)"
            }
        } else if (datos.indexOf("Teens") !== -1) {
            colorFondo = "#007d03"
        } else if (datos.indexOf("BJJ Adultos") !== -1) {
            colorFondo = "var(--azulSatori)"
        } else if (datos.indexOf("Boxeo") !== -1) {
            colorFondo = "var(--colorDobleA)"
        } else if (datos.indexOf("MMA") !== -1){
            colorFondo = "var(--rojoSatori)"
        } else {
            color = "black"
        }

        const estiloEste = {backgroundColor : colorFondo, color : color, backgroundImage: imagenFondo}
        return estiloEste
    }
    return (
        <>
            <div id='horarios' style={{position: "absolute", top: 0+"px"}}></div>
            <div id='corregirAlturaPorTopMenu' style={{position: "absolute", top: 130+"px"}}></div>
            <h1 className='section-titulo' id='section-titulo'>Horarios <br/><span style={{fontSize: "medium"}}>*Selecciona un programa para filtrar los horarios</span></h1>
            <div className='botones-planes-disciplinas' id='botones-planes-disciplinas'>
                <button className='boton-planes-disciplina' onClick={(e) => cambiarSlide(0,e)} title='Kids' style={styleBjjKids}>
                    BJJ Kids
                    <img src={kidsIcon} alt="" height="50px"/>
                </button>
                <button className='boton-planes-disciplina' onClick={(e) => cambiarSlide(1,e)} title='Teens' style={styleBjjTeens}>
                    BJJ Teens
                    <img src={teensIcon} alt="" height="50px" />
                </button>
                <button className='boton-planes-disciplina' onClick={(e) => cambiarSlide(2,e)} title='BJJ Adultos' style={styleBjjAdultos}>
                    BJJ Adultos
                    <img src={adultosIcon} alt="" height="50px"/>
                </button>
                <button className='boton-planes-disciplina' onClick={(e) => cambiarSlide(3,e)} title='Boxeo' style={styleBoxeo}>
                    Boxeo
                    <img src={boxeoIcon} alt="" height="50px"/>
                </button>
                <button className='boton-planes-disciplina' onClick={(e) => cambiarSlide(4,e)} title='MMA' style={styleMMA}>
                    MMA
                    <img src={mmaIcon} alt="" height="50px"/>
                </button>
                <button className='boton-planes-disciplina boton-planes-activo' onClick={(e) => cambiarSlide(5,e)} title='Todos' style={styleTodos}>
                    Todos
                    <img src={todosIcon} alt="" height="50px"/>
                </button>
            </div>
            <div className='section-container' id='section-container'>
                <div className='section-subcontainer'>
                    <div className='section-horarios-horario'>
                            {dataHorarios.fil1.map((datos, index) =>{
                                return (
                                    <div key={index} className='section-horarios-horario-fil-item'>
                                        <div>{datos}</div>
                                    </div>
                                )})
                            }
                            {dataHorarios.fil2.map((datos, index) =>{
                                const estiloEste = determinarColor(datos)
                                return (
                                    <div key={index} className='section-horarios-horario-fil-item' title='1'>
                                        <div style={estiloEste} className='horario-item fade'>{datos}</div>
                                    </div>
                                )})
                            }
                            {dataHorarios.fil3.map((datos, index) =>{
                                const estiloEste = determinarColor(datos)
                                return (
                                    <div key={index} className='section-horarios-horario-fil-item' title='2'>
                                        <div style={estiloEste} className='horario-item fade'>{datos}</div>
                                    </div>
                                )})
                            }
                            {dataHorarios.fil4.map((datos, index) =>{
                                const estiloEste = determinarColor(datos)
                                return (
                                    <div key={index} className='section-horarios-horario-fil-item' title='3'>
                                        <div style={estiloEste} className='horario-item fade'>{datos}</div>
                                    </div>
                                )})
                            }
                            {dataHorarios.fil5.map((datos, index) =>{
                                const estiloEste = determinarColor(datos)
                                return (
                                    <div key={index} className='section-horarios-horario-fil-item' title='4'>
                                        <div style={estiloEste} className='horario-item fade'>{datos}</div>
                                    </div>
                                )})
                            }
                            {dataHorarios.fil6.map((datos, index) =>{
                                const estiloEste = determinarColor(datos)
                                return (
                                    <div key={index} className='section-horarios-horario-fil-item' title='5'>
                                        <div style={estiloEste} className='horario-item fade'>{datos}</div>
                                    </div>
                                )})
                            }
                            {dataHorarios.fil7.map((datos, index) =>{
                                const estiloEste = determinarColor(datos)
                                return (
                                    <div key={index} className='section-horarios-horario-fil-item' title='6'>
                                        <div style={estiloEste} className='horario-item fade'>{datos}</div>
                                    </div>
                                )})
                            }
                            {dataHorarios.fil8.map((datos, index) =>{
                                const estiloEste = determinarColor(datos)
                                return (
                                    <div key={index} className='section-horarios-horario-fil-item' title='7'>
                                        <div style={estiloEste} className='horario-item fade'>{datos}</div>
                                    </div>
                                )})
                            }{dataHorarios.fil9.map((datos, index) =>{
                                const estiloEste = determinarColor(datos)
                                return (
                                    <div key={index} className='section-horarios-horario-fil-item' title='8'>
                                        <div style={estiloEste} className='horario-item fade'>{datos}</div>
                                    </div>
                                )})
                            }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Horarios