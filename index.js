// 2.1 Variables y Tipos
// --- Variables con let (pueden cambiar) ---
let nombre = 'Christian Denner Tineo Villón';
// Declara una variable 'edad' con tu edad real (usa let)
let edad = 22;
// Declara una variable 'estaAprendiendo' con valor true (usa let)
let estoyAprendiendo = true;

// --- Imprime cada variable ---
console.log(nombre);
// Imprime las otras dos variables que declaraste
console.log(edad);
console.log(estoyAprendiendo);

// --- Verifica los tipos de dato ---
console.log(typeof nombre);       // string
// Usa typeof para verificar el tipo de 'edad' y 'estaAprendiendo'
// ¿Qué esperas que diga? Escríbelo en un comentario antes de ejecutar
console.log(typeof edad);                   // number
console.log(typeof estoyAprendiendo);       // boolean


// 2.2 Variables con const
// --- Variables con const (no pueden cambiar) ---
const curso = 'Code 101';
// Declara una constante 'maxIntentos' con valor 10
const maxIntentos = 10;

// Imprime ambas constantes con console.log()
console.log(curso);
console.log(maxIntentos);

// Descomenta la siguiente línea y observa qué pasa:
// maxIntentos = 20;  // index.js:32 Uncaught TypeError: Assignment to constant variable.


// 2.3 Interacción con el Usuario
// --- Entrada del usuario ---
let nombreUsuario = prompt('¿Cómo te llamas?');
// Pide la edad al usuario con prompt() y guárdala en 'edadUsuario'
let edadUsuario = prompt('¿Cual es tu edad?')

// --- Salida al usuario ---
// Muestra un alert que diga: "Hola [nombre], tienes [edad] años."
// Usa concatenación con + para unir las variables con el texto
alert(`Hola ${nombreUsuario}, tienes ${edadUsuario} años.`);

// --- Verifica en consola ---
console.log('Nombre:', nombreUsuario);
// Imprime la edad y su tipo de dato (usa typeof)
console.log('Edad:', edadUsuario);
console.log(typeof edadUsuario);

// Pregúntate: ¿por qué el tipo no es "number"?
// Porque prompt() siempre va a devolver un string.



// 3.1 Operadores Aritméticos
// --- Operadores aritméticos ---
let a = 20;
let b = 7;

console.log('Suma:', a + b);        // 27
console.log('Resta:', a - b);       // 13
// Completa las 3 operaciones que faltan:
// - Multiplicación (usa *)
console.log('Multiplicación: ', a * b);

// - División (usa /)
console.log('División: ', a / b);

// - Módulo (usa % — devuelve el residuo de la división)
console.log('Módulo: ', a % b);


// 3.2 Cuidado con los Strings y Números
// --- ¿Qué resultado esperas? ---
console.log('5' + 3);    // ¿53 o 8? '53'
console.log(5 + 3);      // ¿53 o 8? 8
console.log('5' - 3);    // ¿Qué pasa aquí? 2


// 3.3 Concatenación vs Template Literals
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
