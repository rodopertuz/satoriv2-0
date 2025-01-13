import '../style/countryDataSelect.css'
import CountryDataItem from './countryDataItem';
import banderaColombia from '../img/nacion/co.png'

export default function ConutryDataSelect({func, closeAllSelect}) {
  
  const countryCodes = ["AF", "AL", "DZ", "AD", "AO", "AI", "AG", "AR", "AM", "AW", "AC", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BR", "IO", "BN", "BG", "BF", "BI", "KH", "CM", "CA", "CV", "KY", "CF", "TD", "CL", "CN", "CO", "KM", "CG", "CD", "CK", "CR", "HR", "CU", "CW", "CY", "CZ", "DK", "DJ", "DM", "DO", "TL", "EC", "EG", "SV", "GQ", "ER", "EE", "SZ", "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GN", "GW", "GY", "HT", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IL", "IT", "CI", "JM", "JP", "JO", "KZ", "KE", "KI", "KP", "KR", "XK", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MN", "NA", "NR", "NP", "NL", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "NP", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PL", "PT", "PR", "QA", "RE", "RO", "RU", "RW", "WS", "SM", "ST", "SA", "SN", "CS", "SC", "SL", "SG", "SK", "SI", "SB", "SO", "ZA", "SS", "ES", "LK", "SH", "KN", "SC", "PM", "SD", "SR", "SE", "CH", "SI", "TW", "TJ", "TZ", "TH", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "UG", "UA", "AE", "GB", "US", "UY", "UZ", "VU", "VA", "VE", "VN", "VG", "VI", "WF", "EH", "YE", "ZM", "ZW"]
  
  const areaCodes = ["93", "355", "213", "376", "244", "1264", "1268", "54", "374", "297", "247", "61", "43", "994", "1242", "973", "880", "1246", "375", "32", "501", "229", "1441", "975", "591", "599", "387", "267", "55", "246", "673", "359", "226", "257", "855", "237", "1", "238", "1345", "236", "235", "56", "86", "57", "269", "242", "243", "682", "506", "385", "53", "5999", "357", "420", "45", "253", "1767", "1809", "670", "593", "20", "503", "240", "291", "372", "268", "251", "500", "298", "679", "358", "33", "594", "689", "241", "220", "995", "49", "233", "350", "30", "299", "1473", "590", "1671", "502", "224", "245", "592", "509", "504", "852", "36", "354", "91", "62", "98", "964", "353", "972", "39", "225", "1876", "81", "962", "7", "254", "686", "850", "82", "383", "965", "996", "856", "371", "961", "266", "231", "218", "423", "370", "352", "853", "389", "261", "265", "60", "960", "223", "356", "692", "596", "222", "230", "262", "52", "691", "373", "377", "976", "382", "1664", "212", "258", "95", "264", "674", "977", "31", "687", "64", "505", "227", "234", "683", "672", "1670", "47", "968", "92", "680", "970", "507", "675", "595", "51", "63", "48", "351", "1787", "974", "262", "40", "7", "250", "685", "378", "239", "966", "221", "381", "248", "232", "65", "421", "386", "677", "252", "27", "211", "34", "94", "290", "1869", "1758", "508", "249", "597", "46", "41", "963", "886", "992", "255", "66", "228", "690", "676", "1868", "216", "90", "993", "1649", "688", "256", "380", "971", "44", "1", "598", "998", "678", "39", "58", "84", "1284", "1340", "681", "967", "967", "260", "263"]
  
  const countryNames = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda", "Argentina", "Armenia", "Aruba", "Ascension Island", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bonaire, Saba and Sint Eustatius", "Bosnia Herzegovina", "Botswana", "Brazil", "British Indian Ocean Territory", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde Islands", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Congo, Democratic Republic of the", "Cook Islands", "Costa Rica", "Croatia", "Cuba", "CuraÃ§ao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea - Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea,North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Islands", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "RÃ©union", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", "SÃ£o TomÃ© & Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "St. Helena", "St. Kitts and Nevis", "St. Lucia", "St. Pierre and Miquelon", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikstan", "Tanzania", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks & Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Virgin Islands - British", "Virgin Islands - US", "Wallis & Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"]

  function updateSelectedCountry(e) {
    var y, h, yl;
    var este = e.target
    while (este.tagName.toLowerCase() !== "div"){
      este = este.parentNode
    }
    h = document.getElementById('custom-select-selected')
    h.innerHTML = ""
    const img = este.getElementsByTagName("img")[0]
    const imgClone = img.cloneNode(true)
    h.appendChild(imgClone)
    const indicativo = este.getElementsByTagName("span")[0]
    const indicativoClone = indicativo.cloneNode(true)
    indicativoClone.id = 'indicativo'
    h.appendChild(indicativoClone)
    y = este.parentNode.getElementsByClassName("same-as-selected")
    yl = y.length
    for (let k = 0; k < yl; k++) {
      y[k].removeAttribute("class")
    }
    este.setAttribute("class", "same-as-selected")
    h.click()
  }

  function openCloseSelect(e) {
    e.stopPropagation()
    var este = e.target
    closeAllSelect(este)
    este.nextSibling.classList.toggle("select-hide")
    este.classList.toggle("select-arrow-active")
  }
  
/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect)

  return (
    <>
      <div className='custom-select' id='custom-select-container'>
        <input type="text" name='celular' id='celular' onKeyUp={(e) => func(e)}
          style={
            { 
              width: "calc(90% - 100px)",
              order: "1"
            }
          } 
          placeholder='Celular' autoComplete='off'/>
        <div className='select-selected' id='custom-select-selected' onClick={(e) => openCloseSelect(e)}
          style={
            {
            order: "0"
          }
          }
          > <img src={banderaColombia} className='actualFlag' alt='f'/> <span id='indicativo'>+{areaCodes[countryNames.indexOf("Colombia")]}</span>
        </div>
        <div className='select-items select-hide'>
          {
            countryNames.map((country, index)=> {
              var clase = ""
              if (country === "Colombia") clase = "same-as-selected"
              return( 
                <CountryDataItem key={index} index={index} country={country} countryCodes={countryCodes} areaCodes={areaCodes} clase={clase} func={updateSelectedCountry}/>
              )   
            })
          }
        </div>
      </div>
    </>
  )
}
