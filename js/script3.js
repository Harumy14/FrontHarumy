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

function redirect(){
    window.location.href = "http://127.0.0.1:5501/index4_p3.html";
}

let perguntaAtual = 1;
const totalPerguntas = 6;

function proximaPergunta() {
    // Esconde a pergunta atual
    document.getElementById('pergunta' + perguntaAtual).classList.remove('active');

    // Atualiza para a próxima pergunta
    perguntaAtual++;

    // Se chegar na última, volta para a primeira
    if (perguntaAtual > totalPerguntas) {
        perguntaAtual = 1;
    }

    // Mostra a nova pergunta
    document.getElementById('pergunta' + perguntaAtual).classList.add('active');
}