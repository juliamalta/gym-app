import { YStack } from 'tamagui'

import { TabsProps } from '@/components/layout/Tabs/Tab.types'
import TabContent from '@/components/layout/Tabs/TabContent'
import TabHeader from '@/components/layout/Tabs/TabHeader'
import TabList from '@/components/layout/Tabs/TabList'
import TabViews from '@/components/layout/Tabs/TabViews'

const Tabs = ({ children, ...props }: TabsProps) => <YStack {...props}>{children}</YStack>

Tabs.List = TabList
Tabs.Header = TabHeader
Tabs.Content = TabContent
Tabs.View = TabViews

export default Tabs
