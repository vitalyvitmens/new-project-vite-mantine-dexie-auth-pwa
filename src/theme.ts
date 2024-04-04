import { createTheme } from '@mantine/core'
import { Colors } from './constants/colors'

export const theme = createTheme({
  colors: {
    todo: [
      Colors.yellow, // 0 '#FFFF00'
      Colors.green, // 1 '#008000'
      Colors.tan, // 2 '#FFD97F'
      Colors.primary, // 3 '#FFC94C'
      Colors.brown, // 4 '#A52A2A'
      Colors.blue, // 5 '#0000FF'
      Colors.olive, // 6 '#996F00'
      Colors.red, // 7 '#FF0000'
      Colors.darkBrown, // 8 '#332400'
      Colors.black, // 9 '#000000'
    ],
  },
  primaryColor: 'todo',
  primaryShade: { light: 0, dark: 9 },
  fontFamily: 'Open Sans, sans-serif',
  radius: {
    sm: '4',
    md: '8',
    lg: '12',
    xl: '16',
  },
  shadows: {
    xs: '0 1px 2px rgba(0, 0, 0, 0.1)',
    sm: '0 2px 4px rgba(0, 0, 0, 0.1)',
    md: '-3px 3px 2px rgba(0, 0, 0, 0.25)',
    lg: '0 8px 16px rgba(0, 0, 0, 0.1)',
    xl: '0 16px 32px rgba(0, 0, 0, 0.1)',
  },
})
