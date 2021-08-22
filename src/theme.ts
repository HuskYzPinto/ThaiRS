import { createTheme } from "@material-ui/core/styles";
import React from "react";

declare module "@material-ui/core/styles/" {
  //declare theme attributes
  interface Theme {
    // navbar: React.CSSProperties["color"];
  }

  interface ThemeOptions {
    // navbar: React.CSSProperties["color"];
  }
}

declare module "@material-ui/core/styles/createTypography" {
  //font styles declaration
  interface Typography {
    // header?: React.CSSProperties;
  }
  interface TypographyOptions {
    // header?: React.CSSProperties;
  }
}

declare module "@material-ui/core/styles" {
  interface TypographyVariants {
    // header?: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    // header?: React.CSSProperties;
  }
}

declare module "@material-ui/core/Typography" {
  //allow font style override
  interface TypographyPropsVariantOverrides {}
}

declare module "@material-ui/core/styles" {
  //disable xl breakpoints
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: false;
  }
}

// generate theme

const BREAKPOINTS = {
  xs: 0,
  sm: 600,
  md: 768,
  lg: 1366,
};

const theme = createTheme({
  breakpoints: { values: BREAKPOINTS },
});

export default theme;
