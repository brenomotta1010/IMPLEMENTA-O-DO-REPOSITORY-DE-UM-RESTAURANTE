"use strict";
class Funcionario {
    constructor(nome, cpf, rg) {
        this.nome = nome;
        this.cpf = cpf;
        this.rg = rg;
    }
}
class Contratado extends Funcionario {
    constructor(nome, cpf, rg, salarioFixo) {
        super(nome, cpf, rg);
        this.salarioFixo = salarioFixo;
    }
}
class Freelancer extends Funcionario {
    constructor(nome, cpf, rg, valorPorHora, horasTrabalhadas, inicioContrato, fimContrato) {
        super(nome, cpf, rg);
        this.valorPorHora = valorPorHora;
        this.horasTrabalhadas = horasTrabalhadas;
        this.inicioContrato = inicioContrato;
        this.fimContrato = fimContrato;
    }
    contratoAtivo() {
        const hoje = new Date();
        const fimDoContrato = new Date(this.fimContrato);
        fimDoContrato.setHours(23, 59, 59, 999);
        return hoje >= this.inicioContrato && hoje <= fimDoContrato;
    }
    tempoRestante() {
        const diferenca = this.fimContrato.getTime() - new Date().getTime();
        if (diferenca <= 0)
            return "Contrato encerrado";
        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
        return dias + " dia(s) e " + horas + " hora(s)";
    }
}
class Prato {
    constructor(nome, validade, nacionalidade) {
        this.nome = nome;
        this.validade = validade;
        this.nacionalidade = nacionalidade;
    }
}
class Entrega {
    constructor(dataHoraSaida, numeroPedido, endereco) {
        this.dataHoraSaida = dataHoraSaida;
        this.numeroPedido = numeroPedido;
        this.endereco = endereco;
    }
}
class PratoRepository {
    constructor() {
        this.pratos = [];
    }
    salvar(prato) {
        this.pratos.push({
            nome: prato.nome,
            validade: prato.validade,
            nacionalidade: prato.nacionalidade
        });
    }
    consultarPratos() {
        console.log("=== RELATÓRIO DE PRATOS ===");
        for (let i = 0; i < this.pratos.length; i++) {
            const prato = this.pratos[i];
            console.log(prato.nome + " | Validade: " + prato.validade +
                " | Nacionalidade: " + prato.nacionalidade);
        }
    }
}
class FuncionarioRepository {
    constructor() {
        this.funcionarios = [];
    }
    salvar(funcionario) {
        this.funcionarios.push(funcionario);
    }
    consultarFuncionarios() {
        console.log("=== RELATÓRIO DE FUNCIONÁRIOS ===");
        for (let i = 0; i < this.funcionarios.length; i++) {
            const f = this.funcionarios[i];
            let tipo = "Funcionário";
            if (f instanceof Contratado)
                tipo = "Contratado";
            else if (f instanceof Freelancer)
                tipo = "Freelancer";
            console.log(f.nome + " | Tipo: " + tipo + " | CPF: " + f.cpf + " | RG: " + f.rg);
        }
    }
    consultarTrabalhando() {
        console.log("=== FUNCIONÁRIOS TRABALHANDO ===");
        for (let i = 0; i < this.funcionarios.length; i++) {
            const f = this.funcionarios[i];
            if (f instanceof Contratado)
                console.log(f.nome);
            else if (f instanceof Freelancer && f.contratoAtivo())
                console.log(f.nome);
        }
    }
    consultarSalarios() {
        console.log("=== RELATÓRIO DE SALÁRIOS ===");
        for (let i = 0; i < this.funcionarios.length; i++) {
            const f = this.funcionarios[i];
            if (f instanceof Contratado) {
                console.log(f.nome + " | Contratado | Salário: R$ " + f.salarioFixo.toFixed(2));
            }
            else if (f instanceof Freelancer) {
                const salario = f.valorPorHora * f.horasTrabalhadas;
                console.log(f.nome + " | Freelancer | Salário: R$ " + salario.toFixed(2));
            }
        }
    }
    consultarContratoFreelancer() {
        console.log("=== CONTRATO DO FREELANCER ===");
        for (let i = 0; i < this.funcionarios.length; i++) {
            const f = this.funcionarios[i];
            if (f instanceof Freelancer) {
                console.log("Funcionário: " + f.nome);
                console.log("Contrato ativo: " + (f.contratoAtivo() ? "Sim" : "Não"));
                console.log("Tempo restante: " + f.tempoRestante());
            }
        }
    }
}
class EntregaRepository {
    constructor() {
        this.entregas = [];
    }
    salvar(entrega) {
        this.entregas.push({
            dataHoraSaida: entrega.dataHoraSaida,
            numeroPedido: entrega.numeroPedido,
            endereco: entrega.endereco
        });
    }
    consultarEntregas() {
        console.log("=== RELATÓRIO DE ENTREGAS ===");
        for (let i = 0; i < this.entregas.length; i++) {
            const e = this.entregas[i];
            console.log("Saída: " + e.dataHoraSaida + " | Pedido: " +
                e.numeroPedido + " | Endereço: " + e.endereco);
        }
    }
}
const lasanha = new Prato("Lasanha", "24/10/2026", "Italiana");
const feijoada = new Prato("Feijoada", "22/10/2026", "Brasileira");
const mariana = new Contratado("Mariana Souza", "111.111.111-11", "12.345.678-9", 2800);
const lucas = new Freelancer("Lucas Santos", "222.222.222-22", "23.456.789-0", 35, 80, new Date(2026, 9, 1), new Date(2026, 11, 31));
const entrega1 = new Entrega("20/10/2026, 11:30:00", 1042, "Rua das Flores, 123");
const tabelaPratos = new PratoRepository();
const tabelaFuncionarios = new FuncionarioRepository();
const tabelaEntregas = new EntregaRepository();
tabelaPratos.salvar(lasanha);
tabelaPratos.salvar(feijoada);
tabelaFuncionarios.salvar(mariana);
tabelaFuncionarios.salvar(lucas);
tabelaEntregas.salvar(entrega1);
tabelaPratos.consultarPratos();
tabelaFuncionarios.consultarFuncionarios();
tabelaFuncionarios.consultarTrabalhando();
tabelaFuncionarios.consultarSalarios();
tabelaEntregas.consultarEntregas();
tabelaFuncionarios.consultarContratoFreelancer();
