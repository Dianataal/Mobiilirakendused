import React from "react";
import { Pressable, Text } from "react-native";
import {styles} from './styles';

const Button = ({title}) => {
    const handlePress = () => {
        console.log('button is clicked')
    }

    return (
        <Pressable > 
            //sinna pressable sisse vaja teha see style asi
            <Text>{title}</Text>
        </Pressable>
    )
}
export default Button;