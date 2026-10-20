class EntregaRepository {
    private entregas: Entrega[] = [];

    salvar(entrega: Entrega): void {
        this.entregas.push({
            dataHoraSaida: entrega.dataHoraSaida,
            numeroPedido: entrega.numeroPedido,
            endereco: entrega.endereco
        });
    }

    consultarEntregas(): void {
        console.log("=== RELATÓRIO DE ENTREGAS ===");
        for (let i = 0; i < this.entregas.length; i++) {
            const e = this.entregas[i];
            console.log("Saída: " + e.dataHoraSaida + " | Pedido: " +
                e.numeroPedido + " | Endereço: " + e.endereco);
        }
    }
}
