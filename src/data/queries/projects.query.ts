import { gql, useQuery } from '@apollo/client'

import { ProjectsDocument } from '@/common/gql-generated/graphql'

export const projectsQuery = gql`
    query Projects($filters: ProjectsFilters!) {
        projects(filters: $filters) {
            projects {
                id
                name
                favoriteEstimate {
                    id
                    price
                    markup
                    discount
                    profitMarginPercentage
                }
                customer {
                    id
                    name
                }
            }
            hasMore
        }
    }
`

export const useProjectsQuery = () => {
    const { data, ...result } = useQuery(ProjectsDocument)

    return { data: data?.projects, ...result }
}
