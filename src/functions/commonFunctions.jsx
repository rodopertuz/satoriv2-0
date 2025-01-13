export function validarEmail(email) {
    return email.match(/^\S+@\S+\.\S+$/);
};

export function tipoTitulo(str) {
    return str.replace(
        /\w\S*/g,
        text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase())
}

export function separadorCelular(evento){
    if (evento.key !== "Backspace"){
        var valor1 = evento.target.value
        
        valor1 = quitarSeparadorMiles(valor1)
        let result = ""
        if ((valor1.length >3)){
            let b = valor1.length;
            result = '(' + valor1.slice(0,3) + ')';
            result += " " + valor1.slice(3,b);
        } else {
            result = valor1;
        }

        if (valor1.length > 7){
            result = result.slice(0,9);
            result += " " + valor1.slice(6);
        }

        if (valor1.length >10){
            var tope = parseInt(0.5 + (valor1.length - 10)/2);
            var a = result;
            a = a.slice(0,-(2*tope));
            var b = result.slice(-(2*tope));
            b = b.match(/.{1,2}/g);
            result = a + " " + b.join(" ");
        }

        evento.target.value = result;
    }
}

export function quitarSeparadorMiles(valor) {
    valor = valor.trim()
    valor = valor.replace(/\D/g,'')
    return valor
}