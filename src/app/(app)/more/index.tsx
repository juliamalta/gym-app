import { Entypo } from '@expo/vector-icons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { Stack } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import ImagePicker from 'react-native-image-picker'
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
            <ScrollView maxHeight="100%" width="100%" bg="#0a0a0a">
                <YStack height="100%" gap="$3" mb="$4" padding="$3" bg="#0a0a0a">
                    <View>
                        <XStack>
                            <ListUser name="Jane Doe" email="jane.doe@mail" />
                        </XStack>
                        <XStack jc="center">
                            <Text
                                fontSize={13}
                                lineHeight={21}
                                fontWeight="400"
                                color="#777777"
                                ml={18}
                                pt={30}
                                textAlign="center">
                                CONFIGURATION
                            </Text>
                        </XStack>
                        <YGroup backgroundColor="#171717" height={120} borderRadius={8} mt={10}>
                            {ListController.map((item, index) => (
                                <YGroup.Item key={index}>
                                    <TouchableOpacity>
                                        <ListUserController
                                            text={item.text}
                                            icon={item.icon}
                                            navigationIcon={
                                                <Entypo name="chevron-small-right" size={40} color="#DDDDDD" />
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
