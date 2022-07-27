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
  }
}
