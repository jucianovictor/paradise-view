import themeInterface, { media } from '@/style/theme.css';
import { style } from '@vanilla-extract/css';

export const main = style({
	display: 'grid',
	minWidth: 'min-content',
	width: '100%',
	height: 'min-content',
	minHeight: '100vh',
	gridTemplateRows: 'min-content 1fr',
	position: 'absolute',
	backgroundColor: themeInterface.color.background.base,
});

export const header = style({
	display: 'grid',
	gridTemplateColumns: 'min-content min-content 1fr',
	width: '100%',
	height: 'min-content',
	backgroundColor: themeInterface.color.primary.base,
	columnGap: '20px',
	padding: '40px',
	borderRadius: '0px 0px 10px 10px',
	placeItems: 'center',
	position: 'relative',
});

export const palettesContainer = style({
	display: 'grid',
	gridAutoRows: 'min-content',
	width: '100%',
	height: '100%',
	gap: '60px',
	padding: '40px 20px',
	position: 'relative',
	placeItems: 'center',
	'@media': {
		[`screen and (min-width: ${media.small})`]: {
			gridTemplateColumns: '1fr',
		},
		[`screen and (min-width: ${media.extraLarge})`]: {
			gridTemplateColumns: 'repeat(2, 1fr)',
		},
		[`screen and (min-width: ${media.fullHD})`]: {
			gridTemplateColumns: 'repeat(3, 1fr)',
		},
		[`screen and (min-width: ${media.quadHD})`]: {
			gridTemplateColumns: 'repeat(4, 1fr)',
		},
		[`screen and (min-width: ${media.ultraHD})`]: {
			gridTemplateColumns: 'repeat(5, 1fr)',
		},
	},
});

export const headerButton = style({
	cursor: 'pointer',
	width: 'max-content',
	padding: '10px 20px',
	height: '40px',
	border: 'none',
	borderRadius: '10px',
	background: themeInterface.color.accent.base,
	color: themeInterface.color.accent.contrast.base,
	fontSize: '20px',
});
