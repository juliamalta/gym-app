import { gql, useQuery } from '@apollo/client'

export const mobileDashboardQuery = gql`
    query MobileDashboard {
        mobileDashboard {
            # list of values for the chart, starting from 12 months ago until the current month
            lastTwelveMonths
            # value in $ and number of sales in the current month
            monthsSalesTotal
            monthsNumberOfSales
            # value in $ and number of sales in the current year
            yearsSalesTotal
            yearsNumberOfSales
            # value in $ and number of sales closing this week
            activeEstimatesTotal
            numberOfActiveEstimates
            # value in $ and number of sales in the current year
            approvalThisWeekTotal
            numberOfApprovalThisWeek
        }
    }
`

export const useMobileDashboardQuery = () => {
    const { data, ...result } = useQuery(mobileDashboardQuery)

    return { data: data?.mobileDashboard, ...result }
}
