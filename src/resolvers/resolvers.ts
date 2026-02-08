import db from "../data/_db.json";
import { Author, Game, Review } from "../generated/graphql";

type DbReview = Omit<Review, "author" | "game">;

export const resolvers = {
  Query: {
    reviews: () => db.reviews,
    review: (_, args, context) =>
      db.reviews.find((review: DbReview) => review.id === args.id),
    authors: () => db.authors,
    author: (_, args, context) =>
      db.authors.find((author: Author) => author.id === args.id),
    games: () => db.games,
    game: (_, args, context) =>
      db.games.find((game: Game) => game.id === args.id),
  },
  Game: {
    reviews: (parent: Game) =>
      db.reviews.filter((review: DbReview) => review.gameId === parent.id),
  },
  Author: {
    reviews: (parent: Author) =>
      db.reviews.filter((review: DbReview) => review.authorId === parent.id),
  },
  Review: {
    game: (parent: Review) =>
      db.games.find((game: Game) => game.id === parent.gameId),
    author: (parent: Review) =>
      db.authors.find((author: Author) => author.id === parent.authorId),
  },
};
