import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getGifUseEffect } from './functions/useStateGet';

const defaultProps = {
	title: 'Russia',
};

const UseStateComponent = ({ title = defaultProps.title }) => {
	const [imageInfo, setImageInfo] = useState([]);

	const innerAsyncGet = async () => {
		const APIKey = 'VCCatsqVwx7n8ZTvlzftzh8tg8W6Pir8';
		const API = `https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&q=${title}&limit=5`;
		const response = await fetch(API);
		const { data } = await response.json();
		const dataReturn = data.map(image => ({ title: image.title, id: image.id, url: image.images.original.url }));
		console.log(dataReturn);
		setImageInfo(dataReturn);
	};

	useEffect(() => innerAsyncGet, []);

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

export default UseStateComponent;

UseStateComponent.propTypes = {
	title: PropTypes.string.isRequired,
};
