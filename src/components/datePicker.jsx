import { DayPicker, defaultLocale } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import '../style/datePicker.css'

function Datepicker({selected, setSelected}) {

const WEEKDAYS_SHORT = {
    es: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"]
}

const MONTHS = {
    es: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
}

// const WEEKDAYS_LONG = {
//     es: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// }

  return (
    <DayPicker
      mode="single"
      required
      selected={selected}
      onSelect={setSelected}
      locale={{
        localize: {
          ...defaultLocale.localize, day: (day) => WEEKDAYS_SHORT.es[day], month: (month) => MONTHS.es[month],  
        }
      }}
    />
  );
}

export default Datepicker