grammar MiniJS;

//PARSER RULES 

program
    : statement* EOF
    ;
statement
    : arrayDeclaration
    | forStatement
    | consoleStatement
    ;
arrayDeclaration
    : LET IDENTIFIER ASSIGN LBRACKET expressionList? RBRACKET SEMI
    ;
forStatement
    : FOR LPAREN assignmentStatement SEMI expression SEMI assignmentStatement RPAREN block
    ;
consoleStatement
    : CONSOLE DOT LOG LPAREN expression RPAREN SEMI
    ;
assignmentStatement
    : IDENTIFIER ASSIGN expression
    ;
block
    : LBRACE statement* RBRACE
    ;
expressionList
    : expression (COMMA expression)*
    ;
expression
    : term ((PLUS | MINUS | MULT | DIV) term)*
    ;
term
    : IDENTIFIER
    | NUMBER
    | LPAREN expression RPAREN
    ;

//LEXER RULES

LET     : 'let' ;
FOR     : 'for' ;
CONSOLE : 'console' ;
LOG     : 'log' ;

ASSIGN   : '=' ;
SEMI     : ';' ;
COMMA    : ',' ;
DOT      : '.' ;

LPAREN    : '(' ;
RPAREN    : ')' ;

LBRACE    : '{' ;
RBRACE    : '}' ;

LBRACKET  : '[' ;
RBRACKET  : ']' ;

PLUS   : '+' ;
MINUS  : '-' ;
MULT   : '*' ;
DIV    : '/' ;

NUMBER  : [0-9]+ ;

IDENTIFIER  : [a-zA-Z_][a-zA-Z0-9_]* ;

WS  : [ \t\r\n]+ -> skip ;