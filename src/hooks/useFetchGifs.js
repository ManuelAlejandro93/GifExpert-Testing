import { useEffect, useState } from 'react';
import { getGif } from '../helpers/GifGrig/getGifGrid';

export const useFetchGifs = title => {
	const [gifsData, setGifsData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		getGif(title).then(result => {
			setGifsData(result);
			setIsLoading(false);
		});
	}, []);

	return { gifsData, isLoading };
};
