# Amigo Secreto

Aplicação web simples para adicionar nomes de amigos, visualizar a lista e **sortear** um nome aleatório como “amigo secreto”.

👉 **Demo (GitHub Pages):**
`https://thedrads.github.io/Amigo-Secreto/`

---

## ✨ Funcionalidades

* **Adicionar nomes** via campo de texto ou **Enter**
* **Validação**: impede campos vazios
* **Bloqueio de duplicados** (ignora maiúsculas/minúsculas e espaços repetidos)
* **Lista dinâmica** dos nomes adicionados
* **Sorteio aleatório** e exibição do resultado
* **Limpar lista** (botão ao lado de **Sortear amigo**)
* **Mensagens acessíveis** (erro/sucesso) com `aria-live`
* Layout **responsivo** e sem backend (somente HTML/CSS/JS)

---

## 🖥️ Como usar

1. Digite um nome no campo e clique em **Adicionar** (ou pressione **Enter**).
2. Repita para montar a lista de amigos.
3. Clique em **Sortear amigo** para escolher um nome aleatório.
4. Para começar de novo, clique em **Limpar lista**.

> Erros comuns (e mensagens exibidas):
>
> * Campo vazio → “Por favor, insira um nome.”
> * Nome já existente → “Esse nome já está na lista.”

---

## 📂 Estrutura do projeto

```
Amigo-Secreto/
├─ index.html        # Estrutura da página
├─ style.css         # Estilos
├─ app.js            # Lógica (adicionar, listar, sortear, limpar)
└─ assets/
   ├─ amigo-secreto.png
   └─ play_circle_outline.png
```

---

## 🧠 Lógica principal (JS)

* **Lista de nomes**: `let amigos = []`
* **Adicionar**: valida vazio, normaliza e bloqueia duplicados
* **Atualizar lista**: renderiza `<li>` para cada nome
* **Sortear**: usa `Math.random()`/`Math.floor()` para índice aleatório
* **Limpar**: esvazia array, limpa listas e mensagens

Funções disponíveis:

* `adicionarAmigo()`
* `sortearAmigo()`
* `limparLista()`

---

## 🧪 Rodando localmente

1. Baixe/clique em **Code → Download ZIP** ou faça:

   ```bash
   git clone https://github.com/thedrads/Amigo-Secreto.git
   ```
2. Abra a pasta no VS Code.
3. Abra o arquivo `index.html` no navegador (duplo clique já funciona).

> Dica: a extensão **Live Server** do VS Code facilita o auto-reload.

---

## 🚀 Publicação (GitHub Pages)

1. Faça **commit** das mudanças na branch `main`:

   * Mensagem sugerida:
     `feat: amigo secreto (adicionar, listar, sortear e limpar lista)`
2. No GitHub, abra o repositório `Amigo-Secreto`:

   * **Settings → Pages**
   * **Source**: selecione **main** e **/root** (ou “/ (root)”)
   * **Save**
3. Acesse: `https://thedrads.github.io/Amigo-Secreto/`

---

## 🛠️ Tecnologias

* **HTML5**
* **CSS3**
* **JavaScript (Vanilla)**

---

## ✅ Acessibilidade

* Feedbacks com `role="alert"` e `aria-live="assertive"`
* Foco enviado para mensagens após ações
* Botões com rótulos claros e suporte ao **Enter** no campo de nome

---

## 📈 Próximos passos (ideias)

* Remover nomes individualmente
* Exibir histórico de sorteios
* Testes automatizados (Jest)

---

Autor: **@thedrads**.

Sinta-se à vontade para enviar sugestões e melhorias!
