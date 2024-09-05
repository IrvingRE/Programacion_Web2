// Función para generar un número aleatorio
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para solicitar al usuario que adivine el número
function solicitarNumero() {
    let numero = parseInt(prompt("Adivina el número (entre 1 y 100):"));
    return numero;
}

// Función para verificar si la adivinanza es correcta
function verificarAdivinanza(numeroAdivinado, numeroSecreto) {
    if (numeroAdivinado === numeroSecreto) {
        return "¡Felicidades! Has adivinado el número.";
    } else if (numeroAdivinado > numeroSecreto) {
        return "El número es menor. Intenta nuevamente.";
    } else {
        return "El número es mayor. Intenta nuevamente.";
    }
}

// Función principal para ejecutar el juego
function jugarAdivinaNumero() {
    let numeroSecreto = generarNumeroAleatorio(1, 100);
    let adivinado = false;
    
    while (!adivinado) {
        let numeroAdivinado = solicitarNumero();
        let mensaje = verificarAdivinanza(numeroAdivinado, numeroSecreto);
        alert(mensaje);
        
        if (numeroAdivinado === numeroSecreto) {
            adivinado = true;
        }
    }
}

// Ejecutar el juego
jugarAdivinaNumero();
