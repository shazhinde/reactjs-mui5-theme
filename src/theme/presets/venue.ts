import { createTheme } from "@mui/material/styles";
import { AppTheme } from "..";
import {light} from "@mui/material/styles/createPalette";

const { palette } = createTheme();

// const venueLight = createTheme({
//     palette: {
//         mode: "light",
//     },
// });
//
// const venueDark = createTheme({
//     palette: {
//         mode: "dark",
//     },
// });

const venuePrimary = "#9E00FF";
const venueSecondary = "#D99AFF";
const venuePrimaryText = "#03060B";
const venueSecondaryText = "#0F0F0F";
const venueBGDefault = "#FAFAFA";
const venueBGPaper = "#ffffff";
const venueContrast = "#ffffff";
const venueError = "#D32F2F";
const venueWarning = "#EF6C00";
const venueInfo = "#0288D1";


export const theme: AppTheme = {
    light: {
        palette: {
            mode: "light",
            primary: palette.augmentColor({
                color: {
                    main: venuePrimary,
                    contrastText: venueContrast,
                },
            }),
            secondary: palette.augmentColor({
                color: {
                    main: venueSecondary,
                    contrastText: venueContrast,
                },
            }),
            text: {
                primary: venuePrimaryText,
                secondary: venueSecondaryText,
            },
            background: {
                default: venueBGDefault,
                paper: venueBGPaper,
            },
            error: palette.augmentColor({
                color: {
                    main: venueError,
                    contrastText: venueContrast,
                },
            }),
            success: palette.augmentColor({
                color: {
                    main: "#006e10",
                    contrastText: venueContrast,
                },
            }),
            info: palette.augmentColor({
                color: {
                    main: "#0062a2",
                    contrastText: venueContrast,
                },
            }),
            warning: palette.augmentColor({
                color: {
                    main: venueWarning,
                    contrastText: "#313300",
                },
            }),
            divider: "#79757f",
            upvote: palette.augmentColor({
                color: {
                    main: "#6342d2",
                    contrastText: venueContrast,
                },
            }),
            downvote: palette.augmentColor({
                color: {
                    main: venueError,
                    contrastText: venueContrast,
                },
            }),
            containerPrimary: palette.augmentColor({
                color: {
                    main: "#e8deff",
                    contrastText: "#1c0062",
                },
            }),
            containerSecondary: palette.augmentColor({
                color: {
                    main: "#e7dff8",
                    contrastText: "#1d192b",
                },
            }),
        },
    },
    dark: {
        palette: {
            mode: "dark",
            primary: palette.augmentColor({
                color: {
                    main: venuePrimary,
                    contrastText: venueContrast,
                },
            }),
            secondary: palette.augmentColor({
                color: {
                    main: venueSecondary,
                    contrastText: venueContrast,
                },
            }),
            text: {
                primary: venueContrast,
                secondary: venueContrast,
            },
            background: {
                default: venuePrimaryText,
                paper: venueSecondaryText,
            },
            error: palette.augmentColor({
                color: {
                    main: venueError,
                    contrastText: venueContrast,
                },
            }),
            success: palette.augmentColor({
                color: {
                    main: "#006e10",
                    contrastText: venueContrast,
                },
            }),
            info: palette.augmentColor({
                color: {
                    main: "#0062a2",
                    contrastText: venueContrast,
                },
            }),
            warning: palette.augmentColor({
                color: {
                    main: venueWarning,
                    contrastText: "#313300",
                },
            }),
            divider: "#79757f",
            upvote: palette.augmentColor({
                color: {
                    main: "#6342d2",
                    contrastText: venueContrast,
                },
            }),
            downvote: palette.augmentColor({
                color: {
                    main: venueError,
                    contrastText: venueContrast,
                },
            }),
            containerPrimary: palette.augmentColor({
                color: {
                    main: "#e8deff",
                    contrastText: "#1c0062",
                },
            }),
            containerSecondary: palette.augmentColor({
                color: {
                    main: "#e7dff8",
                    contrastText: "#1d192b",
                },
            }),
        },
    },
};
