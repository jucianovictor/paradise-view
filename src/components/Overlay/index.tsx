import React from 'react';
import ReactDOM from 'react-dom';
import { overlay } from './index.css';

interface OverlayProps {
	isShowing: boolean;
	onClick: () => void;
	children: React.ReactNode;
}

export const Overlay = ({ isShowing, onClick, children }: OverlayProps) =>
	isShowing
		? ReactDOM.createPortal(
				<React.Fragment>
					<div className={overlay} onClick={onClick} />
					{children}
				</React.Fragment>,
				document.body,
			)
		: null;

export default Overlay;
