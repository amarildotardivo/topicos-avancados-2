class Romanos{
    arabicoRomano;
    constructor(){
        this.arabicoRomano = [
            { arabico:    1, romano: 'I'    },
            { arabico:    2, romano: 'II'   },
            { arabico:    3, romano: 'III'  },
            { arabico:    4, romano: 'IV'   },
            { arabico:    5, romano: 'V'    },
            { arabico:    6, romano: 'VI'   },
            { arabico:    7, romano: 'VII'  },
            { arabico:    8, romano: 'VIII' },
            { arabico:    9, romano: 'IX'   },
            { arabico:   10, romano: 'X'    },
            { arabico:   50, romano: 'L'    },
            { arabico:  100, romano: 'C'    },
            { arabico: 1000, romano: 'M'    },
          ];
    }

    convert(numero: number): string{
        if(numero <= 0){
            throw new Error('Não existe numeros negativos ou zero em algarismo Romano!');
        }

        const search = this.arabicoRomano.find( element => element.arabico == numero )
        const response = search?.romano;

        if(response == undefined){
            throw new Error('Não existe este número em nosso banco de dados!');
        }
        
        return response;
    }

}

export {Romanos} 