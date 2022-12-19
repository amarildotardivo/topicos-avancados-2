import { Dado_Controller } from "../controller/dadosController";
import { DadosRepository } from "../repository/dadosRepository";
import { DadosUseCase } from "../useCase/dadosUseCase";


function criaRepositoryFactory() {
    const repo = new DadosRepository();
    return repo;
}


function criaUseCaseFactory() {
    const repo = criaRepositoryFactory();
    const useCase = new DadosUseCase(repo);
    return useCase;
}

function criaControllerFactory() {
    const usecase = criaUseCaseFactory();
    const controller = new Dado_Controller(usecase);
    return controller;
}

export { criaRepositoryFactory, criaUseCaseFactory , criaControllerFactory }