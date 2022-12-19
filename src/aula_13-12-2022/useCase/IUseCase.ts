import { IEmpresas } from "../domain/empresas"

interface IUseCase {
    recuperaDados(): IEmpresas;
}

export { IUseCase }