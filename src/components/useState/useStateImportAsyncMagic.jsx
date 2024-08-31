import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getGifUseEffect } from './functions/useStateGet';

const defaultProps = {
	title: 'Russia',
};

const UseStateImportAsyncComponentMagic = ({ title = defaultProps.title }) => {
	const [imageInfo, setImageInfo] = useState([]);
	const getImagesAsync = async () => {
		const datosImagenes = await getGifUseEffect(title);
		setImageInfo(datosImagenes);
	};

	useEffect(() => {
		//Esto es machete y aumenta la asignación de espacio en memoria en memoria, creería yo.
		getImagesAsync;
	}, []);

	const [count, setCount] = useState(0);

	return (
		<div>
			<h2>{count}</h2>
			<button onClick={() => setCount(count + 1)}>+1</button>
			<h1>{title}</h1>
			{imageInfo.map(image => (
				<img
					key={image.id}
					src={`${image.url}`}
					alt={`${image.title}`}
				/>
			))}
		</div>
	);
};

export default UseStateImportAsyncComponentMagic;

UseStateImportAsyncComponentMagic.propTypes = {
	title: PropTypes.string.isRequired,
};
