import { Feather } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { Text, ListItem, YStack } from 'tamagui'

import { LinkListItemProps } from './LinkListItem.types'

function LinkListItem({ title, to, children, action, ...props }: LinkListItemProps) {
    return (
        <>
            {to ? (
                <Link href={{ pathname: to, params: { title } }} asChild>
                    <ListItem
                        borderColor="$gray4"
                        backgroundColor="$gray1Light"
                        borderWidth="$0.5"
                        borderRadius="$3"
                        borderLeftWidth="$1.5"
                        size="$3"
                        pressStyle={{ backgroundColor: '$gray3' }}
                        iconAfter={<Feather name="chevron-right" size={20} />}
                        {...props}>
                        <YStack space="$1" marginVertical="$2">
                            <Text fontSize={16} fontWeight="600">
                                {title}
                            </Text>
                            {children}
                        </YStack>
                    </ListItem>
                </Link>
            ) : (
                <ListItem
                    borderColor="$gray4"
                    onPress={action}
                    backgroundColor="$gray1Light"
                    borderWidth="$0.5"
                    borderRadius="$3"
                    borderLeftWidth="$1.5"
                    size="$3"
                    pressStyle={{ backgroundColor: '$gray3' }}
                    iconAfter={<Feather name="chevron-right" size={20} />}
                    {...props}>
                    <YStack space="$1" marginVertical="$2">
                        <Text fontSize={16} fontWeight="600">
                            {title}
                        </Text>
                        {children}
                    </YStack>
                </ListItem>
            )}
        </>
    )
}

export default LinkListItem
