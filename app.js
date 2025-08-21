// Lista principal
let amigos = [];

// Normaliza para checar duplicados (ignora espaços extras e maiúsculas/minúsculas)
function normalizar(nome) {
  return nome.trim().replace(/\s+/g, " ").toLowerCase();
}

// Mensagens acessíveis (erro/sucesso/info)
function exibirMensagem(texto, tipo = "info") {
  const msg = document.getElementById("mensagem");
  msg.textContent = texto;

  msg.classList.remove("msg-erro", "msg-sucesso", "msg-info");
  if (tipo === "erro") msg.classList.add("msg-erro");
  else if (tipo === "sucesso") msg.classList.add("msg-sucesso");
  else msg.classList.add("msg-info");

  msg.setAttribute("tabindex", "-1");
  msg.focus();
  setTimeout(() => msg.removeAttribute("tabindex"), 0);
}

// Atualiza UL com os nomes
function atualizarLista() {
  const ul = document.getElementById("listaAmigos");
  ul.innerHTML = "";
  amigos.forEach((nome) => {
    const li = document.createElement("li");
    li.textContent = nome;
    ul.appendChild(li);
  });
}

// Adiciona amigo
function adicionarAmigo() {
  const input = document.getElementById("amigo");
  let nome = input.value;

  if (!nome || !nome.trim()) {
    exibirMensagem("Por favor, insira um nome.", "erro");
    input.focus();
    return;
  }

  const chave = normalizar(nome);
  const existe = amigos.some((n) => normalizar(n) === chave);
  if (existe) {
    exibirMensagem("Esse nome já está na lista.", "erro");
    input.focus();
    return;
  }

  nome = nome.trim().replace(/\s+/g, " ");
  amigos.push(nome);
  atualizarLista();
  exibirMensagem(`“${nome}” adicionado com sucesso.`, "sucesso");

  input.value = "";
  input.focus();
}

// Sorteia um amigo aleatório
function sortearAmigo() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  if (amigos.length === 0) {
    exibirMensagem("Adicione ao menos 1 nome antes de sortear.", "erro");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const sorteado = amigos[indice];

  const li = document.createElement("li");
  li.textContent = `Amigo sorteado: ${sorteado}`;
  resultado.appendChild(li);

  exibirMensagem("Sorteio realizado com sucesso!", "sucesso");
}

// Limpa toda a lista
function limparLista() {
  if (amigos.length === 0) {
    exibirMensagem("A lista já está vazia.", "info");
    return;
  }
  amigos = [];
  atualizarLista();
  document.getElementById("resultado").innerHTML = "";
  exibirMensagem("Lista de amigos apagada.", "sucesso");
}

// Acessibilidade: Enter adiciona amigo
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("amigo");
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      adicionarAmigo();
    }
  });
});
