// const título = document.querySelector('h1')

// console.log(título)

// título.innerText = 'curso de desenvolvimento JavaScript'

// const novoParagrafo = document.createElement("h2")

// novoParagrafo.innerText = 'Novo paragrafo criado no jS'

// body.append(novoParagrafo)

// novoParagrafo.style.color = 'purple'

// título.style.color = 'blue'

// const nome =      document.querySelector("#nome");
// console.log(nome);

// const sobrenome = document.querySelector("#sobrenome");
// console.log(sobrenome);

// const genero =    document.querySelector("#genero");
// console.log(genero);

// const peso =      document.querySelector("#peso");
// console.log(peso);

// const altura =    document.querySelector("#altura");
// console.log(altura);

const inputPaciente = {
  nome: document.querySelector("#nome"),
  sobrenome: document.querySelector("#sobrenome"),
  genero: document.querySelector("#genero"),
  peso: document.querySelector("#peso"),
  altura: document.querySelector("#altura"),
  imc: "",
};

// inputPaciente.imc = inputPaciente.peso / inputPaciente.altura ** 2;
// console.log(inputPaciente.imc.toFixed(2));

const dados = {
  nome,
  sobrenome,
  genero,
  peso,
  altura,
  imc: "",
};


//seleção de elementos do dom / html
const body = document.querySelector('body')
const botao = document.querySelector("button");
const form = document.querySelector("form");

console.log(botao, form);

function capturaDados() {
  form.addEventListener("submit", (evento) => {
    evento.preventDefault();
   
    //recebe os valores (.value) dos inpusts de entrada fo formulario
    //e salva dentro do objeto dados () const dados - ver linha
    dados.nome = inputPaciente.nome.value;
    dados.sobrenome = inputPaciente.sobrenome.value;
    dados.genero = inputPaciente.genero.value;
    dados.peso = Number(inputPaciente.peso.value);
    dados.altura = Number(inputPaciente.altura.value);

    /*
     dispara a função que irá calcular o imc e envia dentro dela o objeto dados 
     que contém todos os valores dos inputs digitados.
    */
    calcularimc(dados);
  });
}

//função para calcular o imc
// ela recebe os valores de dentro do parenteses (valores)
function calcularimc(valores) {
  //pega o valor da divisão peso quadrado da altura e salva em dados.imc
  dados.imc = valores.peso / valores.altura ** 2;

  console.log(dados.imc);


  //com base no valor do dados.imc, faz a verificação da faixa de peso
  if (dados.imc <= 18.5) {
       inserirResultado(' abaixo do peso ', dados.imc);
  } else if (dados.imc >= 18.6 && dados.imc < 24.9) {
    inserirResultado(' peso normal ', dados.imc);
  } else if (dados.imc >= 24.9 && dados.imc < 29.9) {
      inserirResultado(' sobre peso ', dados.imc);
  } else if (dados.imc >= 29.9 && dados.imc < 34.9) {
    inserirResultado(' esta nivel 1 de obesidade ', dados.imc);
  } else if (dados.imc >= 34.9 && dados.imc < 39.9) {
      inserirResultado(' esta nivel 2 de obesidade ', dados.imc);
  } else {
    inserirResultado(' esta nivel 3 de obesidade ', dados.imc);
}
}
function inserirResultado(faixa, resultado){
   const paragrafo = document.querySelector('#paragrafo')
   
   paragrafo.innerText = ""

   paragrafo.innerText = `imc do paciente: ${resultado} e está com ${faixa}`
}
capturaDados();
