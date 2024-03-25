'use client';

import { Theme, ThemeColorPalette } from '@/style/theme.css';
import { defaultThemeClass } from '@/style/themes/default.css';
import overrideCurrentTheme, { overrideCurrentThemeColorPalette } from '@/use-case/override-current-theme';
import React from 'react';

const ThemeContext = React.createContext<{
	changeTheme: (theme: Theme) => void,
	changeThemeColorPalette: (key: keyof Theme['color'], colorPallete: ThemeColorPalette) => void,
}>({
	changeTheme: (_theme: Theme) => {},
	changeThemeColorPalette: (_key: keyof Theme['color'], _colorPallete: ThemeColorPalette) => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const changeTheme = (theme: Theme) => {
		overrideCurrentTheme(theme);
	};

	const changeThemeColorPalette = (key: keyof Theme['color'], colorPallete: ThemeColorPalette) => {
		overrideCurrentThemeColorPalette(key, colorPallete);
	};

	return (
		<ThemeContext.Provider value={{ changeTheme, changeThemeColorPalette }}>
			<body className={defaultThemeClass}>{children}</body>
		</ThemeContext.Provider>
	);
};

export default ThemeContext;
