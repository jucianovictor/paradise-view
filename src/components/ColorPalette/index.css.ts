import themeInterface from '@/style/theme.css';
import { style } from '@vanilla-extract/css';

export const colorPaletteContainer = style({
	display: 'grid',
	gridTemplateColumns: '1fr min-content min-content',
	gridTemplateRows: 'min-content 1fr',
	columnGap: '20px',
	rowGap: '20px',
	width: 'min-content',
	height: 'min-content',
	justifyItems: 'center',
	borderRadius: '10px',
	padding: '20px',
	backgroundColor: themeInterface.color.secondary.base,
});

export const inputText = style({
	gridRow: '1',
	gridColumn: '1',
	display: 'grid',
	border: 'none',
	borderBottom: `1px solid ${themeInterface.color.secondary.contrast.base}`,
	color: themeInterface.color.secondary.contrast.base,
	fontSize: '25px',
	fontWeight: 'bold',
	backgroundColor: 'transparent',
	outline: 'none',
	'::placeholder': {
		color: themeInterface.color.secondary.contrast.base,
		opacity: 0.5,
	},
});

export const colorPicker = style({
	appearance: 'none',
	gridRow: '1',
	gridColumn: '2',
	width: '32px',
	height: '32px',
	display: 'grid',
	padding: '0',
	border: 'none',
	borderRadius: '50%',
	overflow: 'hidden',
	backgroundColor: 'transparent',
	cursor: 'pointer',
	'::-moz-color-swatch': {
		borderRadius: '15px',
		border: 'none',
	},
});

export const deleteButton = style({
	gridRow: '1',
	gridColumn: '3',
	cursor: 'pointer',
	width: '32px',
	height: '32px',
	display: 'grid',
	padding: '0',
	border: '1px',
	fontSize: '30px',
	color: themeInterface.color.danger.contrast.base,
	backgroundColor: themeInterface.color.danger.base,
	borderRadius: themeInterface.border.radius.small,
});

export const colorsList = style({
	gridColumn: '1/4',
	gridRow: 2,
	display: 'grid',
	gridAutoRows: '1fr',
	width: '100%',
});

export const colorItemContainer = style({
	display: 'flex',
	flexDirection: 'row',
	width: '100%',
	height: '40px',
	padding: '10px',
	textDecoration: 'none',
	listStyleType: 'none',
	justifyContent: 'space-between',
	':first-child': {
		borderRadius: '10px 10px 0 0',
	},
	':last-child': {
		borderRadius: '0 0 10px 10px',
	},
});
