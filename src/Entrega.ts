class Entrega {
    dataHoraSaida: string;
    numeroPedido: number;
    endereco: string;

    constructor(dataHoraSaida: string, numeroPedido: number, endereco: string) {
        this.dataHoraSaida = dataHoraSaida;
        this.numeroPedido = numeroPedido;
        this.endereco = endereco;
    }
}
