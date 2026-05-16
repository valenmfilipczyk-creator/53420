import antlr4 from 'antlr4';
import fs from 'fs';

import MiniJSLexer from './MiniJSLexer.js';
import MiniJSParser from './MiniJSParser.js';

import Interpreter from './Interpreter.js';

// Leer input.txt
const input = fs.readFileSync('input.txt', 'utf8');

// Crear lexer
const chars = new antlr4.InputStream(input);
const lexer = new MiniJSLexer(chars);

// Guardar errores léxicos
const erroresLexicos = [];

lexer.removeErrorListeners();
lexer.addErrorListener({
    syntaxError: (recognizer, offendingSymbol, line, column, msg) => {
        erroresLexicos.push({
            linea: line,
            columna: column,
            mensaje: msg
        });
    }
});

// Crear tokens
const tokens = new antlr4.CommonTokenStream(lexer);
tokens.fill();

// Mostrar tabla lexema-token
console.log('==============================');
console.log(' TABLA DE LEXEMAS Y TOKENS');
console.log('==============================');

tokens.tokens.forEach(token => {
    if (token.type !== antlr4.Token.EOF) {
        const nombreToken = MiniJSLexer.symbolicNames[token.type];
        console.log(`${token.text}  -->  ${nombreToken}`);
    }
});

console.log();

// Crear parser
const parser = new MiniJSParser(tokens);
parser.buildParseTrees = true;

// Guardar errores sintácticos
const erroresSintacticos = [];

parser.removeErrorListeners();
parser.addErrorListener({
    syntaxError: (recognizer, offendingSymbol, line, column, msg) => {
        erroresSintacticos.push({
            linea: line,
            columna: column,
            mensaje: msg
        });
    }
});

// Crear árbol
const tree = parser.program();

// Mostrar resultado del análisis
console.log('==============================');
console.log(' ANÁLISIS LÉXICO Y SINTÁCTICO');
console.log('==============================');

if (erroresLexicos.length === 0 && erroresSintacticos.length === 0) {
    console.log('✅ El código es correcto.');
} else {
    console.log('❌ El código contiene errores.');

    erroresLexicos.forEach(error => {
        console.log(`Error léxico en línea ${error.linea}, columna ${error.columna}: ${error.mensaje}`);
    });

    erroresSintacticos.forEach(error => {
        console.log(`Error sintáctico en línea ${error.linea}, columna ${error.columna}: ${error.mensaje}`);
    });

    process.exit(1);
}

console.log();

// Mostrar árbol sintáctico
console.log('==============================');
console.log(' ÁRBOL SINTÁCTICO');
console.log('==============================');
console.log(tree.toStringTree(parser.ruleNames));
console.log();
console.log('==============================');
console.log(' INTERPRETACIÓN');
console.log('==============================');

const interpreter = new Interpreter();

interpreter.visit(tree);