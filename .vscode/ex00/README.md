# Tipos Primitivos no JavaScript

## Tipos de Dados

### Number
- `Infinity` → Representa um valor infinito.
- `NaN` → Significa "Not a Number" (Não é um número).

### String
- Texto representado entre aspas simples (`'`) ou duplas (`"`).

### Boolean
- Pode ser `true` (verdadeiro) ou `false` (falso).

### Null
- Representa a ausência intencional de um valor.

### Undefined
- Variável declarada, mas sem valor atribuído.

### Object
- Estruturas de dados que armazenam pares chave-valor.

### Array
- Lista de elementos, pode armazenar diferentes tipos de dados.

### Function
- Bloco de código reutilizável.

---

## Conversão de Tipos

### Converter String para Número Inteiro:
```js
Number.parseInt(n);
```

### Converter String para Número Float:
```js
Number.parseFloat(n);
```

---

## Exibição de Mensagens no JavaScript

### Template String

#### Forma 1 (Concatenação):
```js
window.alert('A soma entre os números é ' + res);
```

#### Forma 2 (Interpolação com Template Literals):
```js
window.alert(`A soma entre os números ${num1} e ${num2} é igual a ${res}`);
```

---

## Métodos Úteis para Strings

### Contar caracteres em uma string:
```js
s.length;
```

### Converter para maiúsculas:
```js
s.toUpperCase();
```

### Converter para minúsculas:
```js
s.toLowerCase();
