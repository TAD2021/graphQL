# graphQL
# Query
# Example for a author
query AuthorQuery($authorId: ID!) {
    author(id: $authorId) {
        reviews {
            rating
            id
            content
        }
        name
        verified
        id
    }
}
# Example for authors
query AuthorsQuery {
    authors {
        id
        name
        verified
        reviews {
            content
            id
            rating
        }
    }
}
# Example for a game
query GameQuery($gameId: ID!) {
    game(id: $gameId) {
        id
        platform
        reviews {
            content
            id
            rating
        }
        title
    }
}
# Example for games
query GamesQuery {
    games {
        id
        platform
        reviews {
            content
            id
            rating
        }
        title
    }
}
# Example for a review
query ReviewQuery($reviewId: ID!) {
    review(id: $reviewId) {
        author {
            id
            name
            verified
        }
        content
        game {
            title
            platform
            id
        }
        id
        rating
    }
}
# Example for reviews
query ReviewsQuery {
    reviews {
        author {
            id
            name
            verified
        }
        content
        game {
            id
            platform
            title
        }
        id
        rating
    }
}

# Mutation
# Add a game
mutation AddGame($game: AddGameInput!){
    addGame(game: $game) {
        id
        title
        platform 
    }
}

# Edit a game
mutation EditGame($updateGameId: ID!, $edits: EditGameInput!){
    updateGame(id: $updateGameId, edits: $edits) {
        id
        title
        platform
    }
}

# Delete a game
mutation DeleteGame($deleteGameId: ID!){
    deleteGame(id: $deleteGameId) {
        id
        title
        platform
    }
}