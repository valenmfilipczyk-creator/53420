# Analizador MiniJS

## Descripción

Este proyecto implementa un analizador léxico, sintáctico e intérprete básico utilizando ANTLR4 y JavaScript.

El sistema procesa una versión reducida del lenguaje JavaScript definida mediante una gramática propia (MiniJS.g4).

# Autor

Nombre : Valentina Martinez Filipczyk
Legajo : 53420

# Estructura del proyecto

```txt
ANALIZADOR/
├── generated/
├── imagenes/
├── index.js
├── Interpreter.js
├── MiniJS.g4
├── MiniJSLexer.js
├── MiniJSParser.js
├── MiniJSVisitor.js
├── input_correcto1.txt
├── input_correcto2.txt
├── input_incorrecto1.txt
├── input_incorrecto2.txt
├── package.json
├── package-lock.json
└── README.md
```

# INSTALACION

Instalar dependencias:

```bash
npm install
```

# GENERACION DEL PARSER Y LEXER

Ejecutar:

```bash
npm run build
```

# EJECUCION DEL ANALIZADOR

Ejecutar:

```bash
npm start
```

# EJEMPLOS INCLUIDOS

El proyecto incluye ejemplos de entrada correctos e incorrectos

## Inputs correctos

- input_correcto1.txt
- input_correcto2.txt

## Inputs incorrectos

- input_incorrecto1.txt
- input_incorrecto2.txt



# ANALISIS LEXICO

El sistema reconoce:

- identificadores
- números
- operadores
- palabras reservadas
- símbolos especiales

Además genera una tabla de lexemas y tokens.

![Tokens](imagenes/tokens.png)

# ANALISIS SINTACTICO

El sistema verifica si el código cumple la gramática definida en MiniJS.g4.

Además construye el árbol sintáctico concreto de la entrada.

![Arbol](imagenes/arbol.png)

# INTERPRETACION

El intérprete ejecuta instrucciones básicas como:

- console.log
- operaciones matemáticas
- estructuras for
- declaración de arreglos

![Output](imagenes/output.png)

# MANEJO DE ERRORES

El sistema detecta errores léxicos y sintácticos mostrando mensajes descriptivos.

![Errores](imagenes/error.png)

# TECNOLOGIAS UTILIZADAS

- JavaScript
- Node.js
- ANTLR4
- Visual Studio Code