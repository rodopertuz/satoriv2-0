import facebookIcon from '../img/facebookIconP.png';
import instagramIcon from '../img/instagramIconP.png';
import whatsappIcon from '../img/whatsappIconRedondoP.png';
import locationPin from '../img/locationPinP.png';
import '../style/footer.css';

function Footer () {
    return(
        <div className='footer-container'>
            <div className='footer-section'>
                <div className='footer-items-container'>
                    <h2>Acceso Rápido</h2>
                    <a href='#menu'><p>Home</p></a>
                    <a href='#menu'><p>Nosotros</p></a>
                    <a href='#menu'><p>Programas</p></a>
                    <a href='#menu'><p>Staff</p></a>
                    <a href='#menu'><p>Contacto</p></a>
                </div>
                <div className='footer-items-container'>
                    <h2>Información de Contacto</h2>
                    <p>Satori Jiu Jitsu</p>
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
                    <div className='menu-social-container'>
                        <a href='https://www.facebook.com/profile.php?id=100094365744388' target='_blank' rel='noreferrer'>
                            <div className='menu-social-item'>
                                <img src={facebookIcon} className='menu-social-icon' alt='facebookIcon'></img>
                            </div>
                        </a>
                        <a href='https://www.instagram.com/satori_jiujitsu/' target='_blank' rel='noreferrer'>
                            <div className='menu-social-item'>
                                <img src={instagramIcon} className='menu-social-icon' alt='instagramIcon'></img>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='footer-items-container'>
                    <h2>Horario de trabajo</h2>
                    <p>- Lunes a Viernes: 7:00 - 9:00 AM, 4:30 - 8:00PM</p>
                    <br></br>
                    <p>- Sábado: 9:00 PM - 1:00 PM</p>
                </div>
            </div>
            <div className='footer-section'>
                <div className='footer-menu-container'>
                    <a href='./docs/terminosycondiciones.html'><div className='footer-menu-item'><p>Términos y Condiciones</p></div></a>
                    <a href='./docs/politica-de-privacidad.html'><div className='footer-menu-item'><p>Política de Privacidad</p></div></a>
                    <div className='footer-menu-item'><p>&copy; 2025 Satori Jiu Jitsu. Powered by Agedial </p></div>
                </div>
            </div>
        </div>
    );
}

export default Footer;