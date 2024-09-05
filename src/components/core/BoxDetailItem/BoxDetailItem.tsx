import { Text, View } from 'tamagui'

import { BoxDetailItemProps } from '@/components/core/BoxDetailItem/BoxDetailItem.types'

export default function BoxDetailItem({ boxItem }: { boxItem: BoxDetailItemProps }) {
    return (
        <View
            borderRadius="$3"
            marginVertical="$1.5"
            borderColor="$gray4"
            backgroundColor="$gray1"
            borderWidth="$0.5"
            padding="$3"
            space="$1"
            width="31.5%"
            minHeight="$6">
            {boxItem.icon}
            <Text marginTop="$3" fontWeight="600" fontSize={12}>
                {boxItem.value}
            </Text>
            <Text color="$gray10Light" fontSize={10}>
                {boxItem.title}
            </Text>
        </View>
    )
}
