// Generated from MiniJS.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import MiniJSVisitor from './MiniJSVisitor.js';

const serializedATN = [4,1,21,99,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,5,0,22,8,0,10,0,12,0,25,9,0,
1,0,1,0,1,1,1,1,1,1,3,1,32,8,1,1,2,1,2,1,2,1,2,1,2,3,2,39,8,2,1,2,1,2,1,
2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,
4,1,5,1,5,1,5,1,5,1,6,1,6,5,6,68,8,6,10,6,12,6,71,9,6,1,6,1,6,1,7,1,7,1,
7,5,7,78,8,7,10,7,12,7,81,9,7,1,8,1,8,1,8,5,8,86,8,8,10,8,12,8,89,9,8,1,
9,1,9,1,9,1,9,1,9,1,9,3,9,97,8,9,1,9,0,0,10,0,2,4,6,8,10,12,14,16,18,0,1,
1,0,15,18,97,0,23,1,0,0,0,2,31,1,0,0,0,4,33,1,0,0,0,6,43,1,0,0,0,8,53,1,
0,0,0,10,61,1,0,0,0,12,65,1,0,0,0,14,74,1,0,0,0,16,82,1,0,0,0,18,96,1,0,
0,0,20,22,3,2,1,0,21,20,1,0,0,0,22,25,1,0,0,0,23,21,1,0,0,0,23,24,1,0,0,
0,24,26,1,0,0,0,25,23,1,0,0,0,26,27,5,0,0,1,27,1,1,0,0,0,28,32,3,4,2,0,29,
32,3,6,3,0,30,32,3,8,4,0,31,28,1,0,0,0,31,29,1,0,0,0,31,30,1,0,0,0,32,3,
1,0,0,0,33,34,5,1,0,0,34,35,5,20,0,0,35,36,5,5,0,0,36,38,5,13,0,0,37,39,
3,14,7,0,38,37,1,0,0,0,38,39,1,0,0,0,39,40,1,0,0,0,40,41,5,14,0,0,41,42,
5,6,0,0,42,5,1,0,0,0,43,44,5,2,0,0,44,45,5,9,0,0,45,46,3,10,5,0,46,47,5,
6,0,0,47,48,3,16,8,0,48,49,5,6,0,0,49,50,3,10,5,0,50,51,5,10,0,0,51,52,3,
12,6,0,52,7,1,0,0,0,53,54,5,3,0,0,54,55,5,8,0,0,55,56,5,4,0,0,56,57,5,9,
0,0,57,58,3,16,8,0,58,59,5,10,0,0,59,60,5,6,0,0,60,9,1,0,0,0,61,62,5,20,
0,0,62,63,5,5,0,0,63,64,3,16,8,0,64,11,1,0,0,0,65,69,5,11,0,0,66,68,3,2,
1,0,67,66,1,0,0,0,68,71,1,0,0,0,69,67,1,0,0,0,69,70,1,0,0,0,70,72,1,0,0,
0,71,69,1,0,0,0,72,73,5,12,0,0,73,13,1,0,0,0,74,79,3,16,8,0,75,76,5,7,0,
0,76,78,3,16,8,0,77,75,1,0,0,0,78,81,1,0,0,0,79,77,1,0,0,0,79,80,1,0,0,0,
80,15,1,0,0,0,81,79,1,0,0,0,82,87,3,18,9,0,83,84,7,0,0,0,84,86,3,18,9,0,
85,83,1,0,0,0,86,89,1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,0,88,17,1,0,0,0,89,
87,1,0,0,0,90,97,5,20,0,0,91,97,5,19,0,0,92,93,5,9,0,0,93,94,3,16,8,0,94,
95,5,10,0,0,95,97,1,0,0,0,96,90,1,0,0,0,96,91,1,0,0,0,96,92,1,0,0,0,97,19,
1,0,0,0,7,23,31,38,69,79,87,96];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiniJSParser extends antlr4.Parser {

    static grammarFileName = "MiniJS.g4";
    static literalNames = [ null, "'let'", "'for'", "'console'", "'log'", 
                            "'='", "';'", "','", "'.'", "'('", "')'", "'{'", 
                            "'}'", "'['", "']'", "'+'", "'-'", "'*'", "'/'" ];
    static symbolicNames = [ null, "LET", "FOR", "CONSOLE", "LOG", "ASSIGN", 
                             "SEMI", "COMMA", "DOT", "LPAREN", "RPAREN", 
                             "LBRACE", "RBRACE", "LBRACKET", "RBRACKET", 
                             "PLUS", "MINUS", "MULT", "DIV", "NUMBER", "IDENTIFIER", 
                             "WS" ];
    static ruleNames = [ "program", "statement", "arrayDeclaration", "forStatement", 
                         "consoleStatement", "assignmentStatement", "block", 
                         "expressionList", "expression", "term" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MiniJSParser.ruleNames;
        this.literalNames = MiniJSParser.literalNames;
        this.symbolicNames = MiniJSParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MiniJSParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 14) !== 0)) {
	            this.state = 20;
	            this.statement();
	            this.state = 25;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 26;
	        this.match(MiniJSParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MiniJSParser.RULE_statement);
	    try {
	        this.state = 31;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 28;
	            this.arrayDeclaration();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 29;
	            this.forStatement();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 30;
	            this.consoleStatement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arrayDeclaration() {
	    let localctx = new ArrayDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MiniJSParser.RULE_arrayDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.match(MiniJSParser.LET);
	        this.state = 34;
	        this.match(MiniJSParser.IDENTIFIER);
	        this.state = 35;
	        this.match(MiniJSParser.ASSIGN);
	        this.state = 36;
	        this.match(MiniJSParser.LBRACKET);
	        this.state = 38;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1573376) !== 0)) {
	            this.state = 37;
	            this.expressionList();
	        }

	        this.state = 40;
	        this.match(MiniJSParser.RBRACKET);
	        this.state = 41;
	        this.match(MiniJSParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	forStatement() {
	    let localctx = new ForStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MiniJSParser.RULE_forStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.match(MiniJSParser.FOR);
	        this.state = 44;
	        this.match(MiniJSParser.LPAREN);
	        this.state = 45;
	        this.assignmentStatement();
	        this.state = 46;
	        this.match(MiniJSParser.SEMI);
	        this.state = 47;
	        this.expression();
	        this.state = 48;
	        this.match(MiniJSParser.SEMI);
	        this.state = 49;
	        this.assignmentStatement();
	        this.state = 50;
	        this.match(MiniJSParser.RPAREN);
	        this.state = 51;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	consoleStatement() {
	    let localctx = new ConsoleStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MiniJSParser.RULE_consoleStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.match(MiniJSParser.CONSOLE);
	        this.state = 54;
	        this.match(MiniJSParser.DOT);
	        this.state = 55;
	        this.match(MiniJSParser.LOG);
	        this.state = 56;
	        this.match(MiniJSParser.LPAREN);
	        this.state = 57;
	        this.expression();
	        this.state = 58;
	        this.match(MiniJSParser.RPAREN);
	        this.state = 59;
	        this.match(MiniJSParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignmentStatement() {
	    let localctx = new AssignmentStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MiniJSParser.RULE_assignmentStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.match(MiniJSParser.IDENTIFIER);
	        this.state = 62;
	        this.match(MiniJSParser.ASSIGN);
	        this.state = 63;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MiniJSParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(MiniJSParser.LBRACE);
	        this.state = 69;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 14) !== 0)) {
	            this.state = 66;
	            this.statement();
	            this.state = 71;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 72;
	        this.match(MiniJSParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expressionList() {
	    let localctx = new ExpressionListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MiniJSParser.RULE_expressionList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.expression();
	        this.state = 79;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 75;
	            this.match(MiniJSParser.COMMA);
	            this.state = 76;
	            this.expression();
	            this.state = 81;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MiniJSParser.RULE_expression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.term();
	        this.state = 87;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 491520) !== 0)) {
	            this.state = 83;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 491520) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 84;
	            this.term();
	            this.state = 89;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, MiniJSParser.RULE_term);
	    try {
	        this.state = 96;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 20:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 90;
	            this.match(MiniJSParser.IDENTIFIER);
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 91;
	            this.match(MiniJSParser.NUMBER);
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 92;
	            this.match(MiniJSParser.LPAREN);
	            this.state = 93;
	            this.expression();
	            this.state = 94;
	            this.match(MiniJSParser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MiniJSParser.EOF = antlr4.Token.EOF;
MiniJSParser.LET = 1;
MiniJSParser.FOR = 2;
MiniJSParser.CONSOLE = 3;
MiniJSParser.LOG = 4;
MiniJSParser.ASSIGN = 5;
MiniJSParser.SEMI = 6;
MiniJSParser.COMMA = 7;
MiniJSParser.DOT = 8;
MiniJSParser.LPAREN = 9;
MiniJSParser.RPAREN = 10;
MiniJSParser.LBRACE = 11;
MiniJSParser.RBRACE = 12;
MiniJSParser.LBRACKET = 13;
MiniJSParser.RBRACKET = 14;
MiniJSParser.PLUS = 15;
MiniJSParser.MINUS = 16;
MiniJSParser.MULT = 17;
MiniJSParser.DIV = 18;
MiniJSParser.NUMBER = 19;
MiniJSParser.IDENTIFIER = 20;
MiniJSParser.WS = 21;

MiniJSParser.RULE_program = 0;
MiniJSParser.RULE_statement = 1;
MiniJSParser.RULE_arrayDeclaration = 2;
MiniJSParser.RULE_forStatement = 3;
MiniJSParser.RULE_consoleStatement = 4;
MiniJSParser.RULE_assignmentStatement = 5;
MiniJSParser.RULE_block = 6;
MiniJSParser.RULE_expressionList = 7;
MiniJSParser.RULE_expression = 8;
MiniJSParser.RULE_term = 9;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJSParser.RULE_program;
    }

	EOF() {
	    return this.getToken(MiniJSParser.EOF, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof MiniJSVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJSParser.RULE_statement;
    }

	arrayDeclaration() {
	    return this.getTypedRuleContext(ArrayDeclarationContext,0);
	};

	forStatement() {
	    return this.getTypedRuleContext(ForStatementContext,0);
	};

	consoleStatement() {
	    return this.getTypedRuleContext(ConsoleStatementContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof MiniJSVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArrayDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJSParser.RULE_arrayDeclaration;
    }

	LET() {
	    return this.getToken(MiniJSParser.LET, 0);
	};

	IDENTIFIER() {
	    return this.getToken(MiniJSParser.IDENTIFIER, 0);
	};

	ASSIGN() {
	    return this.getToken(MiniJSParser.ASSIGN, 0);
	};

	LBRACKET() {
	    return this.getToken(MiniJSParser.LBRACKET, 0);
	};

	RBRACKET() {
	    return this.getToken(MiniJSParser.RBRACKET, 0);
	};

	SEMI() {
	    return this.getToken(MiniJSParser.SEMI, 0);
	};

	expressionList() {
	    return this.getTypedRuleContext(ExpressionListContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof MiniJSVisitor ) {
	        return visitor.visitArrayDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ForStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJSParser.RULE_forStatement;
    }

	FOR() {
	    return this.getToken(MiniJSParser.FOR, 0);
	};

	LPAREN() {
	    return this.getToken(MiniJSParser.LPAREN, 0);
	};

	assignmentStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AssignmentStatementContext);
	    } else {
	        return this.getTypedRuleContext(AssignmentStatementContext,i);
	    }
	};

	SEMI = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniJSParser.SEMI);
	    } else {
	        return this.getToken(MiniJSParser.SEMI, i);
	    }
	};


	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(MiniJSParser.RPAREN, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof MiniJSVisitor ) {
	        return visitor.visitForStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConsoleStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJSParser.RULE_consoleStatement;
    }

	CONSOLE() {
	    return this.getToken(MiniJSParser.CONSOLE, 0);
	};

	DOT() {
	    return this.getToken(MiniJSParser.DOT, 0);
	};

	LOG() {
	    return this.getToken(MiniJSParser.LOG, 0);
	};

	LPAREN() {
	    return this.getToken(MiniJSParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(MiniJSParser.RPAREN, 0);
	};

	SEMI() {
	    return this.getToken(MiniJSParser.SEMI, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MiniJSVisitor ) {
	        return visitor.visitConsoleStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJSParser.RULE_assignmentStatement;
    }

	IDENTIFIER() {
	    return this.getToken(MiniJSParser.IDENTIFIER, 0);
	};

	ASSIGN() {
	    return this.getToken(MiniJSParser.ASSIGN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof MiniJSVisitor ) {
	        return visitor.visitAssignmentStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJSParser.RULE_block;
    }

	LBRACE() {
	    return this.getToken(MiniJSParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(MiniJSParser.RBRACE, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof MiniJSVisitor ) {
	        return visitor.visitBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJSParser.RULE_expressionList;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniJSParser.COMMA);
	    } else {
	        return this.getToken(MiniJSParser.COMMA, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof MiniJSVisitor ) {
	        return visitor.visitExpressionList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJSParser.RULE_expression;
    }

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	PLUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniJSParser.PLUS);
	    } else {
	        return this.getToken(MiniJSParser.PLUS, i);
	    }
	};


	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniJSParser.MINUS);
	    } else {
	        return this.getToken(MiniJSParser.MINUS, i);
	    }
	};


	MULT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniJSParser.MULT);
	    } else {
	        return this.getToken(MiniJSParser.MULT, i);
	    }
	};


	DIV = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniJSParser.DIV);
	    } else {
	        return this.getToken(MiniJSParser.DIV, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof MiniJSVisitor ) {
	        return visitor.visitExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJSParser.RULE_term;
    }

	IDENTIFIER() {
	    return this.getToken(MiniJSParser.IDENTIFIER, 0);
	};

	NUMBER() {
	    return this.getToken(MiniJSParser.NUMBER, 0);
	};

	LPAREN() {
	    return this.getToken(MiniJSParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(MiniJSParser.RPAREN, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MiniJSVisitor ) {
	        return visitor.visitTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MiniJSParser.ProgramContext = ProgramContext; 
MiniJSParser.StatementContext = StatementContext; 
MiniJSParser.ArrayDeclarationContext = ArrayDeclarationContext; 
MiniJSParser.ForStatementContext = ForStatementContext; 
MiniJSParser.ConsoleStatementContext = ConsoleStatementContext; 
MiniJSParser.AssignmentStatementContext = AssignmentStatementContext; 
MiniJSParser.BlockContext = BlockContext; 
MiniJSParser.ExpressionListContext = ExpressionListContext; 
MiniJSParser.ExpressionContext = ExpressionContext; 
MiniJSParser.TermContext = TermContext; 
