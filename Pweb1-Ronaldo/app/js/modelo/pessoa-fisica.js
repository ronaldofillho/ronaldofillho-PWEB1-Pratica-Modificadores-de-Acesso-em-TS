class PessoaFisica extends Pessoa {
    _cpf;
    constructor(nome, idade, dataNascimento, cpf) {
        super(nome + '- Fisica', idade, dataNascimento);
        this._cpf = cpf;
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(cpf) {
        this._cpf = cpf;
    }
}
