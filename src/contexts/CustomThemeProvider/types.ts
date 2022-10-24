export interface iTheme {
  name: string;

  colors: {
    primary: string;
    primaryFocus: string;
    primaryNegative: string;

    grey4: string;
    grey3: string;
    grey2: string;
    grey1: string;
    grey0: string;

    whiteFixed: string;
    blackFixed: string;

    sucess: string;
    negative: string;
  };

  font: {
    size1: string;
    size2: string;
    size3: string;
    size4: string;

    weight1: number;
    weight2: number;
    weight3: number;
    weight4: number;
    weight5: number;
    weight6: number;

    height1: string;
    height2: string;
    height3: string;
    height4: string;
    height5: string;
    height0: string;
  };
}

export interface iThemeContext {
  theme: iTheme;
  toggleTheme(): void;
}
