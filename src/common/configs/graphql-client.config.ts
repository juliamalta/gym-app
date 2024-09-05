import { ApolloClient, InMemoryCache, HttpLink, from, ApolloLink } from '@apollo/client'
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev'
import { onError } from '@apollo/client/link/error'
import { GraphQLFormattedError } from 'graphql'

import { env } from '@/common/configs/env.config'

loadDevMessages()
loadErrorMessages()

const httpLink = new HttpLink({
    uri: env.API_URL,
    credentials: 'include',
})

const errorLink: ApolloLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach((error: GraphQLFormattedError) => {
            const { message, locations, path } = error
            console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
        })
    if (networkError) console.error(`[Network error]: ${networkError}`)
})

export const gqlClient = new ApolloClient({
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache(),
})
