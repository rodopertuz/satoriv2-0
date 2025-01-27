
import PlanItem from '../components/planItem'
import '../style/planes.css'

import {Datas} from '../data/dataJson.js' 

export default function Planes(){

    function cambiarSlide(slideIndex, evento){
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
            var color = Datas[seccion].color
            botones[slideIndex].style.borderColor = color;
        }
    }


    return(
        <>
            <h1 className='section-titulo'>Planes y Promociones</h1>
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
                    {Datas.BJJ.titulos.map((titulo, index) => {
                        var bestValue = ""
                        if (index === 0) bestValue = "best-value"
                        return (
                            <PlanItem key={index} titulo={titulo} subtitulo={Datas.BJJ.subtitulos[index]} vrMensual={Datas.BJJ.vrMensuales[index]} vrTotal={Datas.BJJ.vrTotales[index]} descripcion={Datas.BJJ.descripciones[index]} boton={Datas.BJJ.botones[index]} bestValue={bestValue} color={Datas.BJJ.color}/>
                        )
                    })}
                </div>
                <div className='planes-items-container fade'>
                    {Datas.BOXEO.titulos.map((titulo, index) => {
                        var bestValue = ""
                        if (index === 0) bestValue = "best-value"
                        return (
                            <PlanItem key={index} titulo={titulo} subtitulo={Datas.BOXEO.subtitulos[index]} vrMensual={Datas.BOXEO.vrMensuales[index]} vrTotal={Datas.BOXEO.vrTotales[index]} descripcion={Datas.BOXEO.descripciones[index]} boton={Datas.BOXEO.botones[index]} bestValue={bestValue} color={Datas.BOXEO.color}/>
                        )
                    })}
                </div>
                <div className='planes-items-container fade'>
                    {Datas.MMA.titulos.map((titulo, index) => {
                        var bestValue = ""
                        if (index === 0) bestValue = "best-value"
                        return (
                            <PlanItem key={index} titulo={titulo} subtitulo={Datas.MMA.subtitulos[index]} vrMensual={Datas.MMA.vrMensuales[index]} vrTotal={Datas.MMA.vrTotales[index]} descripcion={Datas.MMA.descripciones[index]} boton={Datas.MMA.botones[index]} bestValue={bestValue} color={Datas.MMA.color}/>
                        )
                    })}
                </div>
                <div className='planes-items-container fade'>
                    {Datas.COMBOS.titulos.map((titulo, index) => {
                        var bestValue = ""
                        if (index === 3) bestValue = "best-value"
                        return (
                            <PlanItem key={index} titulo={titulo} subtitulo={Datas.COMBOS.subtitulos[index]} vrMensual={Datas.COMBOS.vrMensuales[index]} vrTotal={Datas.COMBOS.vrTotales[index]} descripcion={Datas.COMBOS.descripciones[index]} boton={Datas.COMBOS.botones[index]} bestValue={bestValue} color={Datas.COMBOS.color}/>
                        )
                    })}
                </div>
                <div className='planes-items-container fade'>
                    {Datas.OTROS.titulos.map((titulo, index) => {
                        var bestValue = ""
                        if (index === 0) bestValue = "best-value"
                        return (
                            <PlanItem key={index} titulo={titulo} subtitulo={Datas.OTROS.subtitulos[index]} vrMensual={Datas.OTROS.vrMensuales[index]} vrTotal={Datas.OTROS.vrTotales[index]} descripcion={Datas.OTROS.descripciones[index]} boton={Datas.OTROS.botones[index]} bestValue={bestValue} color={Datas.OTROS.color}/>
                        )
                    })}
                </div>
                <div className='planes-items-container fade'>
                    {Datas.COMBOSMES.titulos.map((titulo, index) => {
                        var bestValue = ""
                        if (index === 0) bestValue = "best-value"
                        return (
                            <PlanItem key={index} titulo={titulo} subtitulo={Datas.COMBOSMES.subtitulos[index]} vrMensual={Datas.COMBOSMES.vrMensuales[index]} vrTotal={Datas.COMBOSMES.vrTotales[index]} descripcion={Datas.COMBOSMES.descripciones[index]} boton={Datas.COMBOSMES.botones[index]} bestValue={bestValue} color={Datas.COMBOSMES.color}/>
                        )
                    })}
                </div>
                <div className='planes-items-container fade'>
                    {Datas.COMBOS5MESES.titulos.map((titulo, index) => {
                        var bestValue = ""
                        if (index === 1) bestValue = "best-value"
                        return (
                            <PlanItem key={index} titulo={titulo} subtitulo={Datas.COMBOS5MESES.subtitulos[index]} vrMensual={Datas.COMBOS5MESES.vrMensuales[index]} vrTotal={Datas.COMBOS5MESES.vrTotales[index]} descripcion={Datas.COMBOS5MESES.descripciones[index]} boton={Datas.COMBOS5MESES.botones[index]} bestValue={bestValue} color={Datas.COMBOS5MESES.color}/>
                        )
                    })}
                </div>
                <div className='planes-items-container fade'>
                    {Datas.COMBOSANUALIDAD.titulos.map((titulo, index) => {
                        var bestValue = ""
                        if (index === 0) bestValue = "best-value"
                        return (
                            <PlanItem key={index} titulo={titulo} subtitulo={Datas.COMBOSANUALIDAD.subtitulos[index]} vrMensual={Datas.COMBOSANUALIDAD.vrMensuales[index]} vrTotal={Datas.COMBOSANUALIDAD.vrTotales[index]} descripcion={Datas.COMBOSANUALIDAD.descripciones[index]} boton={Datas.COMBOSANUALIDAD.botones[index]} bestValue={bestValue} color={Datas.COMBOSANUALIDAD.color}/>
                        )
                    })}
                </div>
            </div>
        </>
    )
}