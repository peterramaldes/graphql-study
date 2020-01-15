const { ApolloServer, gql } = require("apollo-server");

const usuarios = [
  {
    id: 1,
    nome: "João Silva",
    email: "js@email.com",
    idade: 24
  },
  {
    id: 2,
    nome: "Roberto Carlos",
    email: "rc@email.com",
    idade: 25
  },
  {
    id: 3,
    nome: "Ronaldo",
    email: "r@email.com",
    idade: 19
  }
];

const typeDefs = gql`
  scalar Date

  type Usuario {
    id: Int
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
    numerosMegaSena: [Int!]!
    usuarios: [Usuario]
    usuario(id: Int): Usuario
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
      const selecionados = usuarios.filter(usuario => usuario.id === id);

      return selecionados ? selecionados[0] : null;
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
