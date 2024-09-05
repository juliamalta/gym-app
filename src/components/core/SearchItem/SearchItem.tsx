import { Feather } from '@expo/vector-icons'
import React from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import { Image } from 'tamagui'

interface SearchItemProps {
    onSearch: (text: string) => void
    onCancel: () => void // Adicionando a função onCancel
}

export default function SearchItem({ onSearch, onCancel }: SearchItemProps) {
    const handleCancel = () => {
        onSearch('')
        onCancel()
    }
    const searchImage = require('../../../../assets/Group.png')

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextInput
                placeholder="Search"
                onChangeText={onSearch}
                style={{
                    flex: 1,
                    fontSize: 13,
                    backgroundColor: '#d1d5db',
                    borderRadius: 4,
                    height: 48,
                    paddingTop: 5,
                    paddingRight: 8,
                    paddingBottom: 5,
                    paddingLeft: 8,
                    color: 'grey',
                    marginLeft: -5,
                }}
            />
            <TouchableOpacity onPress={handleCancel}>
                <Text style={{ fontSize: 12, color: '#2485e8', fontWeight: '500', marginLeft: 5 }}>Cancel</Text>
            </TouchableOpacity>
        </View>
    )
}
