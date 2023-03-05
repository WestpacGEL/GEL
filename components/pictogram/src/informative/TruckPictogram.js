import React from 'react';
import { getColors } from '../_utils';
import { Pictogram } from '../Pictogram';

export const TruckPictogram = ({ mode, ...rest }) => {
	const { outline, highlight } = getColors(mode);

	return (
		<Pictogram pictogram="TruckPictogram" mode={mode} {...rest}>
			<g fill="none" fillRule="evenodd">
				<polygon fill={highlight} points="38 27 64 27 64 24 38 24" />
				<polygon fill={highlight} points="46 34 63 34 63 31 46 31" />
				<path
					fill={outline}
					d="M67.4563591,54.7955404 L63.924647,54.7955404 C63.3145409,51.0311149 60.0691015,48.1470298 56.1567076,48.1470298 C52.2473591,48.1470298 49.0009045,51.0311149 48.3907985,54.7955404 L33.0437379,54.7955404 L33.0437379,19.816817 C33.0437379,19.1397106 33.5909045,18.5882213 34.26395,18.5882213 L66.4148136,18.5882213 C66.9893894,18.5882213 67.4563591,19.0590298 67.4563591,19.6360511 L67.4563591,54.7955404 Z M59.7412076,60.029583 C59.5909652,60.1684766 59.4346318,60.3022638 59.268147,60.4237957 C59.1666318,60.4963064 59.0630864,60.5626894 58.9564955,60.6280511 C58.7463591,60.7618383 58.5301318,60.8843915 58.3017227,60.9865191 C58.2357379,61.0161362 58.1677227,61.0386043 58.0997076,61.0661787 C57.8286621,61.174434 57.5484803,61.2663489 57.2571318,61.3286468 C57.2297227,61.3357957 57.1992682,61.3378383 57.1698288,61.343966 C56.8419348,61.4083064 56.5049045,61.4471149 56.1567076,61.4471149 C55.8095258,61.4471149 55.4724955,61.4083064 55.1446015,61.343966 C55.1161773,61.3378383 55.0857227,61.3357957 55.0562833,61.3286468 C54.76595,61.2663489 54.4867833,61.174434 54.2157379,61.0661787 C54.1487379,61.0386043 54.0786924,61.0161362 54.0137227,60.9865191 C53.7853136,60.8843915 53.5680712,60.760817 53.3579348,60.6290723 C53.2523591,60.5626894 53.1488136,60.4963064 53.0483136,60.4237957 C52.8818288,60.3022638 52.7244803,60.1684766 52.5732227,60.029583 C52.467647,59.9325617 52.3661318,59.8365617 52.2686773,59.7323915 L52.2686773,59.7313702 C51.3753439,58.7713702 50.8170106,57.4896681 50.8170106,56.0731574 C50.8170106,54.7587745 51.3073288,53.5689872 52.0879803,52.6345191 C52.1458439,52.5650723 52.1986318,52.4925617 52.2585258,52.4272 C52.38745,52.2883064 52.5265258,52.1626894 52.668647,52.0380936 C52.7721924,51.9472 52.8757379,51.8583489 52.9863894,51.7746043 C53.1173439,51.6765617 53.2523591,51.5856681 53.39245,51.4988596 C53.5355864,51.4100085 53.6858288,51.3303489 53.8381015,51.2557957 C53.9670258,51.1924766 54.0939197,51.1291574 54.2289348,51.0760511 C54.4197833,51.0004766 54.618753,50.9443064 54.8217833,50.8912 C54.93345,50.861583 55.0420712,50.8237957 55.1577985,50.8013277 C55.4806167,50.7390298 55.8115561,50.7002213 56.152647,50.7002213 C56.1546773,50.7002213 56.1556924,50.7002213 56.1567076,50.7002213 C56.1587379,50.7002213 56.159753,50.7002213 56.1617833,50.7002213 C56.5028742,50.7002213 56.8348288,50.7390298 57.157647,50.8013277 C57.2733742,50.8237957 57.3809803,50.861583 57.4936621,50.8912 C57.6956773,50.9443064 57.894647,51.0004766 58.0875258,51.0760511 C58.2205106,51.1291574 58.3474045,51.1924766 58.4763288,51.2557957 C58.6306318,51.3303489 58.7788439,51.4100085 58.9240106,51.4988596 C59.0630864,51.5856681 59.1981015,51.6765617 59.3290561,51.7746043 C59.4407227,51.8583489 59.543253,51.9472 59.6478136,52.0380936 C59.7889197,52.1626894 59.9279955,52.2883064 60.0569197,52.4272 C60.1178288,52.493583 60.1696015,52.5650723 60.2274652,52.6345191 C61.0081167,53.5700085 61.4984348,54.7587745 61.4984348,56.0731574 C61.4984348,57.6438809 60.8132076,59.0460936 59.7412076,60.029583 L59.7412076,60.029583 Z M30.5058591,54.7965617 L27.2888439,54.7965617 C26.6787379,51.0321362 23.4332985,48.1470298 19.5209045,48.1470298 C15.6105409,48.1470298 12.3640864,51.0321362 11.7549955,54.7965617 L9.12372273,54.7965617 C8.80090455,54.7965617 8.5379803,54.5320511 8.5379803,54.2072851 L8.5379803,39.7531574 C8.5379803,39.2966468 8.70751061,38.8605617 9.01713182,38.5245617 L19.5980561,27.0147745 C19.9371167,26.6460936 20.4182985,26.4346894 20.917753,26.4346894 L30.5058591,26.4346894 L30.5058591,54.7965617 Z M23.40995,59.7313702 L23.40995,59.7323915 C23.3135106,59.8365617 23.2109803,59.9325617 23.1064197,60.0285617 C22.954147,60.1684766 22.7978136,60.3022638 22.6303136,60.424817 C22.5298136,60.4973277 22.4262682,60.5626894 22.3206924,60.6290723 C22.1105561,60.7618383 21.8943288,60.8843915 21.6659197,60.9865191 C21.5999348,61.0161362 21.5319197,61.0396255 21.4628894,61.0661787 C21.1928591,61.174434 20.9126773,61.2663489 20.6213288,61.3286468 C20.5929045,61.3357957 20.5634652,61.3378383 20.5340258,61.343966 C20.2061318,61.4083064 19.8680864,61.4471149 19.5209045,61.4471149 C19.1737227,61.4471149 18.8356773,61.4083064 18.5087985,61.343966 C18.4793591,61.3378383 18.4499197,61.3357957 18.4204803,61.3286468 C18.130147,61.2663489 17.8509803,61.174434 17.5789197,61.0661787 C17.5119197,61.0396255 17.4428894,61.0161362 17.3769045,60.9865191 C17.1484955,60.8843915 16.9322682,60.760817 16.7221318,60.6290723 C16.6175712,60.5626894 16.5130106,60.4973277 16.4135258,60.424817 C16.2470409,60.3022638 16.0886773,60.1694979 15.9374197,60.029583 C15.8318439,59.9325617 15.7293136,59.8365617 15.6328742,59.7323915 C15.6328742,59.7313702 15.6318591,59.7313702 15.6318591,59.7313702 C14.7385258,58.7713702 14.1812076,57.4896681 14.1812076,56.0731574 C14.1812076,55.6309447 14.2492227,55.2081362 14.3497227,54.7965617 C14.3497227,54.7955404 14.3507379,54.7955404 14.3507379,54.7955404 C14.5486924,53.9846468 14.9334348,53.2554553 15.4511621,52.6355404 C15.5090258,52.5660936 15.5618136,52.493583 15.6217076,52.4272 C15.7506318,52.2883064 15.8897076,52.1637106 16.0308136,52.0391149 C16.1353742,51.9472 16.2399348,51.8583489 16.3495712,51.7746043 C16.4815409,51.6765617 16.6155409,51.5856681 16.7556318,51.4998809 C16.8997833,51.4100085 17.0490106,51.3303489 17.2022985,51.2557957 C17.3312227,51.1924766 17.4581167,51.1291574 17.5921167,51.0760511 C17.7829652,51.0004766 17.9839652,50.9443064 18.1859803,50.8912 C18.297647,50.861583 18.4062682,50.8237957 18.5209803,50.8013277 C18.8437985,50.7390298 19.1747379,50.7002213 19.5168439,50.7002213 C19.5178591,50.7002213 19.5198894,50.7002213 19.5209045,50.7002213 C19.5219197,50.7002213 19.52395,50.7002213 19.5249652,50.7002213 C19.8670712,50.7002213 20.1980106,50.7390298 20.5218439,50.8013277 C20.6365561,50.8237957 20.7441621,50.861583 20.8578591,50.8912 C21.0588591,50.9443064 21.2588439,51.0004766 21.4517227,51.0760511 C21.5847076,51.1291574 21.7116015,51.1924766 21.8405258,51.2557957 C21.9948288,51.3303489 22.1430409,51.4100085 22.2871924,51.4988596 C22.4272833,51.5856681 22.5612833,51.6765617 22.6922379,51.7746043 C22.8039045,51.8583489 22.9084652,51.9472 23.0120106,52.0391149 C23.1531167,52.1637106 23.2921924,52.2883064 23.4201015,52.4272 C23.4820258,52.493583 23.5337985,52.5660936 23.5916621,52.6355404 C24.1104045,53.2554553 24.495147,53.9846468 24.6931015,54.7955404 L24.6931015,54.7965617 C24.7946167,55.2081362 24.8626318,55.6309447 24.8626318,56.0731574 C24.8626318,57.4896681 24.3042985,58.7713702 23.40995,59.7313702 L23.40995,59.7313702 Z M71.5717833,20.3019234 C71.5727985,20.2917106 71.5748288,20.2866043 71.5768591,20.2774128 C71.5464045,20.2314553 71.5210258,20.1987745 71.4915864,20.1548596 C71.4266167,20.0466043 71.3555561,19.9454979 71.2804348,19.8454128 C69.4460561,17.1543489 68.279647,16.5650723 68.279647,16.5650723 L68.286753,16.582434 C67.7406015,16.2423489 67.1030864,16.0360511 66.4148136,16.0360511 L34.26395,16.0360511 C32.1920258,16.0360511 30.5058591,17.7323915 30.5058591,19.816817 L30.5058591,23.8814979 L20.917753,23.8814979 C19.7127682,23.8814979 18.55245,24.3921362 17.735253,25.2816681 L7.15331364,36.7914553 C6.40920758,37.6003064 6.00010152,38.6522213 6.00010152,39.7531574 L6.00010152,54.2072851 C6.00010152,54.8169872 6.18079848,55.3797106 6.48026818,55.8617532 L6.47011667,55.8607319 C6.47011667,55.8607319 7.35735909,57.5305191 9.02626818,58.8765617 C9.18666212,59.0277106 9.36228333,59.1574128 9.55110152,59.2717957 C9.57445,59.2881362 9.59576818,59.3075404 9.62013182,59.3238809 C9.62825303,59.3249021 9.63434394,59.3218383 9.64246515,59.3218383 C10.0921773,59.5751149 10.6027985,59.7313702 11.1540258,59.7313702 L12.5386924,59.7313702 C13.8553439,62.2641362 16.488647,64.0003064 19.5209045,64.0003064 C22.5541773,64.0003064 25.1874803,62.2641362 26.5041318,59.7313702 L33.9878288,59.7313702 L35.0740409,59.7313702 L49.1755106,59.7313702 C50.4921621,62.2641362 53.1254652,64.0003064 56.1567076,64.0003064 C59.1899803,64.0003064 61.8232833,62.2641362 63.1399348,59.7313702 L70.5718591,59.7313702 C71.3728136,59.7313702 72.0245409,59.0767319 72.0245409,58.2709447 L72.0245409,22.0197106 C72.0245409,21.3936681 71.85095,20.8146043 71.5717833,20.3019234 L71.5717833,20.3019234 Z"
				/>
			</g>
		</Pictogram>
	);
};

TruckPictogram.defaultProps = {
	...Pictogram?.defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'Truck',
	copyrightYear: '2020',
};
TruckPictogram.propTypes = Pictogram.propTypes;
