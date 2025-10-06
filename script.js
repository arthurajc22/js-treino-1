// ===== EXERCÍCIO 1: clique que muda a cor do título =====
const titulo = document.querySelector("#titulo");
const botao1 = document.querySelector("#botao1");

botao1.addEventListener("click", function () {
  titulo.style.color = "red"; //muda a cor do h1
});

// ===== EXERCÍCIO 2: digitação no input =====
const campoTexto = document.querySelector("#campoTexto");
const resultado = document.querySelector("#resultado");

campoTexto.addEventListener("keyup", function () {
  resultado.textContent = campoTexto.value; //atualiza o texto do resultado mostra no <p></p> com o valor do input
});

// ===== EXERCÍCIO 3: duplo clique que mostra/esconde imagem =====

const imagem = document.querySelector("#imagem");
const botao2 = document.querySelector("#botao2");

imagem.style.visibility = "hidden"; // O HIDDEN comeca com a imagem escondida e mantem o espaco reservado

botao2.addEventListener("dblclick", function () {
  imagem.style.visibility =
    imagem.style.visibility === "hidden" ? "visible" : "hidden"; // troca entre hidden e visible
});

// ===== EXERCÍCIO 4: mouseover e mouseout =====

const caixa = document.querySelector("#caixa");

caixa.addEventListener("mouseover", function () {
  caixa.style.backgroundColor = "yellow"; // muda a cor da caixa ao passar o mouse
  caixa.textContent = "Obrigado mouse dentro !"; // muda o texto da caixa ao passar o mouse
});
caixa.addEventListener("mouseout", function () {
  caixa.style.backgroundColor = "lightgray"; // volta a cor original da caixa ao tirar o mouse
  caixa.textContent = "Passe o mouse aqui"; // volta o texto original da caixa ao tirar o mouse
});

// ===== EXERCÍCIO 5: change no select =====
const selectOpcao = document.querySelector("#selectOpcao");
const resultadoSelect = document.querySelector("#resultadoSelect");

selectOpcao.addEventListener("change", function () {
  const corEscolhida = selectOpcao.value; //pega o valor selecionado no select (cor)
  if (corEscolhida) {
    resultadoSelect.textContent = "Vocẽ escolheu: " + corEscolhida; //mostra o texto com a cor escolhida
    resultadoSelect.style.color = corEscolhida; //muda a cor do texto para a cor escolhida
  } else {
    resultadoSelect.textContent = ""; // se nao tiver nada selecionado limpa o texto
  }
});
