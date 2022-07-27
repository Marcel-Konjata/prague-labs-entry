// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      biege: string;
      green: string;
      lightText: string;
      primaryText: string;
    };
    bp: {
      sm: "600px";
      md: "960px";
      xl: "1400px";
    };
  }
}
