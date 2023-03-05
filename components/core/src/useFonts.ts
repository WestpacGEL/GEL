import { useBrand } from './Brand';

export const useFonts = <T extends { path: string }>({ path, ...restProps }: T) => {
	const { TYPE }: { TYPE: any } = useBrand();

	return {
		'': TYPE.files[''].map((file: any) => {
			const { src, ...rest } = file['@font-face'];
			return {
				'@font-face': { src: src.replace(/_PATH_/g, path), ...rest, ...restProps },
			};
		}),
	};
};
