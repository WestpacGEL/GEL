/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Container, Grid } from '@westpac/grid';
import { Cell } from '../_utils';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container>
				<Grid columns={5}>
					<Cell height={2}>1</Cell>
					<Cell>2</Cell>
					<Cell>3</Cell>
					<Cell height={6}>4</Cell>
					<Cell>5</Cell>
					<Cell>6</Cell>
					<Cell>7</Cell>
					<Cell>8</Cell>
					<Cell>9</Cell>
					<Cell>10</Cell>
					<Cell height={3}>11</Cell>
					<Cell>12</Cell>
					<Cell>13</Cell>
					<Cell>14</Cell>
					<Cell>15</Cell>
					<Cell>16</Cell>
					<Cell>17</Cell>
					<Cell>18</Cell>
					<Cell>19</Cell>
					<Cell>20</Cell>
					<Cell>21</Cell>
					<Cell>22</Cell>
					<Cell>23</Cell>
					<Cell>24</Cell>
				</Grid>
			</Container>
		</Playground>
	);
};

export default Demo;
