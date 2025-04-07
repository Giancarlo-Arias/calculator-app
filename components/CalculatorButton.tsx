import { View, Text, Pressable } from 'react-native'
import React from 'react'
import * as Haptics from 'expo-haptics';


import { globalStyles } from '../styles/global-styles';
import { Colors } from '@/constants/Colors';

interface CalculatorButtonProps {
    label: string,
    color?: string,
    blackText?: boolean, // Opcional y por defecto es false
    doubleSized?: boolean, // Opcional y por defecto es false
    onPress: () => void, // Función que no recibe argumentos y no retorna nada 
}

const CalculatorButton = ({ 
    label, 
    color = Colors.darkGray, 
    blackText = false, 
    doubleSized = false,
    onPress 
}: CalculatorButtonProps) => {
  return (
    <Pressable 
        style={ ({ pressed }) => ({
            ...globalStyles.button,
            backgroundColor: color,
            opacity: pressed ? 0.8 : 1,
            width: doubleSized ? 180 : 80,
        }) }
        onPress={() => {
            Haptics.selectionAsync() 
            onPress() 
        }}
        >
        <Text style={ {
            ...globalStyles.buttonText, // los tres puntos son para desglosar el objeto y no sobreescribirlo completamente
            color: 'white',
        } }>{label}</Text>
    </Pressable>
  )
}

export default CalculatorButton