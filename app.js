//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Lista de amigos em memória
const amigos = [];

// Pegamos os elementos da página uma vez
const inputNome  = document.getElementById('amigo');
const listaUl    = document.getElementById('listaAmigos');
const resultadoUl= document.getElementById('resultado');

// Adiciona um nome à lista
function adicionarAmigo() {
  const nome = (inputNome.value || '').trim();

  // Valida vazio
  if (!nome) {
    alert('Por favor, insira um nome.');
    inputNome.focus();
    return;
  }

  // Valida duplicado (ignorando maiúsc./minúsc.)
  const duplicado = amigos.some(n => n.toLowerCase() === nome.toLowerCase());
  if (duplicado) {
    alert('Esse nome já está na lista.');
    inputNome.value = '';
    inputNome.focus();
    return;
  }

  amigos.push(nome);
  atualizarLista();

  // Limpa e foca
  inputNome.value = '';
  inputNome.focus();

  // Limpa resultado de sorteio anterior
  resultadoUl.innerHTML = '';
}

// Re-renderiza a <ul> de nomes
function atualizarLista() {
  listaUl.innerHTML = '';
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    listaUl.appendChild(li);
  }
}

// Sorteia um amigo aleatório
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('Adicione pelo menos um nome antes de sortear.');
    inputNome.focus();
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const sorteado = amigos[indice];

  // Mostra o resultado dentro da <ul id="resultado">
  resultadoUl.innerHTML = `<li>🎉 Amigo sorteado: <strong>${sorteado}</strong></li>`;
}

// Atalho: pressionar ENTER adiciona
if (inputNome) {
  inputNome.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') adicionarAmigo();
  });
}
