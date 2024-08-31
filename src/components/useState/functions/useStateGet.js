const APIKey = 'VCCatsqVwx7n8ZTvlzftzh8tg8W6Pir8';
const APIKey2 = 'x0ujtZZeAgD99aVFAc5fqblT7jBm5oU4';
const APIKey3 = 'YX0THbUYgiVR3Y3RrxYxnoOf7pntXGgt';

export const getGifUseEffect = async (title = 'russia') => {
	const API = `https://api.giphy.com/v1/gifs/search?api_key=${APIKey3}&q=${title}&limit=5`;
	const response = await fetch(API);
	const { data } = await response.json();
	const dataReturn = data.map(image => ({ title: image.title, id: image.id, url: image.images.original.url }));
	return dataReturn;
};
