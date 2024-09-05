import Ionicons from '@expo/vector-icons/Ionicons'
import { router } from 'expo-router'
import React from 'react'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Separator, YStack, YGroup, XStack, Text } from 'tamagui'

import { Card } from '@/components/core/Card'
import { ListItem } from '@/components/core/ListItem'
import { ListSales } from '@/components/core/ListItem/ListItemOptions'
import { SearchItem } from '@/components/core/SearchItem'

export default function SalesOrdersPage() {
    const [searchText, setSearchText] = useState('') // Estado para o texto de pesquisa
    const [filteredProjects, setFilteredProjects] = useState(ListSales) // Estado para projetos filtrados inicialmente definido como a lista completa
    console.log(searchText)
    // Função para filtrar os projetos com base no texto de pesquisa
    const filterProjects = (text) => {
        const filtered = ListSales.filter((item) => item.name.toLowerCase().includes(text.toLowerCase()))
        setFilteredProjects(filtered)
        setSearchText(text) // Atualiza o texto de pesquisa no estado
    }
    const handleCancel = () => {
        setSearchText('')
        setFilteredProjects(ListSales)
    }

    return (
        <YStack paddingBottom={8} jc="space-between" f={1} ai="flex-end">
            <YGroup width="100%" gap={20} pt={16}>
                {filteredProjects.map((item, index) => (
                    <YGroup.Item key={index}>
                        <TouchableOpacity onPress={() => router.push(item.link as never)}>
                            <Card name={item.name} desc={item.desc} />
                        </TouchableOpacity>
                    </YGroup.Item>
                ))}
            </YGroup>
            <XStack>
                <Ionicons name="add-circle" size={60} color="#3b0764" />
            </XStack>
        </YStack>
    )
}
