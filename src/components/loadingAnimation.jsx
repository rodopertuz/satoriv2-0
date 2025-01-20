import '../style/loadingAnimation.css'
import imgLogoSatori from '../img/logoSatori.png'

export default function LoadingAnimation(){

    return(
        <>
        <div className="divStyle" id="loading-animation-container">
            <img src={imgLogoSatori} alt="logoSatori" className="loadingLogo" />
        </div>
        </>
    )
}