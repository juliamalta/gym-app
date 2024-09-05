import { Link } from 'expo-router'
import { YStack, Text, Button } from 'tamagui'

import { appPath } from '@/common/configs'
import { LoadingButton } from '@/components/core/LoadingButton'
export default function RefreshComp() {
    return (
        <YStack gap="$3" mb="$4" padding="$3" f={1} justifyContent="center" alignItems="center">
            <Text fontWeight="400" fontSize={13}>
                No Notifications at the moment
            </Text>
            <Link href={appPath.notifications} asChild>
                <LoadingButton
                    fontWeight="400"
                    fontSize={13}
                    borderRadius={4}
                    width={189}
                    height={29}
                    padding="4px 0px 4px 0px"
                    paddingBottom={4}
                    color="#FFFFFF"
                    backgroundColor="$secondary"
                    pressStyle={{ backgroundColor: '$colors.secondary50' }}>
                    Refresh
                </LoadingButton>
            </Link>
        </YStack>
    )
}
