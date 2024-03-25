import themeInterface from '@/style/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
	width: '500px',
	height: '500px',
	display: 'grid',
	gridTemplateRows: 'min-content 1fr',
	position: 'fixed',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	borderRadius: themeInterface.border.radius.medium,
	zIndex: themeInterface.zIndex.modal,
	overflow: 'hidden',
	backgroundColor: themeInterface.color.background.light,
});

export const header = style({
	gridRow: 1,
	display: 'grid',
	gridTemplateRows: '1fr',
	gridTemplateColumns: '1fr min-content',
	padding: '15px',
	backgroundColor: themeInterface.color.primary.base,
	color: themeInterface.color.primary.contrast.base,
});

const baseButton = style({
	appearance: 'none',
	cursor: 'pointer',
	border: 'none',
	borderRadius: themeInterface.border.radius.small,
});

export const copyCodeButton = style([
	baseButton,
	{
		width: 'max-content',
		padding: '10px 20px',
		height: '40px',
		fontSize: '20px',
		background: themeInterface.color.accent.base,
		color: themeInterface.color.accent.contrast.base,
	},
]);

export const closeButton = style([
	baseButton,
	{
		width: '40px',
		height: '40px',
		outline: 'none',
		color: themeInterface.color.danger.contrast.base,
		backgroundColor: themeInterface.color.danger.base,
		fontSize: '30px',
	},
]);

export const codeContainer = style({
	gridRow: 2,
	display: 'grid',
	minWidth: 'min-content',
	minHeight: 'min-content',
	width: '100%',
	height: '100%',
	fontSize: '30px',
	overflowY: 'auto',
	backgroundColor: themeInterface.color.background.light,
	color: themeInterface.color.background.contrast.light,
	scrollbarColor: `${themeInterface.color.primary.dark} ${themeInterface.color.background.light}`,
});
