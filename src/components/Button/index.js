import React from "react";
import { Pressable, Text } from "react-native";

const Button = ({title}) => {
    const handlePress = () => {
        console.log('button is clicked')
    }

    return (
        <Pressable>
            <Text>{title}</Text>
        </Pressable>
    )
}
export default Button;