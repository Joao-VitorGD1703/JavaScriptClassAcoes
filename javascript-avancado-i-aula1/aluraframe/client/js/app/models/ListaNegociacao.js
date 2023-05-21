class ListaNegociacao{

    constructor(data, quantidade, valor){

       this._negociacoes = [];
    }

    adiciona(negociacao){

        this._negociacoes.push(negociacao);
    }

    get negociacoes(){

        return [].concat(this._negociacoes);
    }

}