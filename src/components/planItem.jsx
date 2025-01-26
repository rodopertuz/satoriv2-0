import '../style/planItem.css'

export default function PlanItem({titulo, subtitulo, vrMensual, vrTotal, descripcion, boton, bestValue, color}){

    const clase = 'plan-item-container ' + bestValue
    var sombra = ""
    if (bestValue === ""){
        sombra = "0px 0px 10px 0px var(--grisOscuroSatori)"
    } else {
        sombra = "0px 0px 10px 0px " + color
    }

    return(
        <>
            <div id='plan-item-container' className={clase} style={{boxShadow: sombra}}>
                <h2 id='plan-item-titulo' className='plan-item-titulo'>{titulo}</h2>
                <h3 id='plan-item-subtitulo' className='plan-item-subtitulo'>{subtitulo}</h3>
                <p className='plan-item-generalinfo'>Equivalente mensual</p>
                <p className='plan-item-vrMensual' style={{color: color}}>{vrMensual} / mes</p>
                <p className='plan-item-generalinfo'>Hoy pagas</p>
                <p className='plan-item-vrTotal' style={{color: color}}>{vrTotal}</p>
                <div className='plan-item-boton-pagar' style={{backgroundColor: color}}>{boton}</div>
                <p className='plan-item-generalinfo'>Ideal para:</p>
                <div className='plan-item-descripcion-container'>
                    <ul>
                        {descripcion.map((item, index) =>
                        <li key={index}>{item}</li>
                    )}
                    </ul>
                </div>
            </div>
        </>
    )

}