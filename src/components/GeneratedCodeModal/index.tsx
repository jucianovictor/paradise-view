import { closeButton, codeContainer, container, copyCodeButton, header } from './index.css';

export interface GeneratedCodeModalProps {
	code: string;
	onClickClose: () => void;
}

export const GeneratedCodeModal = ({ code, onClickClose }: GeneratedCodeModalProps) => {
	const copyTextToClipboard = () => {
		navigator.clipboard.writeText(code);
	};

	return (
		<div className={container} aria-modal aria-hidden tabIndex={-1} role="dialog">
			<div className={header}>
				<button type="button" className={copyCodeButton} onClick={copyTextToClipboard}>
					Copy
				</button>
				<button type="button" className={closeButton} onClick={onClickClose}>
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div className={codeContainer}>
				<pre>{code}</pre>
			</div>
		</div>
	);
};

export default GeneratedCodeModal;
