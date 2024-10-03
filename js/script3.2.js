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
    window.location.href = "http://127.0.0.1:5501/index2.4_p2.html"
}