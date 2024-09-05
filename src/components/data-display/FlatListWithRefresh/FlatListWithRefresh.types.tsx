export interface IFlatListWithRefreshProps {
    children: React.ReactNode
    refetchByUser: () => Promise<void>
    isRefetchingByUser: boolean
}
