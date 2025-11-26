const paciente = {
  nome: "yago",
  sobrenome: "oirato",
  genero: "masculino",
  peso: 77,
  altura: 1.76,
  imc: "",
};

paciente.imc = paciente.peso / paciente.altura ** 2;
console.log(paciente.imc.toFixed(2));

if (paciente.imc <= 18.5) {
  console.log(
    paciente.nome +
      ` seu peso esta a baixo do ideal seu imc é ` +
      paciente.imc.toFixed(2)
  );
} else if (paciente.imc >= 18.6 && paciente.imc < 24.9) {
  console.log(
    paciente.nome +
      ` seu peso normal seu imc é ` +
      paciente.imc.toFixed(2)
  );
} else if (paciente.imc >= 24.9 && paciente.imc < 29.9) {
  console.log(
    paciente.nome +
      ` você tem execesso de peso seu imc é ` +
      paciente.imc.toFixed(2)
  );
} else if (paciente.imc >= 29.9 && paciente.imc < 34.9) {
  console.log(
    paciente.nome +
      ` você obesidade classe 1 seu imc é ` +
      paciente.imc.toFixed(2)
  );
} else if (paciente.imc >= 34.9 && paciente.imc < 39.9) {
  console.log(
    paciente.nome +
      ` você obesidade classe 2 seu imc é ` +
      paciente.imc.toFixed(2)
  );
} else {
  console.log(
    paciente.nome +
      ` você obesidade classe 3 seu imc é ` +
      paciente.imc.toFixed(2)
  );
}

// const título = document.querySelector('h1')

// const body = document.querySelector('body')

// console.log(título)

// título.innerText = 'curso de desenvolvimento JavaScript'

// const novoParagrafo = document.createElement("h2")

// novoParagrafo.innerText = 'Novo paragrafo criado no jS'

// body.append(novoParagrafo)

// novoParagrafo.style.color = 'purple'

// título.style.color = 'blue'

const nome = document.querySelector('#nome')
console.log(nome)

const sobrenome = document.querySelector('#sobrenome')
console.log(sobrenome)

const genero = document.querySelector('#genero')
console.log(genero)

const peso = document.querySelector('#peso')
console.log(peso)

const altura = document.querySelector('#altura')
console.log(altura)