class NegociacaoController {


    constructor() {

        let $ = document.querySelector.bind(document);

        this._inputData = $("#data")
        this._inputQuantidade = $("#quantidade")
        this._inputValor = $("#valor")
        this._listaDeNegociacoes = new ListaNegociacao()
        this._negociacoesView = new NegociacoesView($('#negociacoesView'))

        this._negociacoesView.update(this._listaDeNegociacoes)
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#MensagemView'));
        this._mensagemView.update(this.mensagem)

    }

    adicionar(event) {

        event.preventDefault()

        this._listaDeNegociacoes.adiciona(this._criaNegociacao())
        this._mensagem.texto = 'Negociação adicionada com sucesso'
        this._mensagemView.update(this.mensagem)

        this._limpaFormulario();
        this._negociacoesView.update(this._listaDeNegociacoes)
        this.ListaNegociacao.negociacoes.length = 0;
        console.log(this._listaDeNegociacoes.negociacoes);


    }

    apaga(){

        this._listaDeNegociacoes.esvazia();
        this._negociacoesView.update(this._listaDeNegociacoes)

        this._mensagem.texto = 'Negociaçoes apagadas com sucesso'
        this._mensagemView.update(this._mensagem);
    }

    _criaNegociacao() {

        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value)

    }

    _limpaFormulario() {
        this._inputData.value = " ";
        this._inputQuantidade.value = 0.0;
        this._inputValor.value = 0.0

        this._inputData.focus()
    }
}