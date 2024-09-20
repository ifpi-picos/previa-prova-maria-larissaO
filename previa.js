// Função 1 (maiorNumero): Retorna o maior número da lista usando Math.max(). 
// Se a lista for vazia ou inválida, retorna null.
export function maiorNumero (listaNumeros){ //listaNumeros é o parametro da função
    if (listaNumeros.length == 0 || typeof listaNumeros == "string") return null

    return Math.max(...listaNumeros) //esse método/ função vai retornar o maior numero 
}



// Função 2 (verificarParOuImpar): Verifica se um número é par ou ímpar usando o operador %.
 export function verificarParOuImpar(numero) {
  if(typeof numero == "string") return null

   if (numero % 2 === 0 ){
       return "Par"
   } return "Ímpar"

    
}

//Função 3 (contarCaracterA): Conta quantas vezes o caractere 'a' ou 'A' aparece
// em uma string usando um loop while.
export function contarCaracter(nome, letra) {
    if (typeof nome != "string") return null
    
    let i = 0        // i=indice
    let contar = 0;
    while (nome.length > i) {
        if (nome[i].toLowerCase() == letra.toLowerCase()){ // vai retornar cada letra da palavra, uma por vez, e comparar com a letra que o usuario pede, se for igual, vai aumentar 1
            contar++ //o toLoweCase deixa as letras todas minusculas 
        } 
        i++ 
    } return contar
}


// Função 4 (atualizarPropriedade): Atualiza o valor de uma propriedade existente em um objeto.
// Se a chave não existir, retorna null.
export function atualizarPropriedade(objeto , propriedade, novoValor)  {
    if (propriedade in objeto) { // verificar se a propriedade  está dentro do objeto
        objeto[propriedade] = novoValor //atualiza a propriedade
        return objeto
    }
    return null
}



    
