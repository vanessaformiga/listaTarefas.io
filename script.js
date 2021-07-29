const listaUl = document.querySelector('ul')
const inputTarefa = document.querySelector('input')
const inputButton = document.querySelector('button')


const tarefas = JSON.parse(localStorage.getItem('list_tarefas')) || []

function listarTarefas() {

    listaUl.innerHTML = ''

    for (tarefa of tarefas) {


        const criarLista = document.createElement('li')
        const taskTarefa = document.createTextNode(tarefa)

        const elementoLink = document.createElement('a')
        const posicao = tarefas.indexOf(tarefa)

        const inserirX = document.createTextNode('X')
        elementoLink.appendChild(inserirX)

        elementoLink.setAttribute('href', '#')
        elementoLink.setAttribute('onclick', `deletarTarefa(${posicao})`)



        criarLista.addEventListener('click', () => {
            criarLista.classList.toggle('completed')


        })



        criarLista.appendChild(taskTarefa)
        listaUl.appendChild(criarLista)
        criarLista.appendChild(elementoLink)





    }


}


listarTarefas()


function adicionarTarefa() {



    const taskTarefa = inputTarefa.value
    tarefas.push(taskTarefa)
    inputTarefa.value = ''

    listarTarefas()


    salvarNoLocalStorage()



}

inputButton.setAttribute('onclick', 'adicionarTarefa()')

function deletarTarefa(posicao) {
    tarefas.splice(posicao, 1)


    listarTarefas()


    salvarNoLocalStorage()
}



function salvarNoLocalStorage() {
    localStorage.setItem('list_tarefas', JSON.stringify(tarefas))


}