import { Feather } from '@expo/vector-icons'
import React from 'react'
import { XStack, Text, YStack, View } from 'tamagui'

import { StackScreen } from '@/components/layout/StackScreen'
import { Toast } from '@/components/overlay/Toast'

function ApproveTrigger() {
    return (
        <XStack padding={10} mt={5}>
            <YStack ai="center">
                <Feather
                    style={{
                        textAlign: 'center',
                        borderRadius: 20,
                        backgroundColor: 'white',
                        height: 30,
                        width: 30,
                        padding: 4,
                        color: '#52ACFF',
                    }}
                    size={16}
                    circular
                    name="thumbs-up"
                />
                <Text fontSize={10} color="white" textAlign="center" lineHeight={15}>
                    Approve
                </Text>
            </YStack>
        </XStack>
    )
}

function RejectTrigger() {
    return (
        <XStack jc="space-between" padding={10} mt={5}>
            <YStack ai="center">
                <Feather
                    style={{
                        textAlign: 'center',
                        borderRadius: 20,
                        backgroundColor: 'white',
                        height: 30,
                        gap: 10,
                        width: 30,
                        padding: 4,
                        color: '#52ACFF',
                    }}
                    size={16}
                    circular
                    name="thumbs-down"
                />
                <Text fontSize={10} color="white" textAlign="center" lineHeight={15}>
                    Reject
                </Text>
            </YStack>
        </XStack>
    )
}

export default function DetailProjectsHeader() {
    return (
        <YStack backgroundColor="$secondary" width="100%" p={8}>
            <StackScreen title="EST-1111"> </StackScreen>
            <YStack ai="center">
                <Text fontSize={22} fontWeight="500" color="white" lineHeight={33}>
                    $3,620.00
                </Text>
                <XStack ai="center">
                    <Text textAlign="center" fontSize={16} fontWeight="500" lineHeight={24} color="#87dcff">
                        Client Name
                    </Text>
                    <Feather size={25} color="#B7DCFF" name="chevron-right" />
                </XStack>
                <XStack ai="center" gap={24}>
                    <Toast confirm={'OK'} trigger={<ApproveTrigger />}>
                        <Text fontWeight="500" textAlign="center" fontSize={16} color="$textBlack">
                            Sucess
                        </Text>
                        <Text textAlign="center">The discount has been approved {'\n'}sucessfuly</Text>
                    </Toast>
                    <Toast cancel="Cancel" confirm={'Save'} trigger={<RejectTrigger />}>
                        <Text fontWeight="500" textAlign="center" fontSize={16} color="$textBlack">
                            Reject
                        </Text>
                        <Text textAlign="center">Enter a reason to reject this{'\n'} discount request</Text>
                    </Toast>
                </XStack>
            </YStack>
        </YStack>
    )
}
