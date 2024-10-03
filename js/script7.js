function myFunction(){
    console.log("Botão foi clicado!")
}
document.addEventListener('DOMContentLoaded', function() {
    var options = document.querySelectorAll('.option');

    options.forEach(function(option) {
        option.addEventListener('click', function() {
            // Remove a classe 'active' de todas as opções
            options.forEach(function(opt) {
                opt.classList.remove('active');
            });
            // Adiciona a classe 'active' à opção clicada
            option.classList.add('active');
        });
    });
});

function exibirResultado(){
    let answers = [];
    let questoes = document.querySelectorAll('.questao-container');
    questoes.forEach(questao => {
        let selectedOption = questao.querySelector('input[type="radio"]:checked');
        if (selectedOption) {
            answers.push(selectedOption.value);
        } else {
            answers.push(null);
        }
    });

    //Mapeamento de respostas para sugestões de profissões
    let profissaMap = {
        "a": "Líder",
        "b": "Analítico",
        "c": "Criativo",
        "d": "Comunicador"
    };

    let sugestaoProfissao = '';
    for (let answer of answers) {
        if (profissaMap[answer]) {
            sugestaoProfissao = profissaMap[answer];
            break;
        }
    }
    // Adicionando logs para verificar o valor da profissão sugerida
    console.log("Respostas: ", answers);
    console.log("Profissão sugerida: ", sugestaoProfissao);

    if (sugestaoProfissao === "Líder") {
        window.location.href = "http://127.0.0.1:5501/indexRI_p4.html";
    } else if (sugestaoProfissao === "Analítico") {
        window.location.href = "http://127.0.0.1:5501/indexRI_p3.html";
    } else if (sugestaoProfissao === "Criativo") {
        window.location.href = "http://127.0.0.1:5501/indexRI_p2.html";
    } else if (sugestaoProfissao === "Comunicador") {
        window.location.href = "http://127.0.0.1:5501/indexRI_p1.html";
    };

    // Verifica se o div resultados existe
    let result = document.getElementById('resultados');
    if (result) {
        // Exibe o resultado
        console.log("Div resultados encontrado");
        result.style.display = 'block';
        result.innerHTML = `<div class="feedback">Profissão Sugerida: ${sugestaoProfissao}</div>`;
    }else{
        console.log("Div resultados não encontrado");
    }
}