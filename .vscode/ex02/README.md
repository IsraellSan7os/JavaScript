# README

## Seleção de Elementos no DOM

Este código demonstra diferentes formas de selecionar e manipular elementos no DOM usando JavaScript.

### Métodos utilizados:

1. **Por TagName (`getElementsByTagName`)**
   - Seleciona o segundo elemento `<p>` e altera sua cor para amarelo.

2. **Por ID (`getElementById`)**
   - Seleciona o elemento com `id="txtid"`, altera sua cor para vermelho e modifica seu texto.

3. **Por Classe (`getElementsByClassName`)**
   - Seleciona o primeiro elemento da coleção retornada e altera seu texto.

4. **Por Seletor (`querySelector`)**
   - Seleciona um elemento pelo seletor CSS `#txtQuery` e altera sua cor para azul.

### Observações:
- `getElementsByTagName` e `getElementsByClassName` retornam coleções de elementos, sendo necessário acessar um índice específico.
- `querySelector` retorna o primeiro elemento que corresponde ao seletor especificado.

### Como executar:
Basta incluir o script em um arquivo HTML com os elementos correspondentes para visualizar as mudanças no DOM.

