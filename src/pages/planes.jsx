
import PlanItem from '../components/planItem'
import '../style/planes.css'

import {Datas} from '../data/dataJson.js' 

export default function Planes(){
    const titulosBJJ = Datas.BJJ.titulosBJJ
    const subtitulosBJJ = Datas.BJJ.subtitulosBJJ
    const vrMensualesBJJ = Datas.BJJ.vrMensualesBJJ
    const vrTotalesBJJ = Datas.BJJ.vrTotalesBJJ
    const botonesBJJ = Datas.BJJ.botonesBJJ
    const descripcionesBJJ = Datas.BJJ.descripcionesBJJ

    const titulosBoxeo = Datas.BOXEO.titulosBoxeo
    const subtitulosBoxeo = Datas.BOXEO.subtitulosBoxeo
    const vrMensualesBoxeo = Datas.BOXEO.vrMensualesBoxeo
    const vrTotalesBoxeo = Datas.BOXEO.vrTotalesBoxeo
    const botonesBoxeo = Datas.BOXEO.botonesBoxeo
    const descripcionesBoxeo = Datas.BOXEO.descripcionesBoxeo

    const titulosMMA = Datas.MMA.titulosMMA
    const subtitulosMMA = Datas.MMA.subtitulosMMA
    const vrMensualesMMA = Datas.MMA.vrMensualesMMA
    const vrTotalesMMA = Datas.MMA.vrTotalesMMA
    const botonesMMA = Datas.MMA.botonesMMA
    const descripcionesMMA = Datas.MMA.descripcionesMMA

    const titulosCombos = Datas.COMBOS.titulosCombos
    const subtitulosCombos = Datas.COMBOS.subtitulosCombos
    const vrMensualesCombos = Datas.COMBOS.vrMensualesCombos
    const vrTotalesCombos = Datas.COMBOS.vrTotalesCombos
    const botonesCombos = Datas.COMBOS.botonesCombos
    const descripcionesCombos = Datas.COMBOS.descripcionesCombos

    const titulosOtros = Datas.OTROS.titulosOtros
    const subtitulosOtros = Datas.OTROS.subtitulosOtros
    const vrMensualesOtros = Datas.OTROS.vrMensualesOtros
    const vrTotalesOtros = Datas.OTROS.vrTotalesOtros
    const botonesOtros = Datas.OTROS.botonesOtros
    const descripcionesOtros = Datas.OTROS.descripcionesOtros

    function cambiarSlide(slideIndex){
        const planesContainers = document.getElementsByClassName("planes-items-container")
        const botonesDiv = document.getElementById("planes-items-global-container")
        const botones = botonesDiv.getElementsByTagName("button")
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
        } else {
            document.getElementById("botones-planes-combos").style.visibility = 'hidden'
        }
        
        if (slideIndex > 4){
            botones[3].className = "boton-planes-disciplina boton-planes-activo";
            document.getElementById("botones-planes-combos").style.visibility = 'visible'
            slideIndex++
            botones[slideIndex].className = "boton-planes-disciplina sub-boton-activo";
        } else {
            botones[slideIndex].className = "boton-planes-disciplina boton-planes-activo";
            var color = ""
            if(slideIndex === 1) color = "var(--colorDobleA)"
            if(slideIndex === 2) color = "var(--rojoSatori)"
            if(slideIndex === 3) color = "black"
            console.log("index: " + slideIndex + ", Color: " + color)
            botones[slideIndex].style.borderColor = color;
        }
    }

    return(
        <>
            <h1 className='section-titulo'>Planes y Promociones</h1>
            <div className='planes-items-global-container' id='planes-items-global-container'>
                <div className='botones-planes-disciplinas' id='botones-planes-disciplinas'>
                    <button className='boton-planes-disciplina boton-planes-activo' onClick={() => cambiarSlide(0)}>BJJ</button>
                    <button className='boton-planes-disciplina' onClick={() => cambiarSlide(1)}>Boxeo</button>
                    <button className='boton-planes-disciplina' onClick={() => cambiarSlide(2)}>MMA</button>
                    <button className='boton-planes-disciplina' onClick={() => cambiarSlide(3)}>Combos!</button>
                    <button className='boton-planes-disciplina' onClick={() => cambiarSlide(4)}>Otros</button>
                </div>
                <div className='botones-planes-combos' id='botones-planes-combos' style={{visibility: "hidden"}}>
                    <button className='boton-planes-disciplina sub-boton' onClick={() => cambiarSlide(3)}>Pago Recurrente</button>
                    <button className='boton-planes-disciplina sub-boton' onClick={() => cambiarSlide(5)}>Pago Único 1 Mes</button>
                    <button className='boton-planes-disciplina sub-boton' onClick={() => cambiarSlide(6)}>Pago Único 5 Meses</button>
                    <button className='boton-planes-disciplina sub-boton' onClick={() => cambiarSlide(7)}>Pago Único 12 Meses</button>
                </div>
                <div className='planes-items-container fade' style={{display: "flex"}}>
                    {titulosBJJ.map((titulo, index) => {
                        var bestValue = ""
                        var color = "var(--azulSatori)"
                        if (index === 0) bestValue = "best-value"
                        return (
                            <PlanItem key={index} titulo={titulo} subtitulo={subtitulosBJJ[index]} vrMensual={vrMensualesBJJ[index]} vrTotal={vrTotalesBJJ[index]} descripcion={descripcionesBJJ[index]} boton={botonesBJJ[index]} bestValue={bestValue} color={color}/>
                        )
                    })}
                </div>
                <div className='planes-items-container fade'>
                    {titulosBoxeo.map((titulo, index) => {
                        var bestValue = ""
                        if (index === 0) bestValue = "best-value"
                        var color = "var(--colorDobleA)"
                        return (
                            <PlanItem key={index} titulo={titulo} subtitulo={subtitulosBoxeo[index]} vrMensual={vrMensualesBoxeo[index]} vrTotal={vrTotalesBoxeo[index]} descripcion={descripcionesBoxeo[index]} boton={botonesBoxeo[index]} bestValue={bestValue} color={color}/>
                        )
                    })}
                </div>
                <div className='planes-items-container fade'>
                    {titulosMMA.map((titulo, index) => {
                        var bestValue = ""
                        if (index === 0) bestValue = "best-value"
                        var color = "var(--rojoSatori)"
                        return (
                            <PlanItem key={index} titulo={titulo} subtitulo={subtitulosMMA[index]} vrMensual={vrMensualesMMA[index]} vrTotal={vrTotalesMMA[index]} descripcion={descripcionesMMA[index]} boton={botonesMMA[index]} bestValue={bestValue} color={color}/>
                        )
                    })}
                </div>
                <div className='planes-items-container fade'>
                    {titulosCombos.map((titulo, index) => {
                        var bestValue = ""
                        var color = "black"
                        if (index === 3) bestValue = "best-value"
                        return (
                            <PlanItem key={index} titulo={titulo} subtitulo={subtitulosCombos[index]} vrMensual={vrMensualesCombos[index]} vrTotal={vrTotalesCombos[index]} descripcion={descripcionesCombos[index]} boton={botonesCombos[index]} bestValue={bestValue} color={color}/>
                        )
                    })}
                </div>
                <div className='planes-items-container fade'>
                    {titulosOtros.map((titulo, index) => {
                        var bestValue = ""
                        if (index === 0) bestValue = "best-value"
                        return (
                            <PlanItem key={index} titulo={titulo} subtitulo={subtitulosOtros[index]} vrMensual={vrMensualesOtros[index]} vrTotal={vrTotalesOtros[index]} descripcion={descripcionesOtros[index]} boton={botonesOtros[index]} bestValue={bestValue}/>
                        )
                    })}
                </div>
                <div className='planes-items-container fade'>
                    {titulosCombos.map((titulo, index) => {
                        var bestValue = ""
                        if (index === 0) bestValue = "best-value"
                        return (
                            <PlanItem key={index} titulo={titulo} subtitulo={subtitulosCombos[index]} vrMensual={vrMensualesCombos[index]} vrTotal={vrTotalesCombos[index]} descripcion={descripcionesCombos[index]} boton={botonesCombos[index]} bestValue={bestValue}/>
                        )
                    })}
                </div>
                <div className='planes-items-container fade'>
                    {titulosCombos.map((titulo, index) => {
                        var bestValue = ""
                        if (index === 0) bestValue = "best-value"
                        return (
                            <PlanItem key={index} titulo={titulo} subtitulo={subtitulosCombos[index]} vrMensual={vrMensualesCombos[index]} vrTotal={vrTotalesCombos[index]} descripcion={descripcionesCombos[index]} boton={botonesCombos[index]} bestValue={bestValue}/>
                        )
                    })}
                </div>
                <div className='planes-items-container fade'>
                    {titulosCombos.map((titulo, index) => {
                        var bestValue = ""
                        if (index === 0) bestValue = "best-value"
                        return (
                            <PlanItem key={index} titulo={titulo} subtitulo={subtitulosCombos[index]} vrMensual={vrMensualesCombos[index]} vrTotal={vrTotalesCombos[index]} descripcion={descripcionesCombos[index]} boton={botonesCombos[index]} bestValue={bestValue}/>
                        )
                    })}
                </div>
            </div>

        </>
    )
}