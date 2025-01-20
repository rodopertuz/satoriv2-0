import { HashLink } from 'react-router-hash-link';

import checkSign from '../img/checkSignRojo.png'
import facebookIcon from '../img/facebookIcon.png'
import instagramIcon from '../img/instagramIcon.png'
import locationPin from '../img/locationPin.png'
import whatsappIcon from '../img/whatsappIcon.png'

import '../style/confirmacion.css'

export default function Confirmacion(){
    return (
        <>
            <div id="confirmacion-container" className="confirmacion-container">
                <img src={checkSign} alt="checkSign" className='confirmacion-checksign'/>
                <h1 id="confirmacion-titulo" className='confirmacion-titulo'>Gracias Por Registratre!</h1>
                <div id="confirmacion-subcontainer" className="confirmacion-subcontainer">
                    <p>Has reservado con éxito tu clase de cortesía en Satori Jiu Jitsu !</p>
                    <p>Tus datos han sido registrados en nuestra base de datos, estaremos felices de tenerte</p>
                    <p>Recibirás instrucciones y recomendaciones en el correo registrado: <span id="spanEmail">ejemplo@dominio.com</span></p>
                    <div id='confirmacion-subcontainer2' className='confirmacion-subcontainer2'>
                        <div id='confirmacion-social' className='confirmacion-social'>
                            <h3>Conéctate con nosotros</h3>
                            <div id='confirmacion-social-items' className='confirmacion-social-items'>
                                <a href='https://maps.app.goo.gl/agS1R4pUqBahVcWFA?g_st=com.google.maps.preview.copy' target='_blank' rel="noreferrer">
                                    <div className='confirmacion-social-item'>
                                        <img src={locationPin} className='menu-social-icon' alt='instagramIcon'></img>
                                    </div>
                                </a>
                                <a href='https://wa.me/573214548820?text=Hola!%20Quisiera%20más%20información%20acerca%20de%20sus%20clases%20de%20Jiu%20Jitsu,%20Boxeo%20y%20MMA' target='_blank' rel="noreferrer">
                                    <div className='confirmacion-social-item'>
                                        <img src={whatsappIcon} className='menu-social-icon' alt='instagramIcon'></img>
                                    </div>
                                </a>
                                <a href='https://www.facebook.com/profile.php?id=100094365744388' target='_blank' rel='noreferrer'>
                                    <div className='confirmacion-social-item'>
                                        <img src={facebookIcon} className='menu-social-icon' alt='facebookIcon'></img>
                                    </div>
                                </a>
                                <a href='https://www.instagram.com/satori_jiujitsu/' target='_blank' rel='noreferrer'>
                                    <div className='confirmacion-social-item'>
                                        <img src={instagramIcon} className='menu-social-icon' alt='instagramIcon'></img>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div id='confirmacion-web' className='confirmacion-web'>
                            <h3>Continua navengando</h3>
                            <HashLink to="/#home">
                                <div>https://www.satorijiujitsu.com.co</div>
                            </HashLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}