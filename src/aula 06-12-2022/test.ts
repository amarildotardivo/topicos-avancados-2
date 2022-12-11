import {Romanos} from './romanos';

describe('Conversão para números romanos by Amarildo Jr', () => {
    test('1 should be converted for I', () => {
        //arrange
        const sut = new Romanos();
        //act
        const retorno = sut.convert(1);
        //assert
        expect(retorno).toEqual('I');
    });

    test('2 should be converted for II', () => {
        //arrange
        const sut = new Romanos();
        //act
        const retorno = sut.convert(2);
        //assert
        expect(retorno).toEqual('II');
    });

    test('10 should be converted for X', () => {
        //arrange
        const sut = new Romanos();
        //act
        const retorno = sut.convert(10);
        //assert
        expect(retorno).toEqual('X');
    });

    test('1000 should be converted for M', () => {
        //arrange
        const sut = new Romanos();
        //act
        const retorno = sut.convert(10);
        //assert
        expect(retorno).toEqual('X');
    });

    test ("-1 should be message error", () => {
        //configuração
        const sut = new Romanos();
        //ação
        const retorno = () => {sut.convert(-1) };
        //expectativa
        expect(retorno).toThrow(new Error("Não existe numeros negativos ou zero em algarismo Romano!"));
    });

    test ("0 should be message error", () => {
        //configuração
        const sut = new Romanos();
        //ação
        const retorno = () => {sut.convert(0) };
        //expectativa
        expect(retorno).toThrow(new Error("Não existe numeros negativos ou zero em algarismo Romano!"));
    });

    test ("1500 should be message error", () => {
        //configuração
        const sut = new Romanos();
        //ação
        const retorno = () => {sut.convert(1500) };
        //expectativa
        expect(retorno).toThrow(new Error("Não existe este número em nosso banco de dados!"));
    });
});