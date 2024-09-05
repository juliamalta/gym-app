import { gql, useQuery } from '@apollo/client'

import { SalesOrdersDocument } from '@/common/gql-generated/graphql'

export const salesOrdersQuery = gql`
    query SalesOrders($filters: ProjectsFilters!) {
        projects(filters: $filters) {
            hasMore
            projects {
                id
                name
                saleOrder {
                    id
                    estimate {
                        id
                        price
                        markup
                        discount
                        profitMarginPercentage
                    }
                }
                customer {
                    id
                    name
                }
            }
        }
    }
`

export const useSalesOrdersQuery = () => {
    const { data, ...result } = useQuery(SalesOrdersDocument)

    return { data: data?.projects, ...result }
}
