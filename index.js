import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

//types
import { typeDefs } from './schema.js'

//db
import {games, authors, reviews} from './_db.js'

const resolves = {
    Query: {
        games() {
            return games
        },
        authors() {
            return authors
        },
        reviews() {
            return reviews
        }
    }
}

// server setup
const server = new ApolloServer({
    typeDefs,
    resolves
})

const port = 4000

const { url } = await startStandaloneServer(server, {
    listen: {port}
})

console.log('Server ready at port', port)