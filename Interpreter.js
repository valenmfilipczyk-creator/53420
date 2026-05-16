export default class Interpreter {
    constructor() {
        this.variables = {};
    }

    visit(ctx) {
        if (!ctx) return null;

        const name = ctx.constructor.name;

        if (name.includes("Program")) {
            for (const st of ctx.statement()) {
                this.visit(st);
            }
        }

        else if (name === "StatementContext") {
            this.visit(ctx.getChild(0));
        }

        else if (name.includes("ArrayDeclaration")) {
            const nombre = ctx.IDENTIFIER().getText();
            const valores = [];

            if (ctx.expressionList()) {
                for (const exp of ctx.expressionList().expression()) {
                    valores.push(this.evaluateExpression(exp));
                }
            }

            this.variables[nombre] = valores;
        }

        else if (name.includes("ForStatement")) {
            this.visit(ctx.assignmentStatement(0));

            while (this.evaluateExpression(ctx.expression()) !== 0) {
                this.visit(ctx.block());
                this.visit(ctx.assignmentStatement(1));
            }
        }

        else if (name.includes("AssignmentStatement")) {
            const nombre = ctx.IDENTIFIER().getText();
            const valor = this.evaluateExpression(ctx.expression());
            this.variables[nombre] = valor;
        }

        else if (name.includes("ConsoleStatement")) {
            const valor = this.evaluateExpression(ctx.expression());
            console.log("OUTPUT:", valor);
        }

        else if (name.includes("Block")) {
            for (const st of ctx.statement()) {
                this.visit(st);
            }
        }
    }

    evaluateExpression(ctx) {
        let resultado = this.evaluateTerm(ctx.term(0));

        for (let i = 1; i < ctx.term().length; i++) {
            const operador = ctx.getChild((i * 2) - 1).getText();
            const valor = this.evaluateTerm(ctx.term(i));

            if (operador === '+') resultado += valor;
            if (operador === '-') resultado -= valor;
            if (operador === '*') resultado *= valor;
            if (operador === '/') resultado /= valor;
        }

        return resultado;
    }

    evaluateTerm(ctx) {
        if (ctx.NUMBER()) {
            return Number(ctx.NUMBER().getText());
        }

        if (ctx.IDENTIFIER()) {
            const nombre = ctx.IDENTIFIER().getText();
            return this.variables[nombre];
        }

        if (ctx.expression()) {
            return this.evaluateExpression(ctx.expression());
        }

        return null;
    }
}