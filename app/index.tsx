import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles';
import ThemeText from '@/components/ThemeText';
import CalculatorButton from '@/components/CalculatorButton';
import { Colors } from '@/constants/Colors';

const CalculatorApp = () => {
  return (
    <View style={ globalStyles.calculatorContainer }>

      {/* Resultados */}
      <View style={{paddingHorizontal: 30, marginBottom: 20}}>
      <ThemeText variant='h1'>50 X 50000</ThemeText>
      <ThemeText variant='h2'>250</ThemeText>
      </View>

      {/* Fila de Botones */}
      <View style={globalStyles.row}>
        <CalculatorButton 
        label="AC" 
        blackText 
        color={ Colors.lightGray} 
        onPress={() => console.log('AC')}
        />
        <CalculatorButton 
        label="⁺/-" 
        blackText 
        color={ Colors.lightGray} 
        onPress={() => console.log('⁺/')}
        />
        <CalculatorButton 
        label="del" 
        blackText 
        color={ Colors.lightGray}  
        onPress={() => console.log('del')}
        />
        <CalculatorButton 
        label="÷"
        color={ Colors.orange}  
        onPress={() => 
        console.log('÷')}
        />
      </View >
      {/* Fila de Botones  7 8 9 */}
      <View style={globalStyles.row}>
        <CalculatorButton 
        label="7" 
        blackText 
        color={ Colors.darkGray} 
        onPress={() => console.log('7')}
        />
        <CalculatorButton 
        label="8" 
        blackText 
        color={ Colors.darkGray} 
        onPress={() => console.log('8')}
        />
        <CalculatorButton 
        label="9" 
        blackText 
        color={ Colors.darkGray}  
        onPress={() => console.log('9')}
        />
        <CalculatorButton 
        label="X"
        color={ Colors.orange}  
        onPress={() => 
        console.log('×')}
        />
      </View >
      {/* Fila de Botones 4 5 6 */}
      <View style={globalStyles.row}>
        <CalculatorButton 
        label="4" 
        blackText 
        color={ Colors.darkGray} 
        onPress={() => console.log('4')}
        />
        <CalculatorButton 
        label="5" 
        blackText 
        color={ Colors.darkGray} 
        onPress={() => console.log('5')}
        />
        <CalculatorButton 
        label="6" 
        blackText 
        color={ Colors.darkGray}  
        onPress={() => console.log('6')}
        />
        <CalculatorButton 
        label="−"
        color={ Colors.orange}  
        onPress={() => 
        console.log('−')}
        />
      </View >
      <View style={globalStyles.row}>
        <CalculatorButton 
        label="1" 
        blackText 
        color={ Colors.darkGray} 
        onPress={() => console.log('1')}
        />
        <CalculatorButton 
        label="2" 
        blackText 
        color={ Colors.darkGray} 
        onPress={() => console.log('2')}
        />
        <CalculatorButton 
        label="3" 
        blackText 
        color={ Colors.darkGray}  
        onPress={() => console.log('3')}
        />
        <CalculatorButton 
        label="＋"
        color={ Colors.orange}  
        onPress={() => 
        console.log('＋')}
        />
      </View >

      <View style={globalStyles.row}>
        <CalculatorButton 
        label="0" 
        doubleSized
        blackText 
        color={ Colors.darkGray} 
        onPress={() => console.log('1')}
        />
        <CalculatorButton 
        label="." 
        blackText 
        color={ Colors.darkGray} 
        onPress={() => console.log('.')}
        />
        <CalculatorButton 
        label="="
        color={ Colors.orange}  
        onPress={() => 
        console.log('=')}
        />
      </View >
    </View>
  )
}

export default CalculatorApp;