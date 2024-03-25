'use client';

import { ThemeColorPalette } from '@/style/theme.css';
import buildColorPalette from '@/use-case/build-color-palette';
import {
	colorItemContainer,
	colorPaletteContainer,
	colorPicker,
	colorsList,
	deleteButton,
	inputText,
} from './index.css';

export interface ColorPaletteComponentInterface extends ThemeColorPalette {
	id: number;
	paletteName: string;
}

interface ColorItemProps {
	name: string;
	value: string;
	contrast: string;
}

const ColorItem = ({ name, value, contrast }: ColorItemProps) => (
	<li className={colorItemContainer} style={{ color: contrast, backgroundColor: value }}>
		<h3>{name}</h3>
		<h3>{value}</h3>
		<h3>{contrast}</h3>
	</li>
);

export interface ColorPaletteProps {
	colorPalette: ColorPaletteComponentInterface;
	onChangePalette: (id: number, palette: ColorPaletteComponentInterface) => void;
	onRemovePalette: (id: number) => void;
}

const ColorPalette = ({ colorPalette: colorPalette, onChangePalette, onRemovePalette }: ColorPaletteProps) => {
	const changeColor = (color: string) => {
		const newColorPalette = buildColorPalette(colorPalette.id, colorPalette.paletteName, color);
		onChangePalette(colorPalette.id, newColorPalette);
	};

	const changePaletteName = (paletteName: string) => {
		onChangePalette(colorPalette.id, { ...colorPalette, paletteName: paletteName });
	};

	return (
		<div className={colorPaletteContainer}>
			<input
				className={inputText}
				placeholder="Palette name"
				type="text"
				value={colorPalette.paletteName}
				onChange={(e) => changePaletteName(e.target.value)}
			/>
			<input
				className={colorPicker}
				type="color"
				value={colorPalette.base}
				onChange={(e) => changeColor(e.target.value)}
			/>
			<button type="button" className={deleteButton} onClick={() => onRemovePalette(colorPalette.id)}>
				&times;
			</button>
			<ul className={colorsList}>
				<ColorItem name="Light" value={colorPalette.light} contrast={colorPalette.contrast.light} />
				<ColorItem name="Base" value={colorPalette.base} contrast={colorPalette.contrast.base} />
				<ColorItem name="Dark" value={colorPalette.dark} contrast={colorPalette.contrast.dark} />
			</ul>
		</div>
	);
};

export default ColorPalette;
