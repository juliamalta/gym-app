import { router } from 'expo-router'
import React from 'react'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Separator, YStack, YGroup } from 'tamagui'

import CardTrainer from '@/components/core/CardTrainer/CardTrainer'
import { ListItem } from '@/components/core/ListItem'
import { ListProject } from '@/components/core/ListItem/ListItemOptions'
import { SearchItem } from '@/components/core/SearchItem'

export default function ProjectPage() {
    const [searchText, setSearchText] = useState('') // Estado para o texto de pesquisa
    const [filteredProjects, setFilteredProjects] = useState(ListProject) // Estado para projetos filtrados inicialmente definido como a lista completa
    console.log(searchText)
    // Função para filtrar os projetos com base no texto de pesquisa
    const filterProjects = (text) => {
        const filtered = ListProject.filter((item) => item.name.toLowerCase().includes(text.toLowerCase()))
        setFilteredProjects(filtered)
        setSearchText(text) // Atualiza o texto de pesquisa no estado
    }
    const handleCancel = () => {
        setSearchText('')
        setFilteredProjects(ListProject)
    }

    return (
        <YStack paddingBottom={8}>
            <YStack>
                <SearchItem onSearch={filterProjects} onCancel={handleCancel} />
            </YStack>
            <YGroup gap={20} pt={16}>
                {filteredProjects.map((item, index) => (
                    <YGroup.Item key={index}>
                        <TouchableOpacity onPress={() => router.push(item.link as never)}></TouchableOpacity>
                    </YGroup.Item>
                ))}
            </YGroup>
        </YStack>
    )
}
