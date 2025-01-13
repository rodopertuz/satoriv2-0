
export default function CountryDataItem ({index, country, countryCodes, areaCodes, clase, func}){

    // function getImageURL(name){
    //     return new URL(`%PUBLIC_URL%/img/nacion/${name}`, import.meta.url).href
    // }

    // const imgSrc = countryCodes[index].toLowerCase() + ".png"\
    const imgSrc = "../img/nacion/" + countryCodes[index].toLowerCase() + ".png"

    return (
        <>
            <div title={countryCodes[index]} className={clase} onClick={(e) => func(e)}>
                <img src={imgSrc} alt="" className='actualFlag'/>
                {countryCodes[index]} - {country}&nbsp;&nbsp; 
                <span>+{areaCodes[index]}</span>
            </div>
        </>
    )
}