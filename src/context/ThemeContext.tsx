import { createContext, useContext, useState } from "react";

type Themes = 'dark' | 'light';

type ThemeContextValues = {
    theme : Themes,
    setTheme : any
}

const ThemeContext = createContext<ThemeContextValues>({
    theme : 'light',
    setTheme : () => {}
})

export const ThemeProvider = ({ children }: { children: any }) => {
    const [theme, setTheme] = useState<Themes>('light');

    const setThemeData = (val : Themes) => {
        setTheme(val);
    }
    const contextValue = {
        theme,
        setTheme : setThemeData,
    };

    return (<>
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    </>)
}

export const useTheme = () => useContext(ThemeContext);