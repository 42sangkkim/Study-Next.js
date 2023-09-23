import colors from "./colors";
import fontSizes from "./fontSizes";
import letterSpacings from "./letterSpacings";
import lineHeights from "./lineHeights";
import space from "./space";


export const theme = {
  space: space,
  fontSizes: fontSizes,
  letterSpacings: letterSpacings,
  lineHeights: lineHeights,
  colors: colors,
} as const;
