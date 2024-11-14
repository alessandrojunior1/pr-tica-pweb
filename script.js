const usuarios = [
    {
    "nome" : "Alessandro",
    "idade": 19,
    "cpf": 123456789101
      
    },
  
    {
     "nome" : "Adiel",
      "idade": 50,
      "cpf": 123456789102
      
    },
  
    {
      "nome" : "Bruno",
       "idade": 29,
       "cpf": 123456789103
      
   },
  
];

const listaDeUsuariosElement = document.createElement('ul');
document.body.appendChild(listaDeUsuariosElement);

usuarios.map((pessoa) => {
    inserirUsuarioNaLista(pessoa.nome,pessoa.idade,pessoa.cpf)
})

function inserirUsuario() {
    const inputNomeElement = document.querySelector('#nome');
    const inputIdadeElement = document.querySelector('#idade');
    const inputCpfElement = document.querySelector('#cpf');
    inserirUsuarioNaLista(inputNomeElement.value,inputIdadeElement.value,inputCpfElement.value);
}

function inserirUsuarioNaLista(nome,idade,cpf) {
    const liElement = document.createElement('li');
    const botaoRemoverElement = document.createElement('button');
    botaoRemoverElement.textContent = 'X';
    botaoRemoverElement.addEventListener('click', (event) => {
        liElement.remove();
    });

    const spanElement = document.createElement('span');
    spanElement.textContent = nome + ' ' + idade + ' '+  cpf + ' '  + ' ';

    spanElement.addEventListener('click', event => {
        const inputElement = document.createElement('input');
        inputElement.value = nome;
        liElement.appendChild(inputElement);
        spanElement.remove();
    });

    liElement.appendChild(spanElement);
    liElement.appendChild(botaoRemoverElement);

    listaDeUsuariosElement.appendChild(liElement);
}
