import { ColorPaletteComponentInterface } from '@/components/ColorPalette';
import { TinyColor, mostReadable } from '@ctrl/tinycolor';

export default function buildColorPalette(id: number, palleteName: string, color: string) {
	return {
		id,
		paletteName: palleteName,
		base: color,
		light: new TinyColor(color).lighten(26).toHexString(),
		dark: new TinyColor(color).darken(12).toHexString(),
		contrast: {
			base: mostReadable(color, ['#fff', '#000'])?.toHexString() || 'white',
			light: mostReadable(color, ['#fff', '#000'])?.toHexString() || 'white',
			dark: mostReadable(color, ['#fff', '#000'])?.toHexString() || 'white',
		},
	} as ColorPaletteComponentInterface;
}
