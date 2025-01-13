import '../style/site.css'
import '../style/cortesia.css'

function Botonfechacortesia({texto, func}) {
    return(
        <>
            <div className='fecha-cortesia-btn' onClick={(e) => func(e)}>{texto}</div>
        </>
    )
}

export default Botonfechacortesia