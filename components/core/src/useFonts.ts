import { useBrand } from './Brand';

interface Type {
	files: { [key: string]: any };
}

export const useFonts = <T extends { path: string }>({ path, ...restProps }: T) => {
	const { TYPE }: { TYPE: Type } = useBrand();

	return {
		'': TYPE.files[''].map((file: any) => {
			const { src, ...rest } = file['@font-face'];
			return {
				'@font-face': { src: src.replace(/_PATH_/g, path), ...rest, ...restProps },
			};
		}),
	};
};
