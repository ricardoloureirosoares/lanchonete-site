# Explicação Detalhada

### `document.querySelectorAll('.btn-pedido')`
- Seleciona todos os elementos que possuem a classe `btn-pedido` no documento HTML.
- Retorna uma lista (NodeList) de elementos.

### `.forEach(button => {...})`
- Itera sobre cada elemento da lista retornada pelo `querySelectorAll`.
- Para cada botão (`button`), executa o código dentro da função.

### `button.addEventListener('click', () => {...})`
- Adiciona um evento do tipo `click` ao botão atual.
- Quando o botão for clicado, a função anônima será executada.

### `button.getAttribute('data-preco')`
- Obtém o valor do atributo `data-preco` do botão.
- Esse atributo é usado para armazenar o preço do item diretamente no HTML.

### `parseFloat(...)`
- Converte o valor do atributo `data-preco` (que é uma string) em um número decimal.

### `button.parentElement.querySelector('h2')`
- Encontra o elemento `<h2>` dentro do contêiner pai do botão.
- Isso funciona porque o botão e o título (`<h2>`) do lanche estão no mesmo nível hierárquico no HTML.

### `textContent`
- Captura o texto que está dentro do elemento `<h2>`, que no caso é o nome do lanche.

### `alert(...)`
- Exibe uma caixa de diálogo com uma mensagem.
- Usa *template literals* (entre crases ``) para interpolar o nome do lanche e o preço no texto.
- O método `toFixed(2)` garante que o preço seja exibido com duas casas decimais, padrão para valores monetários.

---

## Funcionamento Prático

Quando o usuário clica em um botão de "Fazer Pedido":
1. O script identifica qual botão foi clicado.
2. Recupera o preço e o nome do lanche associados a esse botão.
3. Exibe uma mensagem ao usuário confirmando o pedido, mostrando o nome e o preço do lanche.
