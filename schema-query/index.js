const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  scalar Date

  type Usuario {
    id: ID
    nome: String!
    email: String!
    idade: Int
    salario: Float
    vip: Boolean
  }

  type Produto {
    nome: String!
    preco: Float!
    desconto: Float
    precoComDesconto: Float
  }

  # Pontos de entrada da sua API!
  type Query {
    ola: String!
    horaAtual: Date!
    usuarioLogado: Usuario
    produtoEmDestaque: Produto
  }
`;

const resolvers = {
  Usuario: {
    salario(usuario) {
      return usuario.salario_real;
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
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`);
});
