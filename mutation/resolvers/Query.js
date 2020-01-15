const { usuarios, perfis } = require("../data/db");

module.exports = {
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
