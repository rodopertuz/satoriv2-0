import Datepicker from '../components/datePicker.jsx'
import { useState,useRef } from 'react'
import { format } from 'date-fns'

import '../style/cortesia.css'

import { validarEmail, tipoTitulo, separadorCelular} from '../functions/commonFunctions.jsx'

import Botonfechacortesia from '../components/botonFechaCortesia.jsx'
import ConutryDataSelect from '../components/conutryDataSelect.jsx'
import LoadingAnimation from '../components/loadingAnimation.jsx'
import Confirmacion from './confirmacion.jsx'

function Cortesia() {
    const [selected, setSelected] = useState(new Date());
    const nombreRef = useRef(null)
    const mayordeRef = useRef(null)
    const acudienteRef = useRef(null)
    const emailRef = useRef(null)
    const tycRef = useRef(null)
    const fechaCortesiaRef = useRef(null)

    const mesNumeros = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
    const mesLetras = ["00", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    const diaMesNumeros = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"]
    const diaSemanaLetras = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
    const horarios = {
        Mo: ["7:00 - 8:30 AM / Jiu Jitsu Gi", "5:30 - 6:30 PM / Jiu Jitsu Teens (13 a 17 años)", "6:30 - 7:45 PM / Jiu Jitsu Gi", "8:00 - 9:00 PM / Jiu Jitsu NoGi"],
        Tu: ["7:00 - 8:30 AM / Jiu Jitsu NoGi", "4:30 - 5:30 PM / Jiu Jitsu Kids (4 a 12 años)", "5:30 - 6:30 PM / Boxeo", "6:30 - 7:45 PM / Jiu Jitsu NoGi", "8:00 - 9:00 PM / MMA"],
        We: ["7:00 - 8:30 AM / Jiu Jitsu Gi", "4:30 - 5:30 PM / Jiu Jitsu Kids (4 a 12 años)", "5:30 - 6:30 PM / Jiu Jitsu Teens (13 a 17 años)", "6:30 - 7:45 PM / Jiu Jitsu Gi", "8:00 - 9:00 PM / Jiu Jitsu NoGi"],
        Th: ["7:00 - 8:30 AM / Jiu Jitsu NoGi", "4:30 - 5:30 PM / Jiu Jitsu Kids (4 a 12 años)", "5:30 - 6:30 PM / Boxeo", "6:30 - 7:45 PM / Jiu Jitsu NoGi", "8:00 - 9:00 PM / MMA"],
        Fr: ["7:00 - 8:30 AM / Jiu Jitsu NoGi", "5:30 - 6:30 PM / Jiu Jitsu Teens (13 a 17 años)", "5:30 - 6:30 PM / Boxeo"],
        Sa: ["9:00 - 10:00 AM / MMA", "10:00 - 11:00 PM / Jiu Jitsu Kids + Teens (4 a 17 años)", "11:30 AM - 1:00 PM / Jiu Jitsu Gi"],
        Su: ["0"]
    }

    const festivos = ["03/24/2025", "04/17/2025", "04/18/2025", "05/01/2025", "06/02/2025", "06/23/2025", "06/30/2025", "08/07/2025", "08/18/2025", "10/13/2025", "11/03/2025", "11/17/2025", "12/08/2025", "12/24/2025", "12/25/2025", "12/31/2025"]
    
    const borderMissingInput = "2px solid red"
    const clearBorders = "2px solid transparent"
    const bottomBorder = "1px solid var(--grisClaroSatori)"

    var fechaHoy = new Date()
    fechaHoy = fechaHoy.getFullYear() + '-' + mesNumeros[fechaHoy.getMonth()] + '-' + diaMesNumeros[fechaHoy.getDate()];

    function activar(e) {
        var elemento = e.target
        var padre = elemento
        while (padre.id !== "container-element-horarios"){
            padre = padre.parentElement
        }
        var horariosItems = padre.getElementsByTagName("DIV");
        for (let i=1; i<horariosItems.length; i++){
            horariosItems[i].className = "fecha-cortesia-btn"
        }
        elemento.className = "fecha-cortesia-btn-selected"
    }

    if (selected){
        closeAllSelect()
        var padre = document.getElementById("container-element-horarios")
        if(padre !== null ){
            var horariosItems = padre.getElementsByTagName("DIV");
            for (let i=1; i<horariosItems.length; i++){
                horariosItems[i].className = "fecha-cortesia-btn"
            }
        }
        var selectedActual = format(selected, 'u') + "-" + format(selected, 'MM') + "-" + format(selected, 'dd')
        if (fechaHoy > selectedActual) setSelected(new Date())
    }

    function mayorde18Func(e){
        var acudienteRef = document.getElementById("acudiente")
        if (e.target.checked){
            acudienteRef.value = ""
            acudienteRef.disabled = true
        } else {
            acudienteRef.disabled = false
        }
    }

    function enviarFormulario(){
        var nombreCortesia = nombreRef.current.value
        var mayordeCortesia = mayordeRef.current.checked
        var acudienteCortesia = acudienteRef.current.value
        var emailCortesia = emailRef.current.value
        var tycCortesia = tycRef.current.checked
        var fechaCortesia = fechaCortesiaRef.current.innerText
        
        var celularCortesiaInput = document.getElementById("celular")
        var horaCortesia = document.getElementsByClassName("fecha-cortesia-btn-selected")

        const formulario = document.getElementById("container-element-form")
        const entradas = formulario.getElementsByTagName("INPUT")
        for (let i=0; i<entradas.length; i++){
            if (entradas[i].type.toLowerCase() === "text"){
                entradas[i].style.border = clearBorders
                entradas[i].style.borderBottom = bottomBorder
            }
        }
        document.getElementById('tyc-container').style.border = clearBorders
        document.getElementById("fechaCortesia").style.border = clearBorders

        if (nombreCortesia === ''){
            document.getElementById("nombre").style.border = borderMissingInput
            nombreRef.current.focus()
            alert("Escriba el nombre completo del alumno")
        } else if ((!mayordeCortesia) && (acudienteCortesia === '')){
            document.getElementById("acudiente").style.border = borderMissingInput
            acudienteRef.current.focus()
            alert("Escriba el nombre completo del acudiente o declare ser mayor de 18 años")
        } else if (validarEmail(emailCortesia) === null) {
            document.getElementById("email").style.border = borderMissingInput
            emailRef.current.focus()
            alert("Escriba una dirección de E-Mail válida")
        } else if ((celularCortesiaInput.value === '') || (celularCortesiaInput.value.length <13)) {
            document.getElementById("celular").style.border = borderMissingInput
            celularCortesiaInput.focus()
            alert("Escriba un número de celular válido")
        } else if (!tycCortesia) {
            document.getElementById("tyc-container").style.border = borderMissingInput
            alert("Por favor acepte nuestros Términos y Condiciones")
        } else if (horaCortesia.length === 0) {
            fechaCortesiaRef.current.focus()
            document.getElementById("fechaCortesia").style.border = borderMissingInput
            alert("Seleccione horario y clase")
        } else {
            var str = tipoTitulo(nombreCortesia)
            nombreRef.current.value = str
            nombreCortesia = str
            console.log("nombre: " + nombreCortesia)
            console.log(mayordeCortesia)
            str = tipoTitulo(acudienteCortesia)
            acudienteRef.current.value = str
            acudienteCortesia = str
            console.log("acudiente: " + acudienteCortesia)
            console.log("email: " + emailCortesia)
            const indicativo = document.getElementById("indicativo").innerText
            var celularCortesia = indicativo + " " + celularCortesiaInput.value
            celularCortesia = celularCortesia.replace("+","M");
            console.log("Celular: " + celularCortesia)
            console.log(tycCortesia)
            document.getElementById("fechaCortesiaInput").value = fechaCortesia
            console.log(fechaCortesia)
            document.getElementById("horaCortesiaInput").value = horaCortesia[0].innerText
            horaCortesia = horaCortesia[0].innerText
            console.log(horaCortesia)
            
            document.getElementById("loading-animation-container").style.display = "flex"
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                if (this.response === "OK") {
                    document.getElementById("loading-animation-container").style.display = "none"
                    document.getElementById("confirmacion-container").style.display = "flex"
                } else {
                    alert(this.response)
                    document.getElementById("loading-animation-container").style.display = "none"
                }
            }
            };
            xhttp.open("GET", "../php/emailNuevaCortesia.php?email=" + emailCortesia + "&nombre=" + nombreCortesia + "&celular=" + celularCortesia + "&acudiente=" +  acudienteCortesia+ "&fecha=" + fechaCortesia + "&hora=" + horaCortesia, true);
            xhttp.send();
        }
    }

    function closeAllSelect(elmnt) {
        /* A function that will close all select boxes in the document,
        except the current select box: */
        var x1, y, xl, yl, arrNo = []
        x1 = document.getElementsByClassName("select-items")
        y = document.getElementsByClassName("select-selected")
        xl = x1.length
        yl = y.length
        for (let i = 0; i < yl; i++) {
          if (elmnt === y[i]) {
            arrNo.push(i)
          } else {
            y[i].classList.remove("select-arrow-active")
          }
        }
        for (let i = 0; i < xl; i++) {
          if (arrNo.indexOf(i)) {
            x1[i].classList.add("select-hide")
          }
        }
      }

    return(
        <>
        <LoadingAnimation />
        <h1 className='section-titulo'>Agendar Clase de Cortesía</h1>
        <div className='section-container' id='section-container'>
            <div className='section-subcontainer'>
                <div class="container-element">
                    <div className='container-element-titulo'>Seleccionar Fecha</div>
                        <Datepicker selected={selected} setSelected={setSelected}/>
                </div>
                <div class="container-element" style={{width: "40%"}} id="container-element-horarios">
                    <div className='container-element-titulo'>Seleccionar Horario y Clase</div>
                    <p style={{fontWeight: "bold", border: clearBorders, marginRight: "50px"}} id='fechaCortesia' ref={fechaCortesiaRef}>{diaSemanaLetras[format(selected, 'i')]}, {format(selected, 'd')} de {mesLetras[format(selected, 'M')]}</p>
                    {
                        horarios[format(selected,'cccccc')].map((texto, index) => {
                            if ((texto !== '0') && (!festivos.includes(format(selected, 'P')))){
                                return (
                                    <Botonfechacortesia texto={texto} key={index} func={activar}/>
                                )
                            } else if (index === 0){
                                return(<><p style={{fontStyle: "italic", color: "var(--rojoSatori)"}}>Seleccione una fecha diferente a Domingos o Festivos</p></>)
                            } else {
                                return("")
                            }
                    })}
                </div>
                <div  class="container-element">
                    <div className='container-element-titulo'>Diligenciar Sus Datos</div>
                    <div className='container-element-form' id="container-element-form">
                        <form action="" id="cortesia-form">
                            <input type="text" name='nombre' id='nombre' placeholder='Nombre Completo Del Alumno' autoComplete='off' ref={nombreRef} />
                            <label htmlFor="nombre"></label>
                            <input type="checkbox" name='mayorde' id='mayorde' onChange={(e) => mayorde18Func(e)} title="mayorde"ref={mayordeRef}/>
                            <label htmlFor="mayorde">Soy mayor de 18 años</label>
                            <input type="text" name='acudiente' id='acudiente' placeholder='Nombre Completo Del Acudiente' autoComplete='off'ref={acudienteRef}/>
                            <label htmlFor="acudiente"></label>
                            <input type="text" name='email' id='email' placeholder='E-Mail' autoComplete='off' ref={emailRef}/>
                            <label htmlFor="email"></label>
                            <div>
                                <ConutryDataSelect func={separadorCelular} closeAllSelect={closeAllSelect}/>
                                <label htmlFor="celular"></label>
                            </div>
                            <div className='container-element-form-tyc-subcontainer' id='tyc-container'>
                                <input type="checkbox" name="tyc" id='tyc' title="tyc"ref={tycRef}/>
                                <label htmlFor="tyc">
                                    Acepto los&nbsp; 
                                    <a href='./docs/terminosycondiciones.html'>Términos Y Condiciones</a>
                                    &nbsp;y la&nbsp; 
                                    <a href='./docs/politica-de-privacidad.html'>Política de Privacidad</a>
                                </label>
                            </div>
                            <label htmlFor="fechaCortesia"></label>
                            <input type="text" name='fechaCortesia' id='fechaCortesiaInput' style={{display: "none"}}/>
                            <label htmlFor="horaCortesia"></label>
                            <input type="text" name='horaCortesia' id='horaCortesiaInput' style={{display: "none"}}/>
                        </form>
                        <button className='container-element-form-enviar-btn' onClick={() => enviarFormulario()}>
                            ENVIAR
                        </button>
                    </div>
                    {/* <p>{format(selected, 'u')}-{format(selected, 'MM')}-{format(selected, 'dd')}</p>
                    <p>{fechaHoy}</p> */}
                </div>
            </div>
        </div>
        <Confirmacion />
        </>
    )
}

export default Cortesia