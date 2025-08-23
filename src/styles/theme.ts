export interface DefaultTheme {
  color: {
    neutral: {
      B70: string;
      B60: string;
      B50: string;
      B40: string;
      B30: string;
      B20: string;
      B10: string;
      B00: string;
      white: string;
      black: string;
    };
    primary: {
      P60: string;
      P50: string;
      P40: string;
      P30: string;
      P20: string;
      P10: string;
      P00: string;
    };
    secondary: {
      S60: string;
      S50: string;
      S40: string;
      S30: string;
      S20: string;
      S10: string;
    };
    warning: {
      R30: string;
      R00: string;
      W30: string;
      W20: string;
      W10: string;
      W00: string;
    };
  };
  typography: {
    [key in TypographyKey]: {
      fontSize: string;
      fontWeight: number;
    };
  };
}

export type TypographyKey =
  | `title1-${1 | 2 | 3}`
  | `body1-${1 | 2 | 3}`
  | `body2-${1 | 2 | 3}`
  | `small1-${1 | 2 | 3}`
  | `small2-${1 | 2 | 3}`;

const theme: DefaultTheme = {
  color: {
    neutral: {
      B70: "#2A2A2E",
      B60: "#3F3F46",
      B50: "#52525B",
      B40: "#71717A",
      B30: "#A1A1AA",
      B20: "#D4D4D8",
      B10: "#E4E4E7",
      B00: "#F4F4F5",
      white: "#FFFFFF",
      black: "000000",
    },

    primary: {
      P60: "#2A2A2E",
      P50: "#3F3F46",
      P40: "#52525B",
      P30: "#71717A",
      P20: "#A1A1AA",
      P10: "#D4D4D8",
      P00: "#E4E4E7",
    },

    secondary: {
      S60: "#36A373",
      S50: "#4FCF9F",
      S40: "#79DAB3",
      S30: "#A2E6C8",
      S20: "#D1F3E2",
      S10: "#EBF7F1",
    },

    warning: {
      R30: "#F04343",
      R00: "#FFEFEF",
      W30: "#D78205",
      W20: "#F0AD4A",
      W10: "#F1C788",
      W00: "#FCF1E2",
    },
  },

  typography: {
    // Title (20px)
    "title1-1": { fontSize: "20px", fontWeight: 700 },
    "title1-2": { fontSize: "20px", fontWeight: 600 },
    "title1-3": { fontSize: "20px", fontWeight: 400 },

    // Body1 (16px)
    "body1-1": { fontSize: "16px", fontWeight: 700 },
    "body1-2": { fontSize: "16px", fontWeight: 600 },
    "body1-3": { fontSize: "16px", fontWeight: 400 },

    // Body2 (14px)
    "body2-1": { fontSize: "14px", fontWeight: 700 },
    "body2-2": { fontSize: "14px", fontWeight: 600 },
    "body2-3": { fontSize: "14px", fontWeight: 400 },

    // Small1 (12px)
    "small1-1": { fontSize: "12px", fontWeight: 700 },
    "small1-2": { fontSize: "12px", fontWeight: 600 },
    "small1-3": { fontSize: "12px", fontWeight: 400 },

    // Small2 (10px)
    "small2-1": { fontSize: "10px", fontWeight: 700 },
    "small2-2": { fontSize: "10px", fontWeight: 600 },
    "small2-3": { fontSize: "10px", fontWeight: 400 },
  },
};

export type ColorType = typeof theme.color;
export type ColorKeyType = keyof ColorType;

export type NeutralType = typeof theme.color.neutral;
export type NeutralKeyType = keyof NeutralType;

export type PrimaryType = typeof theme.color.primary;
export type PrimaryKeyType = keyof PrimaryType;

export type SecondaryType = typeof theme.color.secondary;
export type SecondaryKeyType = keyof SecondaryType;

export type WarningType = typeof theme.color.warning;
export type WarningKeyType = keyof WarningType;

export type TypographyType = typeof theme.typography;
export type TypographyKeyType = keyof TypographyType;

export default theme;
