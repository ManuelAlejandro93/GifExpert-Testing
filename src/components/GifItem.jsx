import PropTypes from 'prop-types';

const GifItem = ({ url, title }) => {
	return (
		<div className='card'>
			<img
				src={url}
				alt={title}
			/>
			<p>{title}</p>
		</div>
	);
};

export default GifItem;

GifItem.propTypes = {
	url: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};
