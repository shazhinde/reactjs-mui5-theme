import { createTheme } from "@mui/material/styles";
import { AppTheme } from "..";

const { palette } = createTheme();

export const theme: AppTheme = {
    dark: {
        palette: {
            mode: "dark",
            primary: palette.augmentColor({
                color: {
                    main: "#AD00FF",
                    contrastText: "#ffffff",
                },
            }),
            secondary: palette.augmentColor({
                color: {
                    main: "#003FF7",
                    contrastText: "#ffffff",
                },
            }),
            text: {
                primary: "#e6e1e6",
                secondary: "#e6e1e6",
            },
            background: {
                default: "#1c1b1e",
                paper: "#1c1b1e",
            },
            error: palette.augmentColor({
                color: {
                    main: "#ba1b1b",
                    contrastText: "#ffffff",
                },
            }),
            success: palette.augmentColor({
                color: {
                    main: "#006e10",
                    contrastText: "#ffffff",
                },
            }),
            info: palette.augmentColor({
                color: {
                    main: "#0062a2",
                    contrastText: "#ffffff",
                },
            }),
            warning: palette.augmentColor({
                color: {
                    main: "#606200",
                    contrastText: "#313300",
                },
            }),
            divider: "#79757f",
            upvote: palette.augmentColor({
                color: {
                    main: "#6342d2",
                    contrastText: "#ffffff",
                },
            }),
            downvote: palette.augmentColor({
                color: {
                    main: "#ba1b1b",
                    contrastText: "#ffffff",
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
    light: {
        palette: {
            mode: "light",
            primary: palette.augmentColor({
                color: {
                    main: "#AD00FF",
                    contrastText: "#ffffff",
                },
            }),
            secondary: palette.augmentColor({
                color: {
                    main: "#cc3300",
                    contrastText: "#ffffff",
                },
            }),
            text: {
                primary: "#1c1b1e",
                secondary: "#1c1b1e",
            },
            background: {
                default: "#fffbff",
                paper: "#fffbff",
            },
            error: palette.augmentColor({
                color: {
                    main: "#ba1b1b",
                    contrastText: "#ffffff",
                },
            }),
            success: palette.augmentColor({
                color: {
                    main: "#006e10",
                    contrastText: "#ffffff",
                },
            }),
            info: palette.augmentColor({
                color: {
                    main: "#0062a2",
                    contrastText: "#ffffff",
                },
            }),
            warning: palette.augmentColor({
                color: {
                    main: "#606200",
                    contrastText: "#313300",
                },
            }),
            divider: "#79757f",
            upvote: palette.augmentColor({
                color: {
                    main: "#6342d2",
                    contrastText: "#ffffff",
                },
            }),
            downvote: palette.augmentColor({
                color: {
                    main: "#ba1b1b",
                    contrastText: "#ffffff",
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
