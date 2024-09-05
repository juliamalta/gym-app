import { gql, useQuery } from '@apollo/client'

import { ProjectDetailsDocument } from '@/common/gql-generated/graphql'

export const projectDetailsQuery = gql`
    query ProjectDetails($id: Int!) {
        project(id: $id) {
            id
            name
            status
            favoriteEstimate {
                id
                code
                # subtotal = price - taxesPrice - installationService.price - deliveryService.price
                discount
                price
                markup
                taxesPrice
                discountAuthorization {
                    __typename
                    # typename pode ser EstimateDiscountRequested, EstimateDiscountNotRequested ou EstimateDiscountAuthorized
                    # por enquanto apenas EstimateDiscountRequested tem campos extras
                    ... on EstimateDiscountRequested {
                        requestDate
                    }
                }
                installationService {
                    id
                    price
                }
                deliveryService {
                    id
                    price
                }
                discount
                profitMargin
                profitMarginPercentage
                allItems {
                    id
                    name
                    price
                    discount
                }
            }
            customer {
                id
                name
            }
            projectOwner {
                id
                name
            }
        }
    }
`

export const useProjectDetailsQuery = () => {
    const { data, ...result } = useQuery(ProjectDetailsDocument)

    return { data: data?.project, ...result }
}
