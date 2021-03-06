export type Color = string

export interface Colors {

  // backgrounds
  bg1: Color
  bg2: Color
  bg3: Color
  bg4: Color
  bg5: Color

  // text
  text1: Color
  text2: Color
  text3: Color
  text4: Color
  text5: Color

  primary1: color

  // other
  blue1: Color
}

declare module 'styled-components' {
  export interface DefaultTheme extends Colors {
    // media queries
    mediaWidth: {
      upToExtraSmall: ThemedCssFunction<DefaultTheme>
      upToSmall: ThemedCssFunction<DefaultTheme>
      upToMedium: ThemedCssFunction<DefaultTheme>
      upToLarge: ThemedCssFunction<DefaultTheme>
    }

    // css snippets
    flexColumnNoWrap: FlattenSimpleInterpolation
    flexRowNoWrap: FlattenSimpleInterpolation
  }
}
