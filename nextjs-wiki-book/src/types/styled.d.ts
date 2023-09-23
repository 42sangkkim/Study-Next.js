/**
 * Responsive 속성
 * CSS 속성값을 브레이크포인트별로 지정할 수 있다
 * T는 CSS 속성값의 타입
 */
export type Responsive<T> = {
  base?: T
  sm?: T
  md?: T
  lg?: T
  xl?: T
}

export type ResponsivePropType<T> = T | Responsive<T>

/**
 * Flex
 */
type SelfPosition =
  | 'center'
  | 'end'
  | 'flex-end'
  | 'flex-start'
  | 'self-end'
  | 'self-start'
  | 'start'

type ContentPosition = 'center' | 'end' | 'flex-end' | 'flex-start' | 'start'

type ContentDistribution =
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'stretch'

type CSSPropertyGlobals =
  | '-moz-initial'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'unset'

export type CSSPropertyAlignItems =
  | CSSPropertyGlobals
  | SelfPosition
  | 'baseline'
  | 'normal'
  | 'stretch'
  // eslint-disable-next-line @typescript-eslint/ban-types
  | (string & {})

export type CSSPropertyAlignContent =
  | CSSPropertyGlobals
  | ContentDistribution
  | 'center'
  | 'end'
  | 'flex-end'
  | 'flex-start'
  | 'start'
  | 'baseline'
  | 'normal'
  // eslint-disable-next-line @typescript-eslint/ban-types
  | (string & {})

export type CSSPropertyJustifyItems =
  | CSSPropertyGlobals
  | SelfPosition
  | 'baseline'
  | 'left'
  | 'legacy'
  | 'normal'
  | 'right'
  | 'stretch'
  // eslint-disable-next-line @typescript-eslint/ban-types
  | (string & {})

export type CSSPropertyJustifyContent =
  | CSSPropertyGlobals
  | ContentDistribution
  | ContentPosition
  | 'left'
  | 'normal'
  | 'right'
  // eslint-disable-next-line @typescript-eslint/ban-types
  | (string & {})

export type CSSPropertyFlexWrap =
  | CSSPropertyGlobals
  | 'nowrap'
  | 'wrap'
  | 'wrap-reverse'

export type CSSPropertyFlexDirection =
  | CSSPropertyGlobals
  | 'column'
  | 'column-reverse'
  | 'row'
  | 'row-reverse'

export type CSSPropertyJustifySelf =
  | CSSPropertyGlobals
  | SelfPosition
  | 'auto'
  | 'baseline'
  | 'left'
  | 'normal'
  | 'right'
  | 'stretch'
  // eslint-disable-next-line @typescript-eslint/ban-types
  | (string & {})

export type CSSPropertyAlignSelf =
  | CSSPropertyGlobals
  | SelfPosition
  | 'auto'
  | 'baseline'
  | 'normal'
  | 'stretch'
  // eslint-disable-next-line @typescript-eslint/ban-types
  | (string & {})

/**
 * Grid
 */

// eslint-disable-next-line @typescript-eslint/ban-types
type GridLine = 'auto' | (string & {})

export type CSSPropertyGridColumn =
  | CSSPropertyGlobals
  | GridLine
  // eslint-disable-next-line @typescript-eslint/ban-types
  | (string & {})

// eslint-disable-next-line @typescript-eslint/ban-types
export type CSSPropertyGridRow = CSSPropertyGlobals | GridLine | (string & {})

export type CSSPropertyGridAutoFlow =
  | CSSPropertyGlobals
  | 'column'
  | 'dense'
  | 'row'
  // eslint-disable-next-line @typescript-eslint/ban-types
  | (string & {})

// eslint-disable-next-line @typescript-eslint/ban-types
export type CSSPropertyGridArea = CSSPropertyGlobals | GridLine | (string & {})
