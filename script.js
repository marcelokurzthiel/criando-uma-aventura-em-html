const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoId = 'passo-' + this.getAttribute('data-proximo');

        if (atual) { // Verifica se encontrou o elemento ativo
            atual.classList.remove('ativo');
        }
        
        const proximoElemento = document.getElementById(proximoId);
        if (proximoElemento) {
            proximoElemento.classList.add('ativo');
        }
    })
})