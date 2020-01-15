let id = 1;
function proximoId() {
  return id++;
}

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
    id: proximoId(),
    nome: "João Silva",
    email: "js@email.com",
    idade: 24,
    perfil_id: 1,
    status: "ATIVO"
  },
  {
    id: proximoId(),
    nome: "Roberto Carlos",
    email: "rc@email.com",
    idade: 25,
    perfil_id: 2,
    status: "INATIVO"
  },
  {
    id: proximoId(),
    nome: "Ronaldo",
    email: "r@email.com",
    idade: 19,
    perfil_id: 1,
    status: "BLOQUEADO"
  }
];

module.exports = { usuarios, perfis, proximoId };
