class Contratado extends Funcionario {
    salarioFixo: number;

    constructor(nome: string, cpf: string, rg: string, salarioFixo: number) {
        super(nome, cpf, rg);
        this.salarioFixo = salarioFixo;
    }
}
