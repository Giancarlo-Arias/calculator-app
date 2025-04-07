import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles';
import ThemeText from '@/components/ThemeText';
import CalculatorButton from '@/components/CalculatorButton';
import { Colors } from '@/constants/Colors';
import { useCalculator } from '@/hooks/useCalculator';
const CalculatorApp = () => {

  const {
    formula,
    number,
    previousNumber,
    clear,
    buildNumber,
    toggleSign,
    deleteLastNumber,
    divideNumber,
    multiplyNumber,
    addNumber,
    subtractNumber,
    calculate,
    calculateResult,
  } = useCalculator()

  return (
    <View style={ globalStyles.calculatorContainer }>

      {/* Resultados */}
      <View style={{paddingHorizontal: 30, marginBottom: 20}}>
      <ThemeText variant='h1'>{ formula }</ThemeText>

      {
       formula === previousNumber ? ( 
          <ThemeText variant='h2'> </ThemeText>
        ) : (
          <ThemeText variant='h2'>{ previousNumber }</ThemeText>
        )
      }
      
      </View>

      {/* Fila de Botones */}
      <View style={globalStyles.row}>
        <CalculatorButton 
        label="AC" 
        blackText 
        color={ Colors.lightGray} 
        onPress={() => clear()}
        />
        <CalculatorButton 
        label="⁺/-" 
        blackText 
        color={ Colors.lightGray} 
        onPress={() => toggleSign()}
        />
        <CalculatorButton 
        label="del" 
        blackText 
        color={ Colors.lightGray}  
        onPress={() => deleteLastNumber()}
        />
        <CalculatorButton 
        label="÷"
        color={ Colors.orange}  
        onPress={() => 
        divideNumber()}
        />
      </View >
      {/* Fila de Botones  7 8 9 */}
      <View style={globalStyles.row}>
        <CalculatorButton 
        label="7" 
        blackText 
        color={ Colors.darkGray} 
        onPress={() => buildNumber('7')}
        />
        <CalculatorButton 
        label="8" 
        blackText 
        color={ Colors.darkGray} 
        onPress={() => buildNumber('8')}
        />
        <CalculatorButton 
        label="9" 
        blackText 
        color={ Colors.darkGray}  
        onPress={() => buildNumber('9')} 
        />
        <CalculatorButton 
        label="X"
        color={ Colors.orange}  
        onPress={() => 
        multiplyNumber()}
        />
      </View >
      {/* Fila de Botones 4 5 6 */}
      <View style={globalStyles.row}>
        <CalculatorButton 
        label="4" 
        blackText 
        color={ Colors.darkGray} 
        onPress={() => buildNumber('4')}
        />
        <CalculatorButton 
        label="5" 
        blackText 
        color={ Colors.darkGray} 
        onPress={() => buildNumber('5')}
        />
        <CalculatorButton 
        label="6" 
        blackText 
        color={ Colors.darkGray}  
        onPress={() => buildNumber('6')}
        />
        <CalculatorButton 
        label="−"
        color={ Colors.orange}  
        onPress={() => 
        subtractNumber()}
        />
      </View >
      <View style={globalStyles.row}>
        <CalculatorButton 
        label="1" 
        blackText 
        color={ Colors.darkGray} 
        onPress={() => buildNumber('1')}
        />
        <CalculatorButton 
        label="2" 
        blackText 
        color={ Colors.darkGray} 
        onPress={() => buildNumber('2')}
        />
        <CalculatorButton 
        label="3" 
        blackText 
        color={ Colors.darkGray}  
        onPress={() => buildNumber('3')}
        />
        <CalculatorButton 
        label="＋"
        color={ Colors.orange}  
        onPress={() => 
        addNumber()}
        />
      </View >

      <View style={globalStyles.row}>
        <CalculatorButton 
        label="0" 
        doubleSized
        blackText 
        color={ Colors.darkGray} 
        onPress={() => buildNumber('0')}
        />
        <CalculatorButton 
        label="." 
        blackText 
        color={ Colors.darkGray} 
        onPress={() => buildNumber('.')}
        />
        <CalculatorButton 
        label="="
        color={ Colors.orange}  
        onPress={() => 
        calculateResult()}
        />
      </View >
    </View>
  )
}

export default CalculatorApp;