import React from 'react';
import { propTypes, defaultProps, Pictogram, getColors } from '../Pictogram';

export const AustraliaPictogram = ({ mode, ...rest }) => {
	const { outline, highlight } = getColors(mode);

	return (
		<Pictogram pictogram="AustraliaPictogram" mode={mode} {...rest}>
			<g fill="none" fillRule="evenodd">
				<path
					fill={outline}
					d="M38.718,5.9 C50.116,5.9 60.147,11.847 65.888,20.795 C69.825,26.145 72.159,32.746 72.159,39.883 C72.159,57.675 57.685,72.15 39.893,72.15 C28.489,72.15 18.456,66.2 12.716,57.247 C8.781,51.898 6.45,45.301 6.45,38.168 C6.45,20.375 20.926,5.9 38.718,5.9 Z M38.718,8.402 C37.5529179,8.402 36.4032447,8.46928465 35.2726637,8.60017261 C36.5305912,10.9949759 35.8314366,11.970031 33.175622,11.5257493 C28.7970713,10.7932771 34.6063442,16.7689711 28.2942596,17.0064056 C21.9821749,17.24384 24.4184675,26.165982 20.7908776,26.165982 C18.4479372,26.165982 16.3986044,24.3375043 14.6428793,20.6805489 C11.0638238,25.5930819 8.95,31.6387941 8.95,38.169 C8.95,50.3844919 16.3466821,60.9051993 26.8958027,65.4881151 C27.7283228,65.4719868 28.551186,65.5383531 28.7508887,65.6591568 C29.5873239,66.1651313 28.8317415,62.6356189 30.2302007,62.6356189 C31.6286599,62.6356189 38.8517276,60.4952436 40.8992688,61.5654313 C42.94681,62.6356189 47.143884,65.0928353 45.4563088,65.3759961 C43.9498302,65.6287703 42.8573784,65.9933818 45.0927433,67.248952 C58.453909,64.3227248 68.486,52.3951772 68.486,38.169 C68.486,21.755 55.131,8.402 38.718,8.402 Z"
				/>
				<path
					fill={highlight}
					d="M48.4127989 58.0996178C47.3699007 58.7975866 45.2379096 58.0871725 44.1552867 56.3087197 43.0726638 54.5302668 43.3679246 53.5422375 42.7774031 53.1470257 42.1868815 52.751814 42.383722 52.751814 41.7932005 53.1470257 41.2026789 53.5422375 40.8089979 53.4434345 39.9232155 52.5542081 39.0374332 51.6649817 38.3484914 51.2697699 37.1674482 51.2697699 35.9864051 51.2697699 35.5927241 50.9733611 34.0179999 51.7637846 32.4432757 52.5542081 31.8527542 53.8386463 30.8685516 53.8386463 29.884349 53.8386463 28.7033058 53.7398433 28.014364 54.233858 27.3254222 54.7278727 27.8175235 55.0242815 26.8333209 55.0242815 25.8491183 55.0242815 24.963336 53.7398433 25.1601765 52.3566022 25.357017 50.9733611 23.8807131 49.0961053 23.1917713 48.2068789 22.5028294 47.3176525 21.3217863 44.3535644 23.3886118 42.6739145 25.4554373 40.9942645 28.2112045 40.6978557 28.7033058 39.8086293 29.1954071 38.9194029 29.1954071 40.0491721 29.3922477 38.3265853 29.5890882 36.6039984 30.8685516 37.4373588 31.3606529 36.4493295 31.8527542 35.4613001 32.935377 33.8804531 33.6243189 34.2756649 34.3132607 34.6708766 34.805362 35.3624972 35.199043 35.1648913 35.5927241 34.9672854 35.5927241 34.7696795 35.8879848 34.2756649 36.1832456 33.7816502 36.9706077 32.6948179 38.4469116 32.497212 39.8510065 32.3092714 40.8089979 32.2996061 41.8385903 32.7508707 42.8681827 33.2021354 42.2853018 33.4852414 41.5963599 34.4732707 40.9074181 35.4613001 41.7932005 36.0541177 42.4821423 36.2517236 43.1710841 36.4493295 44.8442285 38.4253882 45.5331704 38.0301764 46.2221122 37.6349647 47.0094743 36.4493295 47.0094743 35.560103 47.0094743 34.6708766 47.4031553 32.3984091 47.4031553 32.1020003 47.4031553 31.8055915 47.8952566 31.015168 48.5841984 33.5840443 49.2731402 36.1529207 49.8080211 35.2675734 50.2573428 36.2517236 50.7066646 37.2358738 50.7494441 37.239753 50.7494441 38.3265853 50.7494441 39.4134176 52.9146899 42.1798998 53.4067912 42.6739145 53.8988925 43.1679291 56.8515003 47.2188495 55.8672977 49.3925141 54.8830951 51.5661787 53.4067912 53.5422375 52.4225886 55.5182962 51.438386 57.4943549 49.4556971 57.401649 48.4127989 58.0996178zM48.8117816 60.3550004C49.2994086 60.1231741 49.6920827 60.5179383 49.4957457 60.8918585 49.2994086 61.2657787 48.9619836 61.9263237 48.8117816 61.9263237 48.6615795 61.9263237 48.4833298 62.0565766 48.4833298 62.3460977 48.4833298 62.6356189 48.067406 62.6383617 47.8959616 62.4922297 47.7245171 62.3460977 47.3246473 61.3327077 47.4192624 61.017696 47.4674473 60.8572687 47.0417501 60.4333352 47.2914178 60.1595259 47.5410855 59.8857166 48.3241545 60.5868268 48.8117816 60.3550004z"
				/>
				<path
					fill={outline}
					d="M31.2023092 21.839143C29.5595592 20.7421242 24.9598592 24.303268 24.9598592 26.110293 24.9598592 27.917318 27.2909838 29.5092725 28.2856265 28.738693 29.2802693 27.9681135 32.8450592 22.9361618 31.2023092 21.839143zM29.5181149 33.338472C30.3201013 32.7833851 23.9359409 31.4774594 21.5481887 28.9106963 19.6901712 26.9133824 19.6621217 26.9009069 18.6195846 27.6225048 17.6593274 28.2871521 21.7478727 35.233185 29.5181149 33.338472zM52.6463216 24.3712641C55.7259174 24.3712641 54.8126004 28.6005646 54.489746 28.9500394 54.1668917 29.2995141 49.3134968 29.6071394 48.1635718 28.9500394 47.0136468 28.2929394 46.5135958 26.1782891 45.1855279 26.1782891 43.8574599 26.1782891 39.0282772 23.8193883 37.9785218 22.0714141 36.9287663 20.3234398 49.5667257 24.3712641 52.6463216 24.3712641zM62.5645009 49.7159402C62.555678 50.6037761 62.392756 52.591911 61.2561721 52.9035591 60.4619422 53.1213347 61.4007397 54.6243044 61.8045747 54.2002851 62.5487158 53.4189506 63.6466666 53.1202402 63.2095425 51.0432063 62.7724184 48.9661724 62.5687877 49.2845719 62.5645009 49.7159402zM60.0091009 53.8291498C59.7128983 54.1338387 59.2364482 54.7321286 58.9307312 54.8569295 58.3608965 55.0895495 57.3902284 55.5359651 56.9263635 55.5359651 56.4624987 55.5359651 55.9170203 56.0786103 55.6100318 56.4444551 55.3030433 56.8102999 55.7040012 57.3447492 56.0832499 57.3447492 56.4624987 57.3447492 57.7148074 57.22034 57.8152477 56.6570244 57.915688 56.0937088 58.6642026 55.7634893 58.9307312 55.7634893 59.1972597 55.7634893 60.0804643 54.7874691 60.4222541 54.5778766 60.764044 54.368284 60.0809653 53.7552265 60.0091009 53.8291498zM32.4795329 25.4846627C32.8230369 24.4061126 33.960095 26.399669 34.5959907 27.186338 35.2318865 27.973007 34.5959907 27.973007 33.1123253 27.973007 32.2284026 27.973007 31.8441511 27.8451763 31.6523646 27.7953537 31.1427854 27.6629742 32.136029 26.5632129 32.4795329 25.4846627z"
				/>
			</g>
		</Pictogram>
	);
};

AustraliaPictogram.defaultProps = {
	...defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'Australia',
	copyrightYear: '2020',
};
AustraliaPictogram.propTypes = propTypes;
