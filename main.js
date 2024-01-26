const form = document.getElementById('form-agenda');
const inputNumeroContato = document.getElementById('numero-contato');
const inputNomeContato = document.getElementById('nome-contato');
const spamAdicionado = '<span class="resultado adicionado">Contato adicionado com sucesso!</span>';
const spamExistente = '<span class="resultado falha">Nome ou Numero já cadastrado! Tente novamente.</span>';

let nome = []//variavel nomes
let tel = []//variavel telefone

form.addEventListener('submit', function(e) {
    e.preventDefault();

    addLinha();
});

function numeroTel(telefone){
    if(telefone.length === 11){
        return telefone.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');//Formatando numero para telefone celular
    } else{
        return telefone.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');//Formatando numero para telefone fixo
    }
}

function nomeDoContato(nomes){
    return nomes.charAt(0).toUpperCase() + nomes.slice(1); //Transformando primeira letra do nome em Maiusculo
}

function addLinha() {
    const telefoneFormatado = numeroTel(inputNumeroContato.value)//Constante com valor do telefone formatado
    const nomeFormatado = nomeDoContato(inputNomeContato.value)//Constante com valor do nome formatado
    
    if(nome.includes(nomeFormatado) || tel.includes(telefoneFormatado)){
        document.getElementById('resultado').innerHTML = spamExistente;//Mensagem de erro
    }else {
        const corpoTable = document.querySelector('tbody');
        corpoTable.innerHTML += `
        <tr>
            <td>${nomeFormatado}</td>
            <td>${telefoneFormatado}</td>
        </tr>
        `
    nome.push(nomeFormatado);
    tel.push(telefoneFormatado);

    document.getElementById('resultado').innerHTML = spamAdicionado;//Mensagem de sucesso
    }
    //Zerar input
    inputNumeroContato.value = '';
    inputNomeContato.value = '';
}