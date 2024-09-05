import { Feather } from '@expo/vector-icons'
import { useMemo, useState } from 'react'
import { Select, YStack, SelectProps } from 'tamagui'

type SelectItemsProps = {
    items: {
        name: string
    }[]
} & SelectProps

export default function SelectDemoItem({ items, ...props }: SelectItemsProps) {
    const [val, setVal] = useState('VerdeTech')
    return (
        <Select defaultValue="" value={val} onValueChange={setVal} {...props}>
            <Select.Trigger backgroundColor="white" height="$4" iconAfter={<Feather size={16} name="chevron-down" />}>
                <Select.Value placeholder="Search..." />
            </Select.Trigger>

            <Select.Adapt when="sm">
                <Select.Sheet snapPoints={[80]} modal dismissOnSnapToBottom>
                    <Select.Sheet.Frame>
                        <Select.Sheet.ScrollView>
                            <Select.Adapt.Contents />
                        </Select.Sheet.ScrollView>
                        <YStack marginHorizontal="auto" zIndex={10}>
                            <Feather size={20} name="chevron-down" />
                        </YStack>
                    </Select.Sheet.Frame>
                    <Select.Sheet.Overlay />
                </Select.Sheet>
            </Select.Adapt>

            <Select.Content>
                <Select.ScrollUpButton
                    alignItems="center"
                    justifyContent="center"
                    position="relative"
                    width="100%"
                    height="$3">
                    <YStack zIndex={10}>
                        <Feather size={20} name="chevron-down" />
                    </YStack>
                </Select.ScrollUpButton>
                <Select.Viewport>
                    <Select.Group>
                        {useMemo(
                            () =>
                                items.map((item, i) => {
                                    return (
                                        <Select.Item index={i} key={item.name} value={item.name}>
                                            <Select.ItemText>{item.name}</Select.ItemText>
                                            <Select.ItemIndicator marginLeft="auto">
                                                <Feather name="check" size={16} />
                                            </Select.ItemIndicator>
                                        </Select.Item>
                                    )
                                }),
                            [items]
                        )}
                    </Select.Group>
                </Select.Viewport>
                <Select.ScrollDownButton
                    alignItems="center"
                    justifyContent="center"
                    position="relative"
                    width="100%"
                    height="$3">
                    <YStack zIndex={10}>
                        <Feather size={20} name="chevron-down" />
                    </YStack>
                </Select.ScrollDownButton>
            </Select.Content>
        </Select>
    )
}
