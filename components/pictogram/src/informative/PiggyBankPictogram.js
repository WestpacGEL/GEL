import React from 'react';
import { propTypes, defaultProps, Pictogram, getColors } from '../Pictogram';

export const PiggyBankPictogram = ({ mode, ...rest }) => {
	const { outline, highlight } = getColors(mode);

	return (
		<Pictogram pictogram="PiggyBankPictogram" mode={mode} {...rest}>
			<g fill="none" fillRule="evenodd">
				<path
					fill={outline}
					d="M51.4653747,34.8946 C49.7333747,34.8946 48.3273747,36.2976 48.3273747,38.0326 C48.3273747,39.7676 49.7333747,41.1696 51.4653747,41.1696 C53.1963747,41.1696 54.6023747,39.7676 54.6023747,38.0326 C54.6023747,36.2976 53.1963747,34.8946 51.4653747,34.8946"
				/>
				<path
					fill={outline}
					d="M68.1177747,51.152 L60.1427747,55.268 C59.7487747,55.472 59.4917747,55.87 59.4687747,56.313 L58.8647747,67.777 C58.8417747,68.211 58.6817747,68.621 58.4167747,68.929 C58.3417747,69.016 58.2587747,69.106 58.1697747,69.195 C57.7287747,69.633 57.1187747,69.813 56.4907747,69.689 C55.8347747,69.558 55.2897747,69.115 55.0317747,68.504 L52.1947747,61.755 C52.0597747,61.435 51.7977747,61.185 51.4717747,61.066 C51.1427747,60.945 50.7817747,60.968 50.4727747,61.127 C50.3337747,61.197 36.3147747,68.185 22.1947747,61.302 C21.8827747,61.15 21.5207747,61.134 21.1967747,61.259 C20.8727747,61.384 20.6157747,61.639 20.4867747,61.961 L17.7087747,68.904 C17.5287747,69.356 17.1647747,69.715 16.6507747,69.914 C16.0767747,70.135 15.4507747,70.07 14.9347747,69.735 C14.4177747,69.401 14.1037747,68.856 14.0737747,68.241 L13.4077747,55.052 C13.3947747,54.799 13.3037747,54.554 13.1497747,54.353 C12.7457747,53.826 3.4767747,41.379 17.1967747,28.945 L17.4297747,28.879 C18.7037747,30.038 20.1977747,30.957 21.8347747,31.577 C20.6627747,32.268 19.4807747,33.053 18.2997747,33.967 C17.7537747,34.39 17.6537747,35.174 18.0757747,35.721 C18.3227747,36.039 18.6927747,36.206 19.0657747,36.206 C19.3327747,36.206 19.6017747,36.12 19.8297747,35.944 C30.0637747,28.026 40.7207747,29.81 40.8777747,29.836 C41.5617747,29.963 42.2077747,29.511 42.3327747,28.833 C42.4577747,28.154 42.0087747,27.503 41.3297747,27.377 C41.1667747,27.347 39.7357747,27.1 37.4837747,27.127 C38.5087747,25.809 39.3067747,24.307 39.7987747,22.67 L42.6427747,23.502 C44.3867747,24.012 46.2917747,23.685 47.7387747,22.627 C48.9487747,21.741 51.2297747,20.072 52.8237747,17.506 C53.7287747,19.015 54.7647747,21.792 53.9007747,25.91 C53.6917747,26.913 54.0317747,27.965 54.9127747,29.039 L61.3087747,36.836 C61.7827747,37.414 62.3467747,37.905 62.9817747,38.296 L68.1177747,41.45 L68.1177747,51.152 Z M15.4177747,18.731 C15.4177747,12.831 20.2177747,8.03 26.1177747,8.03 C32.0187747,8.03 36.8187747,12.831 36.8187747,18.731 C36.8187747,24.631 32.0187747,29.432 26.1177747,29.432 C20.2177747,29.432 15.4177747,24.631 15.4177747,18.731 L15.4177747,18.731 Z M73.0217747,40.686 L67.2907747,37.166 C66.8917747,36.921 66.5387747,36.612 66.2417747,36.25 L59.8467747,28.453 C59.4267747,27.943 59.3137747,27.586 59.3477747,27.423 C61.0237747,19.431 53.7957747,14.434 53.6067747,14.268 C53.3537747,14.046 53.0247747,13.943 52.6957747,13.965 C52.5687747,13.956 52.4407747,13.959 52.3147747,13.988 C51.9207747,14.081 51.5957747,14.36 51.4427747,14.735 C50.2397747,17.699 47.6527747,19.592 46.2627747,20.609 C45.4387747,21.212 44.3497747,21.395 43.3457747,21.103 L40.2977747,20.211 C40.3497747,19.724 40.3807747,19.232 40.3807747,18.732 C40.3807747,11.16 34.2207747,5 26.6487747,5 C19.0767747,5 12.9167747,11.16 12.9167747,18.732 C12.9167747,21.817 13.9517747,24.658 15.6767747,26.953 C13.4097747,28.985 11.7017747,31.029 10.4387747,33.042 C8.9007747,32.134 6.8657747,30.633 6.4187747,29.458 C6.1747747,28.812 5.4507747,28.488 4.8067747,28.733 C4.1607747,28.978 3.8367747,29.7 4.0817747,30.345 C4.8937747,32.482 7.8237747,34.405 9.2267747,35.229 C4.4867747,45.087 9.7097747,53.74 10.9287747,55.538 L11.5757747,68.367 C11.6477747,69.792 12.3757747,71.055 13.5737747,71.833 C13.6237747,71.866 13.6937747,71.903 13.7737747,71.944 C14.1187747,72.144 14.4807747,72.296 14.8567747,72.394 C16.2787747,72.923 18.3527747,73.542 18.9437747,73.542 C19.4957747,73.542 20.0587747,73.437 20.6127747,73.223 C21.7117747,72.798 22.5927747,71.926 23.0307747,70.833 L25.2747747,65.223 C25.7757747,65.386 26.2757747,65.548 26.7727747,65.685 C36.8537747,69.537 46.2877747,67.439 51.1657747,65.758 L52.7267747,69.473 C53.3067747,70.852 54.5327747,71.849 56.0047747,72.141 C56.1427747,72.169 56.2817747,72.183 56.4207747,72.198 C56.4297747,72.2 56.4377747,72.203 56.4477747,72.205 C57.8857747,72.49 61.9037747,72.987 62.9297747,71.97 C63.0667747,71.835 63.1927747,71.697 63.3097747,71.561 C63.9357747,70.835 64.3087747,69.893 64.3607747,68.909 L64.9277747,58.161 L72.9407747,54.025 C73.3567747,53.81 73.6177747,53.381 73.6177747,52.914 L73.6177747,41.751 C73.6177747,41.317 73.3917747,40.913 73.0217747,40.686 L73.0217747,40.686 Z"
				/>
				<path
					fill={highlight}
					d="M27.8457747,22.3883 C27.6267747,22.6463 27.3537747,22.8243 27.0317747,22.9293 L27.0317747,19.6653 C27.4237747,19.8103 27.7207747,19.9963 27.9107747,20.2313 C28.1417747,20.5143 28.2577747,20.8523 28.2577747,21.2433 C28.2577747,21.6823 28.1207747,22.0633 27.8457747,22.3883 M24.6537747,16.0563 C24.4667747,15.7903 24.3727747,15.5023 24.3727747,15.1933 C24.3727747,14.8533 24.4747747,14.5443 24.6797747,14.2633 C24.8627747,14.0133 25.1037747,13.8313 25.3977747,13.7113 L25.3977747,16.6483 C25.0727747,16.4923 24.8217747,16.2963 24.6537747,16.0563 M29.6437747,18.6003 C29.1667747,18.0333 28.2927747,17.5663 27.0317747,17.1973 L27.0317747,13.8433 C27.4447747,14.1093 27.7157747,14.5213 27.8277747,15.0963 L30.0467747,14.8063 C29.8947747,13.9303 29.5437747,13.2303 28.9947747,12.7063 C28.4977747,12.2343 27.8377747,11.9383 27.0317747,11.8023 L27.0317747,10.8873 L26.7757747,10.8873 L25.5047747,10.8873 L25.3977747,10.8873 L25.3977747,11.7743 C24.4437747,11.8893 23.6707747,12.2543 23.0877747,12.8823 C22.4827747,13.5343 22.1807747,14.3393 22.1807747,15.2983 C22.1807747,16.2453 22.4477747,17.0513 22.9827747,17.7143 C23.5007747,18.3563 24.3067747,18.8393 25.3977747,19.1673 L25.3977747,22.8143 C25.1237747,22.6603 24.8727747,22.4383 24.6447747,22.1383 C24.3877747,21.7993 24.2117747,21.3953 24.1187747,20.9283 L21.8297747,21.1733 C22.0057747,22.3253 22.4087747,23.2173 23.0397747,23.8483 C23.6477747,24.4563 24.4367747,24.8223 25.3977747,24.9593 L25.3977747,26.5753 L25.5047747,26.5753 L26.7757747,26.5753 L27.0317747,26.5753 L27.0317747,24.8893 C28.0487747,24.6993 28.8547747,24.2723 29.4457747,23.6023 C30.0857747,22.8783 30.4067747,21.9863 30.4067747,20.9283 C30.4067747,19.9813 30.1517747,19.2043 29.6437747,18.6003"
				/>
			</g>
		</Pictogram>
	);
};

PiggyBankPictogram.defaultProps = {
	...defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'Piggy bank',
	copyrightYear: '2020',
};
PiggyBankPictogram.propTypes = propTypes;
