const { ApolloServer } = require("apollo-server");
const { importSchema } = require("graphql-import");

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

const resolvers = {
  Usuario: {
    salario(usuario) {
      return usuario.salario_real;
    },
    perfil(usuario) {
      return perfis.filter(perfil => perfil.id === usuario.perfil_id)[0];
    }
  },

  Produto: {
    precoComDesconto(produto) {
      if (produto.desconto) {
        let discount = produto.desconto / 100;

        return Math.round(produto.preco * discount);
      } else {
        return produto.preco;
      }
    }
  },

  Query: {
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
  }
};

const server = new ApolloServer({
  typeDefs: importSchema("./schema/index.graphql"),
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`);
});
