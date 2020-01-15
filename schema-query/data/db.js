const perfis = [
  {
    id: 1,
    nome: "Comum"
  },
  {
    id: 2,
    nome: "Administrador"
  }
];

const usuarios = [
  {
    id: 1,
    nome: "João Silva",
    email: "js@email.com",
    idade: 24,
    perfil_id: 1
  },
  {
    id: 2,
    nome: "Roberto Carlos",
    email: "rc@email.com",
    idade: 25,
    perfil_id: 2
  },
  {
    id: 3,
    nome: "Ronaldo",
    email: "r@email.com",
    idade: 19,
    perfil_id: 1
  }
];

module.exports = { usuarios, perfis };
