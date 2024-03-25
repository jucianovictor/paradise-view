import { createTheme } from '@vanilla-extract/css';
import themeInterface, { Theme } from '../theme.css';

export const defaultTheme: Theme = {
	color: {
		primary: {
			base: '#433bab',
			light: '#9791d9',
			dark: '#312b7d',
			contrast: {
				base: '#ffffff',
				light: '#ffffff',
				dark: '#ffffff',
			},
		},
		secondary: {
			base: '#d15e2d',
			light: '#d98a35',
			dark: '#c3522b',
			contrast: {
				base: '#ffffff',
				light: '#ffffff',
				dark: '#ffffff',
			},
		},
		accent: {
			base: '#c13530',
			light: '#e49592',
			dark: '#902824',
			contrast: {
				base: '#ffffff',
				light: '#ffffff',
				dark: '#ffffff',
			},
		},
		background: {
			base: '#181b5b',
			light: '#343ac4',
			dark: '#0b0d2b',
			contrast: {
				base: '#ffffff',
				light: '#ffffff',
				dark: '#ffffff',
			},
		},
		success: {
			base: '#00c853',
			light: '#4eff97',
			dark: '#008b3a',
			contrast: {
				base: '#000000',
				light: '#000000',
				dark: '#000000',
			},
		},
		info: {
			base: '#00b0ff',
			light: '#85d9ff',
			dark: '#0086c2',
			contrast: {
				base: '#000000',
				light: '#000000',
				dark: '#000000',
			},
		},
		warning: {
			base: '#ffc107',
			light: '#ffe28c',
			dark: '#c99700',
			contrast: {
				base: '#000000',
				light: '#000000',
				dark: '#000000',
			},
		},
		danger: {
			base: '#db3300',
			light: '#ff8561',
			dark: '#9e2500',
			contrast: {
				base: '#ffffff',
				light: '#ffffff',
				dark: '#ffffff',
			},
		},
	},
	border: {
		radius: {
			small: '5px',
			medium: '10px',
			large: '15px',
		},
	},
	zIndex: {
		base: '0',
		overlay: '100',
		modal: '101',
		tooltip: '10',
	},
};

export const defaultThemeClass = createTheme(themeInterface, defaultTheme);
