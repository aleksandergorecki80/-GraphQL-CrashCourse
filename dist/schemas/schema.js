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
  }

  type Review {
    id: ID!
    rating: Float!
    comment: String
    createdAt: String!
  }

  type Author {
    id: ID!
    name: String!
    reviews: [Review!]!
    verified: Boolean!
  }

  type Query {
    reviews: [Review!]!
    authors: [Author!]!
    games: [Game!]!
  }
`;
