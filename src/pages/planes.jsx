
import PlanItem from '../components/planItem'
import '../style/planes.css'

import {DataPlanes} from '../data/dataPlanesJson.js' 

export default function Planes(){

    function cambiarSlide(slideIndex, evento){

        const planesContainers = document.getElementsByClassName("planes-items-container")
        const botonesDiv = document.getElementById("planes-items-global-container")
        const botones = botonesDiv.getElementsByTagName("button")

        document.getElementById("corregirAlturaPorTopMenu").scrollIntoView({ behavior: 'smooth' })
        
        for (let i=0; i<planesContainers.length; i++){
            planesContainers[i].style.display = "none";
        }
        for (let i=0; i<botones.length; i++){
            if (i>4){
                botones[i].className = "boton-planes-disciplina sub-boton"
            } else {
                botones[i].className = "boton-planes-disciplina"
            }
            
        }
        planesContainers[slideIndex].style.display = "flex";
        if(slideIndex === 3){
            botones[5].className = "boton-planes-disciplina sub-boton-activo";
            document.getElementById("botones-planes-combos").style.visibility = 'visible'
            document.getElementById("botones-planes-combos").style.marginBottom = '20px'
        } else {
            document.getElementById("botones-planes-combos").style.visibility = 'hidden'
            document.getElementById("botones-planes-combos").style.marginBottom = '0px'
        }
        
        if (slideIndex > 4){
            botones[3].className = "boton-planes-disciplina boton-planes-activo";
            document.getElementById("botones-planes-combos").style.visibility = 'visible'
            document.getElementById("botones-planes-combos").style.marginBottom = '20px'
            slideIndex++
            botones[slideIndex].className = "boton-planes-disciplina sub-boton-activo";
        } else {
            botones[slideIndex].className = "boton-planes-disciplina boton-planes-activo";
            const seccion = evento.target.title.toUpperCase()
            var color = DataPlanes[seccion].color
            botones[slideIndex].style.borderColor = color;
        }
    }


    return(
        <>
            <div id='planes' style={{position: "absolute", top: 0+"px"}}></div>
            <div id='corregirAlturaPorTopMenu' style={{position: "absolute", top: 130+"px"}}></div>
            <h1 className='section-titulo'>Planes y Promociones<br/><span style={{fontSize: "medium"}}>*Selecciona un programa para ver las diferentes opciones de afiliación</span></h1>
            <div className='planes-items-global-container' id='planes-items-global-container'>
                <div className='botones-planes-disciplinas' id='botones-planes-disciplinas'>
                    <button className='boton-planes-disciplina boton-planes-activo' onClick={(e) => cambiarSlide(0,e)} title='BJJ'>BJJ</button>
                    <button className='boton-planes-disciplina' onClick={(e) => cambiarSlide(1,e)} title='Boxeo'>Boxeo</button>
                    <button className='boton-planes-disciplina' onClick={(e) => cambiarSlide(2,e)} title='MMA'>MMA</button>
                    <button className='boton-planes-disciplina' onClick={(e) => cambiarSlide(3,e)} title='Combos'>Combos</button>
                    <button className='boton-planes-disciplina' onClick={(e) => cambiarSlide(4,e)} title='Otros'>Otros</button>
                </div>
                <div className='botones-planes-combos' id='botones-planes-combos' style={{visibility: "hidden"}}>
                    <button className='boton-planes-disciplina sub-boton' onClick={(e) => cambiarSlide(3,e)} title='Combos'>Pago Recurrente</button>
                    <button className='boton-planes-disciplina sub-boton' onClick={(e) => cambiarSlide(5,e)} title='Combos'>Pago Único 1 Mes</button>
                    <button className='boton-planes-disciplina sub-boton' onClick={(e) => cambiarSlide(6,e)} title='Combos'>Pago Único 5 Meses</button>
                    <button className='boton-planes-disciplina sub-boton' onClick={(e) => cambiarSlide(7,e)} title='Combos'>Pago Único 12 Meses</button>
                </div>
                <div className='planes-items-container fade' style={{display: "flex"}}>
                    {DataPlanes.BJJ.titulos.map((titulo, index) => {
                        var bestValue = ""
                        if (index === 0) bestValue = "best-value"
                        return (
                            <PlanItem key={index} titulo={titulo} subtitulo={DataPlanes.BJJ.subtitulos[index]} vrMensual={DataPlanes.BJJ.vrMensuales[index]} vrTotal={DataPlanes.BJJ.vrTotales[index]} descripcion={DataPlanes.BJJ.descripciones[index]} boton={DataPlanes.BJJ.botones[index]} bestValue={bestValue} color={DataPlanes.BJJ.color}/>
                        )
                    })}
                </div>
                <div className='planes-items-container fade'>
                    {DataPlanes.BOXEO.titulos.map((titulo, index) => {
                        var bestValue = ""
                        if (index === 0) bestValue = "best-value"
                        return (
                            <PlanItem key={index} titulo={titulo} subtitulo={DataPlanes.BOXEO.subtitulos[index]} vrMensual={DataPlanes.BOXEO.vrMensuales[index]} vrTotal={DataPlanes.BOXEO.vrTotales[index]} descripcion={DataPlanes.BOXEO.descripciones[index]} boton={DataPlanes.BOXEO.botones[index]} bestValue={bestValue} color={DataPlanes.BOXEO.color}/>
                        )
                    })}
                </div>
                <div className='planes-items-container fade'>
                    {DataPlanes.MMA.titulos.map((titulo, index) => {
                        var bestValue = ""
                        if (index === 0) bestValue = "best-value"
                        return (
                            <PlanItem key={index} titulo={titulo} subtitulo={DataPlanes.MMA.subtitulos[index]} vrMensual={DataPlanes.MMA.vrMensuales[index]} vrTotal={DataPlanes.MMA.vrTotales[index]} descripcion={DataPlanes.MMA.descripciones[index]} boton={DataPlanes.MMA.botones[index]} bestValue={bestValue} color={DataPlanes.MMA.color}/>
                        )
                    })}
                </div>
                <div className='planes-items-container fade'>
                    {DataPlanes.COMBOS.titulos.map((titulo, index) => {
                        var bestValue = ""
                        if (index === 3) bestValue = "best-value"
                        return (
                            <PlanItem key={index} titulo={titulo} subtitulo={DataPlanes.COMBOS.subtitulos[index]} vrMensual={DataPlanes.COMBOS.vrMensuales[index]} vrTotal={DataPlanes.COMBOS.vrTotales[index]} descripcion={DataPlanes.COMBOS.descripciones[index]} boton={DataPlanes.COMBOS.botones[index]} bestValue={bestValue} color={DataPlanes.COMBOS.color}/>
                        )
                    })}
                </div>
                <div className='planes-items-container fade'>
                    {DataPlanes.OTROS.titulos.map((titulo, index) => {
                        var bestValue = ""
                        if (index === 0) bestValue = "best-value"
                        return (
                            <PlanItem key={index} titulo={titulo} subtitulo={DataPlanes.OTROS.subtitulos[index]} vrMensual={DataPlanes.OTROS.vrMensuales[index]} vrTotal={DataPlanes.OTROS.vrTotales[index]} descripcion={DataPlanes.OTROS.descripciones[index]} boton={DataPlanes.OTROS.botones[index]} bestValue={bestValue} color={DataPlanes.OTROS.color}/>
                        )
                    })}
                </div>
                <div className='planes-items-container fade'>
                    {DataPlanes.COMBOSMES.titulos.map((titulo, index) => {
                        var bestValue = ""
                        if (index === 0) bestValue = "best-value"
                        return (
                            <PlanItem key={index} titulo={titulo} subtitulo={DataPlanes.COMBOSMES.subtitulos[index]} vrMensual={DataPlanes.COMBOSMES.vrMensuales[index]} vrTotal={DataPlanes.COMBOSMES.vrTotales[index]} descripcion={DataPlanes.COMBOSMES.descripciones[index]} boton={DataPlanes.COMBOSMES.botones[index]} bestValue={bestValue} color={DataPlanes.COMBOSMES.color}/>
                        )
                    })}
                </div>
                <div className='planes-items-container fade'>
                    {DataPlanes.COMBOS5MESES.titulos.map((titulo, index) => {
                        var bestValue = ""
                        if (index === 1) bestValue = "best-value"
                        return (
                            <PlanItem key={index} titulo={titulo} subtitulo={DataPlanes.COMBOS5MESES.subtitulos[index]} vrMensual={DataPlanes.COMBOS5MESES.vrMensuales[index]} vrTotal={DataPlanes.COMBOS5MESES.vrTotales[index]} descripcion={DataPlanes.COMBOS5MESES.descripciones[index]} boton={DataPlanes.COMBOS5MESES.botones[index]} bestValue={bestValue} color={DataPlanes.COMBOS5MESES.color}/>
                        )
                    })}
                </div>
                <div className='planes-items-container fade'>
                    {DataPlanes.COMBOSANUALIDAD.titulos.map((titulo, index) => {
                        var bestValue = ""
                        if (index === 0) bestValue = "best-value"
                        return (
                            <PlanItem key={index} titulo={titulo} subtitulo={DataPlanes.COMBOSANUALIDAD.subtitulos[index]} vrMensual={DataPlanes.COMBOSANUALIDAD.vrMensuales[index]} vrTotal={DataPlanes.COMBOSANUALIDAD.vrTotales[index]} descripcion={DataPlanes.COMBOSANUALIDAD.descripciones[index]} boton={DataPlanes.COMBOSANUALIDAD.botones[index]} bestValue={bestValue} color={DataPlanes.COMBOSANUALIDAD.color}/>
                        )
                    })}
                </div>
            </div>
        </>
    )
}