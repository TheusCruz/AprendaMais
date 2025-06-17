const openModal = (valor) => {
    const modalContainer = document.querySelector('.modal-container')
    const h1 = document.querySelector('h1')
    const h6 = document.querySelector('h6')
    const opicao1 = document.querySelector('.opicao1')
    const opicao2 = document.querySelector('.opicao2')
    const texto1 = document.querySelector('.texto1')
    const texro2 = document.querySelector('.texto2')
    modalContainer.classList.add('mostrar')

    modalContainer.addEventListener('click', (e) => {
        if (e.target.id == 'modal-container' || e.target.id == "fechar") {
            modalContainer.classList.remove('mostrar')
            localStorage.fechaModal = 'modal-container'
        }
    })

    if (valor == 1) {
        h1.innerText = 'Resultado da conta:', 
        h6.innerText = 'Juninho foi da festa junina com a Maria, ele tinha 100 reais para gastar, ele acabou comprando 60 reais em comidas, mais depois disso ele ganhou um terço desse valor, logo depois ele compra um presente que custa metade do valor inicial. Quantos reais ira sobrar para Juninho'
        texto1.innerText = '10 reais'
        texro2.innerText = '30 reais'

        opicao1.addEventListener('click', (e) => {
            if (e.target.id == 'modal-container' || e.target.id == "fechar") {
                modalContainer.classList.remove('mostrar')
                localStorage.fechaModal = 'modal-container'
            }
        });

    } else if (valor === '2') {

    } else if (valor === '3') {

    } else if (valor === '4') {

    } else if (valor === '5') {

    } else if (valor === '6') {

    } else if (valor === '7') {

    } else if (valor === '8') {

    } else if (valor === '9') {

    } else if (valor === '10') {

    }
}

function conta() {
    const result = document.getElementById('result')
    const nome = document.getElementById('nome').value

    result.innerText = 'nahcbucavyutdvgysavtyd ', nome, 'tyvveyvtyegtyfvaev'
}