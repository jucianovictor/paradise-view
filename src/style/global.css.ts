import { globalStyle } from '@vanilla-extract/css';
import themeInterface from './theme.css';

globalStyle('*', {
	boxSizing: 'border-box',
	padding: 0,
	margin: 0,
	scrollbarColor: `${themeInterface.color.primary.dark} ${themeInterface.color.primary.light}`,
});

globalStyle('html, body', {
	maxWidth: '100vw',
	minHeight: '100vh',
	backgroundColor: 'black',
});
