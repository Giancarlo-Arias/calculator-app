import { Text, type TextProps } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'

interface ThemeTextProps extends TextProps {
    variant?: 'h1' | 'h2'
}

const ThemeText = ({ children, variant = 'h1', ...rest }: ThemeTextProps) => {
  return (
      <Text style={[
        {color: 'white', fontFamily: 'SpaceMono'},
        variant === 'h1' && globalStyles.mainResult,
        variant === 'h2' && globalStyles.subResult,
    ]}
        numberOfLines={1}
        adjustsFontSizeToFit
        {...rest}
      >{children}</Text>
  )
}
export default ThemeText