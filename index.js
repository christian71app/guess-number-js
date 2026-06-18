// --- Entrada del usuario ---
let nombreUsuario = prompt('¿Cómo te llamas?');
// Pide la edad al usuario con prompt() y guárdala en 'edadUsuario'
let edadUsuario = prompt('¿Cual es tu edad?')

edadUsuario = Number(edadUsuario);


if (edadUsuario >= 18) {
  alert("Puedes votar 🗳️");
} else {
  alert("Aún no puedes votar 🧒");
}


// --- Salida al usuario ---
// Muestra un alert que diga: "Hola [nombre], tienes [edad] años."
// Usa concatenación con + para unir las variables con el texto
alert(`Hola ${nombreUsuario}, tienes ${edadUsuario} años.`);

// --- Verifica en consola ---
console.log('Nombre:', nombreUsuario);
// Imprime la edad y su tipo de dato (usa typeof)
console.log('Edad:', edadUsuario);
console.log(typeof edadUsuario);

// Forma 1: Concatenación con +
let saludo1 = 'Hola ' + nombreUsuario + ', tienes ' + edadUsuario + ' años.';
console.log(saludo1);

// Forma 2: Template literals con `` (backticks)
// Escribe el mismo saludo usando backticks (`) y ${variable}
let saludo2 = `Hola ${nombreUsuario}, tienes ${edadUsuario} años.`
console.log(saludo2);


// 3.4 Aplica lo Aprendido
// --- Calculadora de edad ---
let anioActual = 2026;
let anioNacimiento = anioActual - Number(edadUsuario);

// Completa el mensaje usando template literals:
// Debe decir: "Hola [nombre], naciste aproximadamente en [año]"
let saludo3 = `Hola ${nombreUsuario}, naciste aproximadamente en ${anioNacimiento}`;
console.log(saludo3);


let temperatura = Number(prompt("¿Qué temperatura hace hoy?"));

if (temperatura < 15) {
  alert("Hace frío, ponte abrigo 🧥");
} else if (temperatura <= 25) {
  alert("Clima templado, usa casaca ligera 🧢");
} else {
  alert("Hace calor, usa polo y gorra ☀️");
}

// RETOS
// Reto 1
let clave = prompt("Crea una contraseña:");
if (clave.length >= 6) {
  alert("Contraseña válida ✅");
} else {
  alert("Contraseña muy corta ❌");
}

// Reto 2
if (edadUsuario < 13) {
  alert("Eres un niño 🧒");
} else if (edadUsuario <= 17) {
  alert("Eres un adolescente 👦");
} else {
  alert("Eres un adulto 👨‍🦱");
}

// Reto 3
if (edadUsuario > 18 && temperatura < 15) {
  alert("Adulto con frío: lleva abrigo extra 🧣");
}