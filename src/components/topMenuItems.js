import { HashLink } from 'react-router-hash-link';

import '../style/menu.css';

function TopMenuItems() {
    const menuItems = ["Home", "Nosotros", "Programas", "Horarios", "Staff", "Contacto", "FAQ"]

    function activar(e) {
        var elemento = e.target
        if (elemento.tagName.toUpperCase() === "P"){
            elemento = elemento.parentElement 
        } else if (elemento.tagName.toUpperCase() === "A"){
            elemento = elemento.getElementsByTagName("DIV")[0]
        }
        var padre = elemento
        while (padre.id !== "menu-items-container"){
            padre = padre.parentElement
        }
        var menuItems = padre.getElementsByTagName("DIV");
        for (let i=0; i<menuItems.length; i++){
            menuItems[i].style.color = "black"
        }
        elemento.style.color = "#ff402c"
    }
    
    return (
        <>
        {
            menuItems.map((texto, index) => {

                var linkTo
                if((texto.toLowerCase() === "nosotros") || (texto.toLowerCase() === "staff")){
                    linkTo = "/home#" + texto.toLowerCase()
                } else {
                    linkTo = "/" + texto.toLowerCase() + "#" + texto.toLowerCase()
                }

                var colorA = "black"
                const hrefActual = window.location.href
                if (hrefActual.search(texto.toLowerCase()) !== -1){
                    colorA = "red"
                } else if ((hrefActual.charAt(hrefActual.length-1) === '/') && (texto.toLowerCase() === "home")) {
                    colorA = "red"
                }
                const divStyle = {
                    color: colorA,
                };

                return (
                    <>
                        <HashLink smooth to={linkTo} onClick={(e) => activar(e)} key={index}>
                            <div className='menu-items-item' title={texto} style={divStyle}><p title={texto}>{texto}</p></div>
                        </HashLink>
                    </>
                )
            })
        }
        </>
    )
}

export default TopMenuItems