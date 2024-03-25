import { createTheme } from '@vanilla-extract/css';
import themeInterface, { Theme } from '../theme.css';

export const defaultTheme: Theme = {
	color: {
		primary: {
			base: '#4f4f4f',
			light: '#919191',
			dark: '#303030',
			contrast: {
				base: '#ffffff',
				light: '#ffffff',
				dark: '#ffffff',
			},
		},
		secondary: {
			base: '#fafafa',
			light: '#ffffff',
			dark: '#dbdbdb',
			contrast: {
				base: '#000000',
				light: '#000000',
				dark: '#000000',
			},
		},
		accent: {
			base: '#ad5c00',
			light: '#ff9f33',
			dark: '#703b00',
			contrast: {
				base: '#ffffff',
				light: '#ffffff',
				dark: '#ffffff',
			},
		},
		background: {
			base: '#808080',
			light: '#c2c2c2',
			dark: '#616161',
			contrast: {
				base: '#000000',
				light: '#000000',
				dark: '#000000',
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
