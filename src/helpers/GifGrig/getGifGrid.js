const APIKey = 'VCCatsqVwx7n8ZTvlzftzh8tg8W6Pir8';

export const getGif = async title => {
	const API = `https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&q=${title}&limit=5`;
	const response = await fetch(API);
	const { data } = await response.json();
	const dataReturn = data.map(image => ({ title: image.title, id: image.id, url: image.images.original.url }));
	return dataReturn;
};
