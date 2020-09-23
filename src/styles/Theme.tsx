interface IColors {
  [key: string]: string;
}

interface IThemeType {
  color: IColors;
}

export const theme: IThemeType = {
  color: {
    red: "#F65261",
    white: "#FFF",
    black: "#232323",
    grey: "#555555",
    darkgray: "#424242",
  },
};
