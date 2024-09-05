import { gql, useQuery } from '@apollo/client'

import { CheckAuthDocument } from '@/common/gql-generated/graphql'

export const checkAuthQuery = gql`
    fragment AuthPayloadFragment on AuthPayload {
        viewer {
            id
            name
            group {
                id
                locale
                numberFormat
                dateFormat
                currency
            }
            __typename
        }
    }
    query CheckAuth {
        checkAuth {
            ... on AuthPayload {
                ...AuthPayloadFragment
            }
            __typename
        }
    }
`

export const useCheckAuthQuery = () => {
    const { data, ...result } = useQuery(CheckAuthDocument)

    return { data: data?.checkAuth, ...result }
}
