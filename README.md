# Amigo Secreto 🎁

Aplicação simples para **adicionar nomes** de amigos e **sortear aleatoriamente** um deles como “amigo secreto”.  
Projeto do programa **ONE – Oracle Next Education (Alura + Oracle)** para praticar **lógica de programação** com JavaScript (variáveis, funções, condicionais, listas e aleatoriedade).

> **Demo (GitHub Pages):** https://thedrads.github.io/Amigo-Secreto/  
> **Repositório:** https://github.com/thedrads/Amigo-Secreto

---

## ✨ Funcionalidades

- **Adicionar nomes** via campo de texto e botão “Adicionar”.
- **Validação**: impede adicionar nome vazio (mostra alerta).
- **Lista visível** com todos os nomes adicionados.
- **Sorteio aleatório** ao clicar em “Sortear amigo”.
- **Resultado** exibido na tela de forma clara.

---

## 🧠 Lógica (resumo)

- Um array `amigos` guarda todos os nomes.
- `adicionarAmigo()`:
  - Lê o valor do input;
  - Valida (não vazio);
  - Faz `amigos.push(nome)` e limpa o campo;
  - Chama `atualizarLista()` para renderizar a `<ul>`.
- `atualizarLista()`:
  - Limpa a `<ul>` e insere um `<li>` para cada nome do array.
- `sortearAmigo()`:
  - Valida se há nomes;
  - Sorteia índice com `Math.floor(Math.random() * amigos.length)`;
  - Mostra o nome sorteado na `<ul id="resultado">`.

---

## 🛠️ Tecnologias

- **HTML** + **CSS** (fornecidos no desafio)
- **JavaScript** (lógica do app)
- **Git/GitHub** (versionamento e publicação)

---

## ▶️ Como executar localmente

1. Baixe/clon​e este repositório:
   ```bash
   git clone https://github.com/thedrads/Amigo-Secreto.git

👤 Autor

Fábio Andrade (thedrads)
LinkedIn: https://www.linkedin.com/in/fabioandradegf/
