class Freelancer extends Funcionario {
    valorPorHora: number;
    horasTrabalhadas: number;
    inicioContrato: Date;
    fimContrato: Date;

    constructor(nome: string, cpf: string, rg: string, valorPorHora: number,
        horasTrabalhadas: number, inicioContrato: Date, fimContrato: Date) {
        super(nome, cpf, rg);
        this.valorPorHora = valorPorHora;
        this.horasTrabalhadas = horasTrabalhadas;
        this.inicioContrato = inicioContrato;
        this.fimContrato = fimContrato;
    }

    contratoAtivo(): boolean {
        const hoje = new Date();
        const fimDoContrato = new Date(this.fimContrato);
        fimDoContrato.setHours(23, 59, 59, 999);
        return hoje >= this.inicioContrato && hoje <= fimDoContrato;
    }

    tempoRestante(): string {
        const diferenca = this.fimContrato.getTime() - new Date().getTime();
        if (diferenca <= 0) return "Contrato encerrado";
        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
        return dias + " dia(s) e " + horas + " hora(s)";
    }
}


