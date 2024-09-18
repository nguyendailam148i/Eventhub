import { View, Text } from 'react-native'
import React from 'react'

interface Props {
    text: string;
    color?: string;
    size?: number;
}

const TextComponent = () => {
    return (
        <View>
            <Text>TextComponent</Text>
        </View>
    )
}

export default TextComponent