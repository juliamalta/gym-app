import { gql, useMutation } from '@apollo/client'

export const loginMutation = gql`
    mutation Login($input: loginInput!) {
        login(input: $input) {
            __typename
            ... on AuthPayload {
                viewer {
                    id
                    name
                    login
                    avatar {
                        url
                        initials
                    }
                    __typename
                }
                __typename
            }
            ... on InvalidLoginInfo {
                message
                __typename
            }
            ... on LockedUser {
                message
                __typename
            }
            ... on InactiveUser {
                message
                __typename
            }
        }
    }
`

export const useLoginMutation = () => {
    const [mutation, result] = useMutation(loginMutation)

    return { mutation, ...result }
}
