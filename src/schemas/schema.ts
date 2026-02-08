export const typeDefs = `#graphql
  type Game {
    id: ID!
    title: String!
    description: String
    price: Float!
    releaseDate: String!
    genre: String!
    platforms: [String!]!
    rating: Float
    image: String
    reviews: [Review!]
  }

  type Review {
    id: ID!
    rating: Float!
    comment: String
    createdAt: String!
    game: Game!
    gameId: ID!
    author: Author!
    authorId: ID!
  }

  type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
  }

  type Query {
    reviews: [Review!]!
    review(id: ID!): Review
    authors: [Author!]!
    author(id: ID!): Author
    games: [Game!]!
    game(id: ID!): Game
  }
`;
