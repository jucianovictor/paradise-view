import { createThemeContract } from '@vanilla-extract/css';

export interface ThemeColorPalette {
	base: string;
	light: string;
	dark: string;
	contrast: {
		base: string,
		light: string,
		dark: string,
	};
}

export interface Theme {
	color: {
		primary: ThemeColorPalette,
		secondary: ThemeColorPalette,
		accent: ThemeColorPalette,
		background: ThemeColorPalette,
		success: ThemeColorPalette,
		info: ThemeColorPalette,
		warning: ThemeColorPalette,
		danger: ThemeColorPalette,
	};
	border: {
		radius: {
			small: string,
			medium: string,
			large: string,
		},
	};
	zIndex: {
		base: string,
		overlay: string,
		modal: string,
		tooltip: string,
	};
}

export const zIndex = {
	base: '1',
	tooltip: '50',
	overlay: '100',
	modal: '101',
};

export const media = {
	extraSmall: '280px',
	small: '375px',
	medium: '768px',
	large: '1024px',
	extraLarge: '1080px',
	HD: '1280px',
	fullHD: '1920px',
	quadHD: '2560px',
	ultraHD: '3840px',
};

export const themeInterface = createThemeContract({
	color: {
		primary: {
			base: '',
			light: '',
			dark: '',
			contrast: {
				base: '',
				light: '',
				dark: '',
			},
		},
		secondary: {
			base: '',
			light: '',
			dark: '',
			contrast: {
				base: '',
				light: '',
				dark: '',
			},
		},
		accent: {
			base: '',
			light: '',
			dark: '',
			contrast: {
				base: '',
				light: '',
				dark: '',
			},
		},
		background: {
			base: '',
			dark: '',
			light: '',
			contrast: {
				base: '',
				light: '',
				dark: '',
			},
		},
		success: {
			base: '',
			light: '',
			dark: '',
			contrast: {
				base: '',
				light: '',
				dark: '',
			},
		},
		info: {
			base: '',
			light: '',
			dark: '',
			contrast: {
				base: '',
				light: '',
				dark: '',
			},
		},
		warning: {
			base: '',
			light: '',
			dark: '',
			contrast: {
				base: '',
				light: '',
				dark: '',
			},
		},
		danger: {
			base: '',
			light: '',
			dark: '',
			contrast: {
				base: '',
				light: '',
				dark: '',
			},
		},
	},
	border: {
		radius: {
			small: '',
			medium: '',
			large: '',
		},
	},
	zIndex: {
		base: '',
		overlay: '',
		modal: '',
		tooltip: '',
	},
});

export default themeInterface;
