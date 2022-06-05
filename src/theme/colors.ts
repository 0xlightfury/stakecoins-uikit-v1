import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "rgb(44, 90, 158)",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#7584e9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#452a7a",
  gold: "#FFC700",
  silver: "#B2B2B2",
  bronze: "#E7974D",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: "rgb(60, 55, 66)",
  backgroundDisabled: "rgb(60, 55, 66)",
  backgroundAlt: "rgb(18, 24, 39)",
  cardBorder: "rgb(82, 75, 99)",
  contrast: "#191326",
  dropdown: "rgb(44, 90, 158)",
  dropdownDeep: "#EEEEEE",
  invertedContrast: "#5c8fdd",
  input: "#121827",
  inputSecondary: "#d7caec",
  tertiary: "rgb(60, 55, 66)",
  text: "rgb(10, 171, 243)",
  textDisabled: "#BDC2C4",
  textSubtle: "rgb(92, 143, 221)",
  disabled: "rgb(60, 55, 66)",
  gradients: {
    bubblegum: "rgb(31 43 70)",
    inverseBubblegum: "linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)",
    cardHeader: "#121827",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#9A6AFF",
  background: "#1f2b46",
  backgroundDisabled: "#3c3742",
  backgroundAlt: "#27262c",
  cardBorder: "#524B63",
  contrast: "#5c8fdd",
  dropdown: "#1E1D20",
  dropdownDeep: "#100C18",
  invertedContrast: "#191326",
  input: "#483f5a",
  inputSecondary: "#262130",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#5c8fdd",
  disabled: "#524B63",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",
    cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};
