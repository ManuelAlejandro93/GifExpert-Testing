import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getGifUseEffect } from './functions/useStateGet';

const defaultProps = {
	title: 'Russia',
};

const UseStateImportAsyncComponent = ({ title = defaultProps.title }) => {
	const [imageInfo, setImageInfo] = useState([]);

	useEffect(() => {
		getGifUseEffect(title).then(info => setImageInfo(info));
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

export default UseStateImportAsyncComponent;

UseStateImportAsyncComponent.propTypes = {
	title: PropTypes.string.isRequired,
};
