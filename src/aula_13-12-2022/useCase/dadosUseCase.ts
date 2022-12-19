import { IEmpresas, Empresas } from '../domain/empresas'
import { IRepository } from '../repository/IRepository';
import { IUseCase } from './IUseCase';

class DadosUseCase implements IUseCase {
    repo: IRepository;

    constructor(repo: IRepository) {
        this.repo = repo;
    }

    recuperaDados(): IEmpresas {
        const emp = new Empresas('Empresa Teste', '22.096.028/0001-07');
        return emp;
    }
}

export { DadosUseCase }