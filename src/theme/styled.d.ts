export type Color = string

export interface Colors {
  color: Color
  background: Color
}

declare module 'styled-components' {
  export interface DefaultTheme extends Colors {

  }
}
