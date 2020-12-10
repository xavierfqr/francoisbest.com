import { ThemeOverride, useColorModeValue } from '@chakra-ui/react'
import { transparentize } from '@chakra-ui/theme-tools'
import { defaultTheme } from '@47ng/chakra-next'

export const linkColors = {
  light: 'accent.500',
  dark: 'accent.300'
}

export function useLinkColor() {
  return useColorModeValue(linkColors.light, linkColors.dark)
}

// --

export function getTagBackgroundDark(
  accentKey: ColorKeys,
  theme: ThemeOverride
) {
  return transparentize(theme.colors?.[accentKey][200], 0.1)(theme)
}

// --

export const colors = {
  ...defaultTheme.colors,
  defaultAccent: {
    50: '#e3f2fc',
    100: '#ddf2ff',
    200: '#abd2fc',
    300: '#5daafc',
    400: '#1a85ff',
    500: '#006be6',
    600: '#0053b4',
    700: '#003b82',
    800: '#002451',
    900: '#000d21'
  },
  accent: {
    // See src/components/Accent.tsx for CSS variable definition
    50: 'var(--colors-accent-50)',
    100: 'var(--colors-accent-100)',
    200: 'var(--colors-accent-200)',
    300: 'var(--colors-accent-300)',
    400: 'var(--colors-accent-400)',
    500: 'var(--colors-accent-500)',
    600: 'var(--colors-accent-600)',
    700: 'var(--colors-accent-700)',
    800: 'var(--colors-accent-800)',
    900: 'var(--colors-accent-900)'
  }
}

export type ColorKeys = keyof typeof colors

export const accentKeys: ColorKeys[] = [
  'defaultAccent',
  'green',
  'indigo',
  'orange',
  'blue',
  'pink',
  'teal',
  'purple',
  'red'
]

// export const theme: CustomTheme = {
//   ...defaultTheme,
//   colors: {
//     ...defaultTheme.colors,
//     ...colors
//   }
//   // badgeBgDark: {
//   //   ...accentKeys.reduce(
//   //     (obj, key) => ({
//   //       ...obj,
//   //       [key]: generateAlphaColors(colors[key][200])[300]
//   //     }),
//   //     {}
//   //   ),
//   //   accent: '--var(--colors-badge-bg-dark)',
//   //   gray: generateAlphaColors(colors.gray[200])[300]
//   // }
// }