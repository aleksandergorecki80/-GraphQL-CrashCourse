import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schemas/schema.js";
import { resolvers } from "./resolvers/resolvers";
// server setup
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
// start server
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀 Server is running on ${url}`);
