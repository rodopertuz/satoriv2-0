
import '../style/menu.css';
import Topmenuitemsitem from './topMenuItemsItem';

function TopMenuItems() {
    const menuItems = ["Home", "Nosotros",  "Staff", "Programas", "Horarios", "Planes", "Contacto", "FAQ"]

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
                    linkTo = "/#" + texto.toLowerCase()
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
                        <Topmenuitemsitem linkTo={linkTo} texto={texto} divStyle={divStyle} func={activar} key={index}/>
                    </>
                )
            })
        }
        </>
    )
}

export default TopMenuItems