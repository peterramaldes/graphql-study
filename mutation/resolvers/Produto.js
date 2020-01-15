module.exports = {
  precoComDesconto(produto) {
    if (produto.desconto) {
      let discount = produto.desconto / 100;

      return Math.round(produto.preco * discount);
    } else {
      return produto.preco;
    }
  }
};
