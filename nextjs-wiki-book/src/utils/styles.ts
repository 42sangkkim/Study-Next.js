import { theme } from 'theme'
import type { ResponsiveProp, Responsive } from 'types'

export type AppTheme = typeof theme
type SpaceThemeKey = keyof typeof theme.space
type ColorThemeKey = keyof typeof theme.colors
type FontSizeThemeKey = keyof typeof theme.fontSizes
type LetterSpacingThemeKey = keyof typeof theme.letterSpacing
type LineHeightThemeKey = keyof typeof theme.lineHeights

// eslint-disable-next-line @typescript-eslint/ban-types
export type Space = SpaceThemeKey | (string & {})
// eslint-disable-next-line @typescript-eslint/ban-types
export type Color = ColorThemeKey | (string & {})
// eslint-disable-next-line @typescript-eslint/ban-types
export type FontSize = FontSizeThemeKey | (string & {})
// eslint-disable-next-line @typescript-eslint/ban-types
export type LetterSpacing = LetterSpacingThemeKey | (string & {})
// eslint-disable-next-line @typescript-eslint/ban-types
export type LineHeight = LineHeightThemeKey | (string & {})

const BREAKPOINTS: { [key: string]: string } = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
}

/**
 * Responsive 타입을 CSS 속성과 그 값으로 변환
 * @param propKey CSS 속성
 * @param prop Responsive 타입
 * @param theme AppTheme
 * @returns CSS 속성과 그 값
 */
export function toPropValue<T>(
  propKey: string,
  prop?: Responsive<T>,
  theme?: AppTheme,
) {
  if (prop === undefined) return undefined

  if (isResponsivePropType(prop)) {
    const result = []
    for (const responsiveKey in prop) {
      if (responsiveKey === 'base') {
        result.push(
          `${propKey}: ${toThemeValueIfNeeded(
            propKey,
            prop[responsiveKey],
            theme,
          )};`,
        )
      } else if (
        responsiveKey === 'sm' ||
        responsiveKey === 'md' ||
        responsiveKey === 'lg' ||
        responsiveKey === 'xl'
      ) {
        const breakpoint = BREAKPOINTS[responsiveKey]
        const style = `${propKey}: ${toThemeValueIfNeeded(
          propKey,
          prop[responsiveKey],
          theme,
        )};`
        result.push(`@media (min-width: ${breakpoint}) { ${style} }`)
      }
    }
    return result.join('\n')
  }

  return `${propKey}: ${toThemeValueIfNeeded(propKey, prop, theme)};`
}

const SPACE_KEYS = new Set([
  'margin',
  'margin-top',
  'margin-left',
  'margin-bottom',
  'margin-right',
  'padding',
  'padding-top',
  'padding-left',
  'padding-bottom',
  'padding-right',
])
const COLOR_KEYS = new Set(['color', 'background-color'])
const FONT_SIZE_KEYS = new Set(['font-size'])
const LETTER_SPACING_KEYS = new Set(['letter-spacing'])
const LINE_HEIGHT_KEYS = new Set(['line-height'])

/**
 * Theme에 지정된 CSS 속성 값으로 변환
 * @param propKey CSS 속성
 * @param value CSS 속성 값
 * @param theme AppTheme
 * @returns CSS 속성 값
 */
function toThemeValueIfNeeded<T>(propKey: string, value: T, theme?: AppTheme) {
  if (
    theme &&
    theme.space &&
    SPACE_KEYS.has(propKey) &&
    isSpaceThemeKeys(value, theme)
  ) {
    return theme.space[value]
  } else if (
    theme &&
    theme.colors &&
    COLOR_KEYS.has(propKey) &&
    isColorThemeKeys(value, theme)
  ) {
    return theme.colors[value]
  } else if (
    theme &&
    theme.fontSizes &&
    FONT_SIZE_KEYS.has(propKey) &&
    isFontSizeThemeKeys(value, theme)
  ) {
    return theme.fontSizes[value]
  } else if (
    theme &&
    theme.letterSpacing &&
    LETTER_SPACING_KEYS.has(propKey) &&
    isLetterSpacingThemeKeys(value, theme)
  ) {
    return theme.letterSpacing[value]
  } else if (
    theme &&
    theme.lineHeights &&
    LINE_HEIGHT_KEYS.has(propKey) &&
    isLineHeightThemeKeys(value, theme)
  ) {
    return theme.lineHeights[value]
  }

  return value
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isResponsivePropType<T>(prop: any): prop is ResponsiveProp<T> {
  return (
    prop &&
    (prop.base !== undefined ||
      prop.sm !== undefined ||
      prop.md !== undefined ||
      prop.lg !== undefined ||
      prop.xl !== undefined)
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isSpaceThemeKeys(prop: any, theme: AppTheme): prop is Space {
  return Object.keys(theme.space).filter((key) => key == prop).length > 0
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isColorThemeKeys(prop: any, theme: AppTheme): prop is Color {
  return Object.keys(theme.colors).filter((key) => key == prop).length > 0
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isFontSizeThemeKeys(prop: any, theme: AppTheme): prop is FontSize {
  return Object.keys(theme.fontSizes).filter((key) => key == prop).length > 0
}

function isLetterSpacingThemeKeys(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prop: any,
  theme: AppTheme,
): prop is LetterSpacing {
  return (
    Object.keys(theme.letterSpacing).filter((key) => key == prop).length > 0
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isLineHeightThemeKeys(prop: any, theme: AppTheme): prop is LineHeight {
  return Object.keys(theme.lineHeights).filter((key) => key == prop).length > 0
}
