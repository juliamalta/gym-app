import { gql, useMutation } from '@apollo/client'

export const authorizeDiscountMutation = gql`
    mutation AuthorizeDiscount($input: AuthorizeDiscountInput!) {
        authorizeDiscount(input: $input) {
            id
            discountAuthorization {
                __typename
                ... on EstimateDiscountRequested {
                    requestDate
                }
            }
        }
    }
`

export const useLoginMutation = () => {
    const [mutation, result] = useMutation(authorizeDiscountMutation)

    return { mutation, ...result }
}
