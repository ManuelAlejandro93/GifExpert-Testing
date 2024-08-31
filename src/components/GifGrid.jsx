import PropTypes from 'prop-types';

import GifItem from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ title = defaultProps.title }) => {
	const { gifsData, isLoading } = useFetchGifs(title);

	return (
		<>
			<h2>{title}</h2>
			{isLoading && <h1>Trayendo la info de: {title}</h1>}
			{!isLoading && (
				<div className='card-grid '>
					{gifsData.map(gif => (
						<GifItem
							key={gif.id}
							{...gif} /* manda todas las props por cada imagen */
						/>
					))}
				</div>
			)}
		</>
	);
};

export default GifGrid;

GifGrid.propTypes = {
	title: PropTypes.string.isRequired,
};

const defaultProps = {
	title: 'Russia',
};
