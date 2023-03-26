class PessoaJuridica extends Pessoa {
    _cnpj;
    constructor(nome, idade, dataNascimento, cnpj) {
        super(nome + '- Juridica', idade, dataNascimento);
        this._cnpj = cnpj;
    }
    get cnpj() {
        return this._cnpj;
    }
    set cnpj(cnpj) {
        this._cnpj = cnpj;
    }
}
