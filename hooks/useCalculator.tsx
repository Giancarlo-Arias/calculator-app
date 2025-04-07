import { useEffect, useRef, useState } from "react"

enum Operator {
    ADD = '+',
    SUBTRACT = '-',
    MULTIPLY = 'X',
    DIVIDE = '÷'
}

export const useCalculator = () => {

    const [formula, setFormula] = useState('0') // este es el 0 que se muestra en la pantalla

    const [number, setNumber] = useState('0')
    const [previousNumber, setPreviousNumber] = useState('0')


    const lastOperation = useRef<Operator>();

    useEffect(() => {
        if (lastOperation.current ) {
            const firsFormulaPart = formula.split(' ').at(0) // Obtener la primera parte de la formula
            setFormula(`${firsFormulaPart} ${lastOperation.current} ${number}`) // Actualizar la formula con el operador y el número actual
        } else {
            setFormula(number) // Si no hay operación, solo mostrar el número actual
        }
    }
    , [number]) // Cuando el número cambie, se ejecuta la función

    useEffect(() => {
        // Todo: calcular el subResultado
        const subResult = calculate() // Se calcula siempre que algo cambia en la formula
        setPreviousNumber(`${subResult}`) // Se actualiza el resultado automáticamente
    }
    , [number, previousNumber, formula])

    const clear = () => { // Limpiar la calculadora
        setNumber('0')
        setPreviousNumber('0')
        setFormula('')

        lastOperation.current = undefined // Limpiar la última operación
    }

    const toggleSign = () => { // Si es positivo y se presiona, se convierte en negativo y viceversa
        if (number.includes('-')){
            setNumber(number.replace('-',''))// Remover el signo negativo
        }else{
            setNumber('-' + number)// Agregar el signo negativo
        }
        
    }

    const deleteLastNumber = () => {
        if (number.length === 1 || (number.length === 2 && number.startsWith('-'))) {
            setNumber('0')
        } else{
            setNumber(number.slice(0, -1)) // Eliminar el último número del número actual
        }
    }

    const setLastNumber = () => {
        calculateResult() // Calcular el resultado de la operación
        // Calcular el resultado de la operación
        if ( number.endsWith('.')) { // Si el número termina con un punto decimal, eliminarlo
            setPreviousNumber(number.slice(0, -1)) // Eliminar el último número del número actual
        }
 
        setPreviousNumber(number) // Guardar el número actual en el anterior
        setNumber('0') // Reiniciar el número actual
    }

    // dividir el número 
    const divideNumber = () => {
        setLastNumber() // Guardar el número actual en el anterior
        lastOperation.current = Operator.DIVIDE // Guardar la última operación
    }

    // Multiplicar el número
    const multiplyNumber = () => {
        setLastNumber() // Guardar el número actual en el anterior
        lastOperation.current = Operator.MULTIPLY // Guardar la última operación
    }

    // Sumar el número
    const addNumber = () => {
        setLastNumber() // Guardar el número actual en el anterior
        lastOperation.current = Operator.ADD // Guardar la última operación
    }

    // Restar el número
    const subtractNumber = () => {
        setLastNumber() // Guardar el número actual en el anterior
        lastOperation.current = Operator.SUBTRACT // Guardar la última operación
    }

    // Operaciones matemáticas
    const calculate = () => {
        const [firstValue, operation, secondValue] = formula.split(' ');
    
        const num1 = Number(firstValue);
        const num2 = Number(secondValue); // podría ser NaN
    
        if (isNaN(num2)) return num1;
    
        switch (operation) {
            case Operator.ADD:
                return num1 + num2;
            case Operator.SUBTRACT:
                return num1 - num2;
            case Operator.MULTIPLY:
                return num1 * num2;
            case Operator.DIVIDE:
                return num1 / num2;
            default:
                throw new Error(`Operation ${operation} not implemented`);
        }
    }

    // Juntar los resultados
    const calculateResult = () => {
        const results = calculate() // Calcular el resultado de la operación
        setFormula(`${results}`) // Actualizar la formula con el resultado

        lastOperation.current = undefined // Limpiar la última operación
        setPreviousNumber('0') // Limpiar el número anterior
    }
    

    const buildNumber = ( numberString: string) => {
        console.log('numberString', numberString)
        // Verificar si ya existe el punto decimal
        if (number.includes('.') && numberString === '.') return // Si ya existe un punto decimal, no hacer nada

        if (number.startsWith('0') || number.startsWith('-0')) { // Si el número empieza con 0 o -0 entonces se puede agregar un punto decimal
            // Punto decimal
            if (numberString === '.') { // Si el número es un punto decimal
                setNumber(number + numberString) // Agregar el punto decimal
            } else if (numberString === '0' && number.includes('.')) {// Si el número es 0 y ya existe un punto decimal
                setNumber(number + numberString)
            } else if (numberString !== '0' && !number.includes('.')) {// Evaluar si es diferente de 0, no hay punto decimal y es el primer número
                setNumber(numberString)
            } else if (numberString === '0' && !number.includes('.')) {// Evitar el 00.0
                setNumber(number)
            } else {
                setNumber(number + numberString)// Agregar el número al número actual 
            }
        } else {
            setNumber(number + numberString) // numero actual con la concatenacion del numberString
        }
        
    }

    return {
        // Props
        formula,
        number,
        previousNumber,

        // Methods
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
    }
  
}
