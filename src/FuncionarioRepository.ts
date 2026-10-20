class FuncionarioRepository {
    private funcionarios: Funcionario[] = [];

    salvar(funcionario: Funcionario): void {
        this.funcionarios.push(funcionario);
    }

    consultarFuncionarios(): void {
        console.log("=== RELATÓRIO DE FUNCIONÁRIOS ===");
        for (let i = 0; i < this.funcionarios.length; i++) {
            const f = this.funcionarios[i];
            let tipo = "Funcionário";
            if (f instanceof Contratado) tipo = "Contratado";
            else if (f instanceof Freelancer) tipo = "Freelancer";
            console.log(f.nome + " | Tipo: " + tipo + " | CPF: " + f.cpf + " | RG: " + f.rg);
        }
    }

    consultarTrabalhando(): void {
        console.log("=== FUNCIONÁRIOS TRABALHANDO ===");
        for (let i = 0; i < this.funcionarios.length; i++) {
            const f = this.funcionarios[i];
            if (f instanceof Contratado) console.log(f.nome);
            else if (f instanceof Freelancer && f.contratoAtivo()) console.log(f.nome);
        }
    }

    consultarSalarios(): void {
        console.log("=== RELATÓRIO DE SALÁRIOS ===");
        for (let i = 0; i < this.funcionarios.length; i++) {
            const f = this.funcionarios[i];
            if (f instanceof Contratado) {
                console.log(f.nome + " | Contratado | Salário: R$ " + f.salarioFixo.toFixed(2));
            } else if (f instanceof Freelancer) {
                const salario = f.valorPorHora * f.horasTrabalhadas;
                console.log(f.nome + " | Freelancer | Salário: R$ " + salario.toFixed(2));
            }
        }
    }

    consultarContratoFreelancer(): void {
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
