import '../style/profesor.css'

export default function Profesor ({nombre, titulo, descripcion, fotos, refProfesores, index}){

    const imgSrc = "../img/profesores/" + fotos[index].toLowerCase() + ".png"
    const ref = refProfesores[index]
    
    return(
        <>
            <div className='profesor-container' title={index} ref={ref}>
                <img src={imgSrc} alt="professorPhoto" />
                <div className='profesor-info'>
                    <h3>{nombre}</h3>
                    <p>{titulo}</p>
                </div>
                <div className='profesor-descripcion'>
                    <p>{descripcion}</p>
                </div>
            </div>
        </>
    )
}