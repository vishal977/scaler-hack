import { ColorValue } from "react-native";

export interface KeyValuePairs {
  [key: string]: string;
}

export interface Themes {
  primary: ColorValue,
  lightPrimary: ColorValue,
  darkPrimary: ColorValue,
  purple: ColorValue,
  tertiary: ColorValue,
  text: ColorValue,
  bg: ColorValue,
  darkGrey: ColorValue,
  gray: ColorValue,
  gray2: ColorValue,
  gray3: ColorValue,
  gray4: ColorValue,
  gray5: ColorValue,
  blue: ColorValue,
  appBackGround: ColorValue,
  lightGreen: ColorValue,
  lightGreen2: ColorValue,
  red: ColorValue,
  transparent: ColorValue,
  isDark: boolean,
  orange: ColorValue,
  lightOrange: ColorValue,
  lightOrange2: ColorValue,
  green: ColorValue,
  lightBlue: ColorValue,
  lightBlue2: ColorValue,
  lightRed: ColorValue,
  violet: ColorValue,
  lightViolet: ColorValue,
}

export interface Colors {
  light: Themes,
  dark: Themes,
}