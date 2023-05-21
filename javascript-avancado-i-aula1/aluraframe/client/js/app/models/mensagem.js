class Mensagem{

    constructor(texto=''){

        this._texto = texto;
    }

    get texto(){

        return this._texto
    }

    set texto(texto){

        return this._texto = texto
    }
}

let mensagem = new Mensagem()