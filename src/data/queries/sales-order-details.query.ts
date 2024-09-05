import { gql, useQuery } from '@apollo/client'

import { SalesOrderDetailsDocument } from '@/common/gql-generated/graphql'

export const salesOrderDetailsQuery = gql`
    query SalesOrderDetails($id: Int!) {
        project(id: $id) {
            id
            name
            status
            saleOrder {
                id
                code
                estimate {
                    id
                    discount
                    # subtotal = price - taxesPrice - installationService.price - deliveryService.price
                    price
                    markup
                    taxesPrice
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

export const useSalesOrderDetailsQuery = () => {
    const { data, ...result } = useQuery(SalesOrderDetailsDocument)

    return { data: data?.project, ...result }
}
