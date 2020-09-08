interface Colors {
  [key: string]: string;
}

interface ThemeType {
  colour: Colors;
}

export const theme: ThemeType = {
  colour: {
    red: "#F65261",
    white: "#FFF",
    black: "#232323",
    grey: "#555555",
    darkgray: "#424242",
  },
};
