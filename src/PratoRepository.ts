class PratoRepository {
    private pratos: Prato[] = [];

    salvar(prato: Prato): void {
        this.pratos.push({
            nome: prato.nome,
            validade: prato.validade,
            nacionalidade: prato.nacionalidade
        });
    }

    consultarPratos(): void {
        console.log("=== RELATÓRIO DE PRATOS ===");
        for (let i = 0; i < this.pratos.length; i++) {
            const prato = this.pratos[i];
            console.log(prato.nome + " | Validade: " + prato.validade +
                " | Nacionalidade: " + prato.nacionalidade);
        }
    }
}
