const lasanha = new Prato("Lasanha", "24/10/2026", "Italiana");
const feijoada = new Prato("Feijoada", "22/10/2026", "Brasileira");

const mariana = new Contratado("Mariana Souza", "111.111.111-11", "12.345.678-9", 2800);
const lucas = new Freelancer(
    "Lucas Santos", "222.222.222-22", "23.456.789-0", 35, 80,
    new Date(2026, 9, 1), new Date(2026, 11, 31)
);

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
