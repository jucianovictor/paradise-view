import themeInterface, { Theme, ThemeColorPalette } from '@/style/theme.css';

function removerVar(value: string) {
	return value.replace('var(', '').replace(')', '');
}

function overrideStyleProperty<T extends object>(contract: T, theme: T) {
	Object.entries(contract).forEach(([key, value]) => {
		if (typeof value === 'string') {
			document.body.style.setProperty(removerVar(value), theme[key as keyof T] as string);
		}
		if (typeof value === 'object') {
			overrideStyleProperty(value, theme[key as keyof T]);
		}
	});
}

export function overrideCurrentThemeColorPalette(key: keyof Theme['color'], colorPallete: ThemeColorPalette) {
	overrideStyleProperty(themeInterface.color[key], colorPallete);
}

export default function overrideCurrentTheme(theme: Theme) {
	overrideStyleProperty(themeInterface, theme);
}
