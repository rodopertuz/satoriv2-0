import { HashLink } from 'react-router-hash-link';

function Topmenuitemsitem ({linkTo, texto, divStyle, func}) {
    return (
        <>
            <HashLink smooth to={linkTo} onClick={(e) => func(e)}>
                <div className='menu-items-item' title={texto} style={divStyle}><p title={texto}>{texto}</p></div>
            </HashLink>
        </>
    )
}

export default Topmenuitemsitem