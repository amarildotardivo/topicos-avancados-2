interface IEmpresas {
    nome: string;
    cnpj: string;
}

class Empresas implements IEmpresas {
    nome: string;
    cnpj: string;

    constructor(nome: string, cnpj: string) {
        this.nome = nome;
        this.cnpj = cnpj;
    }
}

export { IEmpresas, Empresas }