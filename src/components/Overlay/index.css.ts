import themeInterface from '@/style/theme.css';
import { style } from '@vanilla-extract/css';

export const overlay = style({
	position: 'fixed',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	backgroundColor: 'rgba(0, 0, 0, 0.5)',
	zIndex: themeInterface.zIndex.overlay,
});
