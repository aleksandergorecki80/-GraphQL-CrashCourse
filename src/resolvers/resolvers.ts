import db from "../data/_db.json";
import { Author, Game, Review } from "../generated/graphql";

export const resolvers = {
  Query: {
    reviews: () => db.reviews,
    review: (_, args, context) =>
      db.reviews.find((review: Review) => review.id === args.id),
    authors: () => db.authors,
    author: (_, args, context) =>
      db.authors.find((author: Author) => author.id === args.id),
    games: () => db.games,
    game: (_, args, context) =>
      db.games.find((game: Game) => game.id === args.id),
  },
};
