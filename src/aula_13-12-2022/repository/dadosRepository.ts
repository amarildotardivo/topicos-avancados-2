import { IEmpresas } from "../domain/empresas";
import { IRepository } from "./IRepository";

class DadosRepository implements IRepository {
    read() : Array<IEmpresas> {
        const lista = new Array<IEmpresas>();
        return lista;
    }
}

export { DadosRepository }