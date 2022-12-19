import { IEmpresas } from "../domain/empresas";

interface IRepository {
    read(): Array<IEmpresas>;
}

export { IRepository }