const p1 = new Pessoa('Valquer', 19, new Date('03/12/2003'));
const pf1 = new PessoaFisica('Valquer', 19, new Date('03/12/2003'), '123.456.789-10');
const pj1 = new PessoaJuridica('Valquer', 19, new Date('03/12/2003'), '123.456.789/0001-10');
console.log('Pessoa: ', p1.nome, p1.idade, p1.dataNascimento);
console.log('Pessoa Física: ', pf1.nome, pf1.idade, pf1.dataNascimento, pf1.cpf);
console.log('Pessoa Jurídica', pj1.nome, pj1.idade, pj1.dataNascimento, pj1.cnpj);
const contaController = new ContaController();
contaController.listar();
