import { mapValues } from 'lodash';
import Color from 'color';
import { createGlobalStyle } from 'styled-components';

export type Theme<Config extends ThemeConfig> = {
  colors: Record<keyof Config['colors'], Shades>;
  spacing: Record<string, string | number>;
  rounding: Record<string, string | number>;
}

interface Shades {
  primary: string;
  light: string;
  dark: string;
  pale: string;
}

interface ThemeConfig {
  colors: Record<any, string>;
  spacing: Record<string, string | number>;
  rounding: Record<string, string | number>;
}

const createTheme = <Config extends ThemeConfig>({
  colors,
  spacing,
  rounding,
}: Config): Theme<Config> => {
  const calculatedColors = mapValues<Record<keyof Config['colors'], string>, Shades>(colors, (value) => {
    const color = Color(value);

    return {
      primary: value,
      dark: color.darken(0.05).hex(),
      light: color.lighten(0.5).hex(),
      pale: color.desaturate(0.2).lighten(0.6).hex(),
    };
  });

  return {
    colors: calculatedColors,
    spacing,
    rounding,
  };
};

export const theme = createTheme({
  colors: {},
  spacing: {},
  rounding: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    '2xl': 20,
    '3xl': 24,
    '4xl': 28,
  },
});

export const GlobalStyle = createGlobalStyle({
  '*': {
    fontFamily: 'Roboto',
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },
});

