const form = document.getElementById('formulario');
let linhas = '';
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji feliz" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji triste" />';
const atividades = [];
const notas = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela()
})

function adicionaLinha() {
    const inputAtividade = document.getElementById('nome-atividade');
    const inputNota = document.getElementById('nota-atividade');
    
    let linha = `<tr>` + `<td>${inputAtividade.value}</td>` + `<td>inputNota.value</td>` + `<td>${inputNota.value >= 7 ? imgAprovado : imgReprovado}</td>` + `</tr>`;

    atividades.push(inputAtividade.value);
    notas.push(inputNota.value);

    linhas += linha;

inputAtividade.value='';
inputNota.value='';

}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function mediaFinal (){
    console.log(atividades);
    console.log(notas);
}