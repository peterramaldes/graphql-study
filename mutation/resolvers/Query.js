const { usuarios, perfis } = require("../data/db");

module.exports = {
  ola() {
    return "Bom dia!";
  },
  horaAtual() {
    return new Date();
  },
  usuarioLogado() {
    return {
      id: 1,
      nome: "Ana da web",
      email: "anadaweb@email.com",
      idade: 23,
      salario_real: 1234.56,
      vip: true
    };
  },
  produtoEmDestaque() {
    return {
      nome: "Arroz",
      preco: 200.0
    };
  },
  numerosMegaSena() {
    const crescente = (a, b) => a - b;

    return Array(6)
      .fill(0)
      .map(() => parseInt(Math.random() * 60 + 1))
      .sort(crescente);
  },
  usuarios() {
    return usuarios;
  },
  usuario(_, { id }) {
    return usuarios.filter(usuario => usuario.id === id)[0];
  },
  perfis() {
    return perfis;
  },
  perfil(_, { id }) {
    return perfis.filter(perfil => perfil.id === id)[0];
  }
};
