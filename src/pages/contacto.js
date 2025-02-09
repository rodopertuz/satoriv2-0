// import facebookIcon from '../img/facebookIcon.png';
// import instagramIcon from '../img/instagramIcon.png';
import whatsappIcon from '../img/whatsappIcon.png';
import locationPin from '../img/locationPin.png';
import chatOnWhatsapp from '../img/WhatsAppButtonGreenSmall.png'

import '../style/contacto.css'

function Contacto() {
    return(
        <>
            <div id='contacto' style={{position: "absolute", top: 0+"px"}}></div>
            <div id='corregirAlturaPorTopMenu' style={{position: "absolute", top: 130+"px"}}></div>
            <h1 className='section-titulo' style={{visibility : "hidden"}}>Contacto</h1>
            <div className='section-container'>
                <div className='section-subcontainer'>
                    <div class="container-element">
                        <div className='container-element-titulo'>Satori Jiu Jitsu - Centro de Artes Marciales</div>
                        <a href='https://maps.app.goo.gl/agS1R4pUqBahVcWFA?g_st=com.google.maps.preview.copy' target='_blank' rel="noreferrer">
                            <div className='footer-items-whatsapp'>
                                <img src={locationPin} className='menu-social-icon' alt='instagramIcon'></img>
                                <p>Carrera 11 # 80 - 09 / Piso 2</p>
                            </div>
                        </a>
                        <a href='https://wa.me/573214548820?text=Hola!%20Quisiera%20más%20información%20acerca%20de%20sus%20clases%20de%20Jiu%20Jitsu,%20Boxeo%20y%20MMA' target='_blank' rel="noreferrer">
                            <div className='footer-items-whatsapp'>
                                <img src={whatsappIcon} className='menu-social-icon' alt='instagramIcon'></img>
                                <p>+57 (321) 454 8820 [solo WhatsApp]</p>
                            </div>
                        </a>
                        <a aria-label="Chat on WhatsApp" href="https://wa.me/573214548820?text=Hola!%20Quisiera%20más%20información%20acerca%20de%20sus%20clases%20de%20Jiu%20Jitsu,%20Boxeo%20y%20MMA" target='_blank' rel="noreferrer">
                            <img alt="Chat on WhatsApp" src={chatOnWhatsapp}/>
                        </a>
                    </div>
                    <div class="container-element">
                        <iframe title="GoogleApisMapsFrame"
                        src="https://www.google.com/maps/embed?pb=!4v1691345795006!6m8!1m7!1siH5N98tO_wXz8egVqBomOA!2m2!1d4.664319244347568!2d-74.05385467817058!3f329.58206!4f0!5f0.7820865974627469"
                        frameborder="0" width="400" height="300" style={{border:"0"}} allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div class="container-element">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1988.301864171954!2d-74.05489867238927!3d4.664529999413813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b1682b0dd13%3A0x895ecee723bd92fa!2sSatori%20Jiu%20Jitsu!5e0!3m2!1ses-419!2sco!4v1738548140922!5m2!1ses-419!2sco" width="400" height="300" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='googleMap'></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacto