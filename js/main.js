const form = document.getElementById('formulario');
let linhas = '';    
//-----

const imgAprovado = `<img src="./images/aprovado.png" alt="emoji feliz" />`;
const imgReprovado = `<img src="./images/reprovado.png" alt="emoji triste" />`;
// --------- Agora, após a limpeza dos campos, a criação de variáveis com as imagens de 'aprovado' e 'reprovado'. E inseração no HTML.
// e é adicionado como uma string. Logo `<img src=..../>` bem como, no TERNÁRIO, a substituição do texto, pelas variáveis IMGs.


const atividade =  [];
const notas = [];           
//ambas as variáveis começam vazias, para receber os valores inseridos pelo usuário.

const spanAprovado =  '<span class = "resultado aprovado">Aprovado</span>';
const spanReprovado =  '<span class= "resultado reprovado">Reprovado</span>';

const mediaMinima = parseFloat(prompt('Média mínima: '));

form.addEventListener('submit', function(e){
    e.preventDefault();  //Previnir que o botão dê reload, limpando os campos.
    
    adicionaLinha(); 
    atualizarTabela();
    calcularmediaFinal();
    atualizarMediaFinal();
})

function adicionaLinha(){
    const inputAtividade = document.getElementById('nome-atividade');
    const inputNota = document.getElementById('nota-atividade');
        // criando variáveis para receber os valores dos inputs

    if (atividade.includes(inputAtividade.value)) {
        alert(`A atividade ${inputAtividade.value} já foi inserida.`)
    } else {
        atividade.push(inputAtividade.value);
        notas.push(parseFloat(inputNota.value));
        //vai adicionar os valores nos arrays criados.

    let linha = `<tr>` + `<td>${inputAtividade.value}</td>` + `<td>${inputNota.value}</td>` + `<td>${inputNota.value >= mediaMinima ? imgAprovado : imgReprovado}</td>` + `</tr>`
        // mensagem resultando na aprovação ou não do aluno de acordo com as notas.
        // na condição, utiliza-se operadores ternários. ?=IF e :=ELSE

//        const corpoTabela = document.querySelector('tbody');
        //recupera o conteúdo  da tabela
//        corpoTabela.innerHTML = linhas;
        // innerHTML adiciona o conteúdo, logo, ...innerHTML = linha; adicionará o conteúdo criado acima (let linha = <tr>..)

        linhas += linha;
    }
        // começa vazia, para que receba o conteúdo após a escrita e o conteúdo, agora, será adicionado, ao invés de 1 linha, todas elas.
        // por isso, ao invés do innerHTML = linha; será innerHTML = linhas, agora, recebe uma vazia + todas as outras. 
        // E aí, a variável linhas, tem de ser no escopo global para não ser resetada.

        inputAtividade.value = '';
        inputNota.value = '';
        // após a escrita na página, os campos recebem o campo vazio '' (simplesmente, limpar os campos.)
}

function atualizarTabela(){
    const corpoTabela = document.querySelector('tbody');
        //recupera o conteúdo  da tabela
        corpoTabela.innerHTML = linhas;
        // innerHTML adiciona o conteúdo, logo, ...innerHTML = linha; adicionará o conteúdo criado acima (let linha = <tr>..)
}

function atualizarMediaFinal(){
    const mediaFinal = calcularmediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= mediaMinima ? spanAprovado : spanReprovado;
}

function calcularmediaFinal (){
    let somaNotas = 0;

    for(let i = 0; i < notas.length; i++) {
        somaNotas += notas[i];
    }

    return somaNotas / notas.length;
}
/*
hardcoded ; conteudo estático, não é nada, além de ilustração para verificação de dados da página, durante a construção. PODEMOS RETIRAR, 
uma vez que já estamos alimentando a tabela.
              <tr>Atividade</tr> 
              <td>7</td>
              <td><span class="resultado reprovado">Aprovado</span></td>
              </tr>

              Após o funcionamento e remoção do tbody, tirando a parte do hardcoded (parte do código inserida afim de teste)

              1. separação de funções
                1.1 function adicionaLinhas();
                1.2 adiciona função no 'submit'
                1.3 criação da função atualizarTabela() e adicionar ao 'submit'

            2. criar arrays para receber os resultados afim de poder calcular as médias.
            2.1 criar variáveis e função para receber os arrays para armazenar as notas dos usuários
              */