import { Entypo } from '@expo/vector-icons'
import { Stack } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import { ScrollView, YStack, Text, XStack, View, YGroup, Separator } from 'tamagui'

import { ListUser } from '@/components/core/ListUser'
import { ListUserController } from '@/components/core/ListUserController'
import { ListController } from '@/components/core/ListUserController/ListUserControllerOptions'
import { HeaderSignOut } from '@/components/layout/HeaderSignOut'
import { ScreenTemplate } from '@/components/template/ScreenTemplate'

export default function MorePage() {
    return (
        <ScreenTemplate
            options={{
                title: 'More',
                header: () => <HeaderSignOut title={'More'} />,
            }}>
            <Stack.Screen />
            <ScrollView maxHeight="100%" width="100%" backgroundColor="#F2F2F6">
                <YStack height="100%" gap="$3" mb="$4" padding="$3" backgroundColor="#F2F2F6">
                    <View>
                        <XStack>
                            <ListUser name="Jane Doe" email="jane.doe@mail" />
                        </XStack>
                        <XStack>
                            <Text fontSize={13} lineHeight={21} fontWeight="400" color="#777777" ml={18} mt={3}>
                                HUMAN RESOURCE MANAGEMENT
                            </Text>
                        </XStack>
                        <YGroup
                            backgroundColor="#FFFFFF"
                            height={80}
                            borderRadius={8}
                            mt={6}
                            separator={<Separator width={'85%'} ml="auto" mt={5} />}>
                            {ListController.map((item, index) => (
                                <YGroup.Item key={index}>
                                    <TouchableOpacity>
                                        <ListUserController
                                            text={item.text}
                                            icon={item.icon}
                                            navigationIcon={
                                                <Entypo name="chevron-small-right" size={24} color="#DDDDDD" />
                                            }
                                        />
                                    </TouchableOpacity>
                                </YGroup.Item>
                            ))}
                        </YGroup>
                    </View>
                </YStack>
            </ScrollView>
        </ScreenTemplate>
    )
}
