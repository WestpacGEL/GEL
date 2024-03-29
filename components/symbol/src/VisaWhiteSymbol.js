import React from 'react';
import { propTypes, Symbol } from './Symbol';

export const VisaWhiteSymbol = ({
	align = 'left',
	assistiveText = 'Visa',
	copyrightYear = '',
	viewBoxWidth = 80,
	viewBoxHeight = 37,
	...props
}) => (
	<Symbol
		symbol="VisaWhiteSymbol"
		align={align}
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		viewBoxWidth={viewBoxWidth}
		viewBoxHeight={viewBoxHeight}
		{...props}
	>
		<g fill="none">
			<path fill="#FFF" d="M0 37h80V0H0" />
			<path
				d="M38.527 7.93l-4.46 20.854H28.67L33.128 7.93h5.4zM61.22 21.392l2.838-7.827 1.64 7.827h-4.48zm6.024 7.392h4.982L67.87 7.93h-4.6c-1.037 0-1.913.602-2.3 1.53l-8.09 19.324h5.664l1.124-3.115h6.92l.656 3.114zm-14.084-6.81c.022-5.505-7.61-5.806-7.56-8.268.02-.744.736-1.544 2.287-1.747.774-.1 2.906-.177 5.323.933l.945-4.426c-1.3-.46-2.967-.92-5.047-.92-5.33 0-9.083 2.83-9.115 6.894-.03 3.002 2.68 4.68 4.722 5.674 2.102 1.03 2.81 1.678 2.8 2.593-.017 1.4-1.68 2.017-3.228 2.043-2.714.043-4.284-.735-5.542-1.32l-.973 4.572c1.26.583 3.585 1.087 5.994 1.113 5.667 0 9.373-2.802 9.394-7.14zM30.814 7.93L22.08 28.784h-5.703l-4.304-16.642c-.256-1.025-.485-1.4-1.28-1.833-1.298-.706-3.44-1.363-5.328-1.778l.132-.602h9.183c1.167 0 2.218.777 2.486 2.126l2.27 12.063 5.615-14.19h5.664z"
				fill="#1A1F71"
			/>
		</g>
	</Symbol>
);

VisaWhiteSymbol.propTypes = propTypes;
