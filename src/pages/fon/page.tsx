'use client';

import ColorPalette, { ColorPaletteComponentInterface } from '@/components/ColorPalette';
import GeneratedCodeModal from '@/components/GeneratedCodeModal';
import { Overlay } from '@/components/Overlay';
import ThemeContext from '@/context/ThemeContext';
import { Theme } from '@/style/theme.css';
import { defaultTheme } from '@/style/themes/default.css';
import { useContext, useState } from 'react';
import { header, headerButton, main, palettesContainer } from '../../style/pages/fon/page.css';

export default function Fon() {
	const defaultPalettes = Object.entries(defaultTheme.color).map(([key, value], id) => {
		return {
			id,
			paletteName: key,
			base: value.base,
			light: value.light,
			dark: value.dark,
			contrast: value.contrast,
		} as ColorPaletteComponentInterface;
	});
	const [palettesList, setPalettesList] = useState(defaultPalettes);
	const { changeThemeColorPalette } = useContext(ThemeContext);
	const [isGeneratedCodeModalOpen, setIsGeneratedCodeModalOpen] = useState(false);
	const [generatedCode, setGeneratedCode] = useState('');

	const changeCurrentThemeColorPalette = (changedPalette: ColorPaletteComponentInterface) => {
		if (Object.keys(defaultTheme.color).includes(changedPalette.paletteName)) {
			changeThemeColorPalette(changedPalette.paletteName as keyof Theme['color'], changedPalette);
		}
	};

	const generateCode = () => {
		const object = palettesList
			.map((pal) => ({
				[pal.paletteName]: {
					base: pal.base,
					light: pal.light,
					dark: pal.dark,
					contrast: {
						base: pal.contrast.base,
						light: pal.contrast.light,
						dark: pal.contrast.dark,
					},
				},
			}))
			.reduce((a, b) => ({ ...a, ...b }), {});
		setGeneratedCode(JSON.stringify(object, null, 2));
		openGeneratedCodeModal();
	};

	const addNewPaletteOnList = () => {
		const newPalette = {
			...defaultTheme.color.primary,
			id: palettesList.map((pal) => pal.id).reduce((a, b) => Math.max(a, b), 0) + 1,
			paletteName: 'New Palette',
		};

		setPalettesList([newPalette, ...palettesList]);
	};

	const openGeneratedCodeModal = () => setIsGeneratedCodeModalOpen(true);

	const closeGeneratedCodeModal = () => setIsGeneratedCodeModalOpen(false);

	const updatePaletteInList = (id: number, changedPalette: ColorPaletteComponentInterface) => {
		setPalettesList(palettesList.map((pal) => (pal.id === id ? changedPalette : pal)));
		changeCurrentThemeColorPalette(changedPalette);
	};

	const removePaletteFromList = (deletedPaletteId: number) =>
		setPalettesList(palettesList.filter((pal) => pal.id !== deletedPaletteId));

	return (
		<>
			<Overlay isShowing={isGeneratedCodeModalOpen} onClick={closeGeneratedCodeModal}>
				<GeneratedCodeModal code={generatedCode} onClickClose={closeGeneratedCodeModal} />
			</Overlay>
			<main className={main}>
				<header className={header}>
					<button className={headerButton} type="button" onClick={addNewPaletteOnList}>
						+
					</button>
					<button className={headerButton} type="button" onClick={generateCode}>
						Generate Code!
					</button>
				</header>
				<section className={palettesContainer}>
					{palettesList.map((palette) => (
						<ColorPalette
							key={palette.id}
							colorPalette={palette}
							onChangePalette={updatePaletteInList}
							onRemovePalette={removePaletteFromList}
						/>
					))}
				</section>
			</main>
		</>
	);
}
