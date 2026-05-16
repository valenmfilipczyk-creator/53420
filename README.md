# Analizador MiniJS con ANTLR4

## Descripción

Este proyecto implementa un analizador léxico, sintáctico e intérprete básico utilizando ANTLR4 y JavaScript.

El sistema procesa una versión reducida del lenguaje JavaScript definida mediante una gramática propia (`MiniJS.g4`).

El analizador permite:

- realizar análisis léxico
- realizar análisis sintáctico
- generar árbol sintáctico
- interpretar instrucciones básicas
- detectar errores sintácticos

---

# Tecnologías utilizadas

- JavaScript
- Node.js
- ANTLR4
- Visual Studio Code

---

# Estructura del proyecto

```text
analizador/
│
├── generated/
├── node_modules/
├── imagenes/
├── MiniJS.g4
├── index.js
├── Interpreter.js
├── package.json
├── input.txt
├── input_correcto1.txt
├── input_correcto2.txt
├── input_incorrecto1.txt
├── input_incorrecto2.txt
└── README.md

// INSTALACION

Instalar dependencias 
    npm start

// GENERACION DEL PARSER Y LEXER

Ejecutar:
    npm run build

// EJECUCIÓN DEL ANALIZADOR

Ejecutar:
    npm start

// ANALISIS LEXICO

El sistema reconoce: 
 - identificadores
 - números
 - operadores
 - palabras reservadas
 - símbolos especiales

 Además genera una tabla de lexemas y tokens
 ![Tokens](imagenes/tokens.png)

 // ANALISIS SINTACTICO

 El sistema verifica si el código cumple la gramática efinida en MiniJS.g4.

 Ademas construye el árbol sintáctico concreto de la entrada 
 ![arbol](imagenes/arbol.png)

 //INTERPRETACION

 El interprete ejecuta instrucciones básicas como:
   - console.log
   - operaciones matemáticas
   - estructuras for
   - declaración de arreglos 

![Output](imagenes/output.png)

// MANEJO DE ERRORES

El sistema detecta errores sintacticos y muestra: 
  - linea 
  - columna
  descripción de error

![Error](imagenes/error.png)

// EJEMPLOS INCLUIDOS

Correctos :
 - input_correccto1.txt
 - input_correcto2.txt

Incorrectos :
 - input_incorrecto1.txt
 - input_incorrecto2.txt

// AUTOR

- Nombre : Valentina Martinez Filipczyk
- Legajo : 53420

