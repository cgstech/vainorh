window.addEventListener("scroll", function(){
    let boxHeader = document.querySelector('#header');

    boxHeader.classList.toggle('rolagem', window.scrollY > 0)
})


const ctBtn = document.querySelector(".ct-btn");
const linksMenu = document.querySelector("nav");
const botaoMenu = document.querySelector("#btnMenu");


ctBtn.addEventListener("click", function(event){
    event.preventDefault();
    linksMenu.classList.toggle("show")
    
})



function atualizarFormulario() {
    const tipoAtestado = document.getElementById('tipoAtestado').value;
    const campoCid = document.getElementById('campoCid');
    const campoMedico = document.getElementById('campoMedico');
    const campoParentesco = document.getElementById('campoParentesco');
    const campoHora = document.getElementById('campoHora');

    // Resetar visibilidade
    campoCid.style.display = 'none';
    campoMedico.style.display = 'none';
    campoParentesco.style.display = 'none';
    campoHora.style.display = 'none';

    // Adaptar o formulário conforme o tipo selecionado
    if (tipoAtestado === 'dias') {
        campoCid.style.display = 'flex';
        campoMedico.style.display = 'flex';
    } else if (tipoAtestado === 'horas') {
        campoCid.style.display = 'flex';
        campoMedico.style.display = 'flex';
        campoHora.style.display = 'flex';
    } else if (tipoAtestado === 'declaracao') {
        campoParentesco.style.display = 'flex';
    }
}





    document.addEventListener("DOMContentLoaded", function () {
        const cards = document.querySelectorAll(".scroll-card");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show'); // Remove se quiser o efeito quando rolar para fora
                }
            });
        }, {
            threshold: 0.1, // Define quando a animação começa (0.1 significa que 10% do card precisa estar visível)
        });

        cards.forEach(card => {
            observer.observe(card);
        });
    });

    
    function filterAtestados() {
        const nomeInput = document.getElementById('buscar_nome').value.toLowerCase();
        const dataInput = document.getElementById('buscar_data').value;
        const statusInput = document.getElementById('buscar_status').value.toLowerCase();

        const atestados = document.querySelectorAll('.cc');

        atestados.forEach(atestado => {
            const name = atestado.querySelector('ul li:nth-child(1)').textContent.toLowerCase();
            const date = atestado.querySelector('ul li:nth-child(3)').textContent;
            const status = atestado.querySelector('ul li.sts').textContent.toLowerCase();

            // Verificar se o atestado corresponde aos filtros
            const matchesNome = name.includes(nomeInput);
            const matchesData = dataInput ? date === dataInput : true; // Se houver data, deve coincidir
            const matchesStatus = statusInput ? status === statusInput : true; // Se houver status, deve coincidir

            // Mostrar ou ocultar o atestado baseado nos filtros
            if (matchesNome && matchesData && matchesStatus) {
                atestado.style.display = '';  // Mostrar
            } else {
                atestado.style.display = 'none';  // Ocultar
            }
        });
    }



