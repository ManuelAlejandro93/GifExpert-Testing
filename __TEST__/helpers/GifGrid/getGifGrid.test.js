import { element } from 'prop-types';
import { getGif } from '../../../src/helpers/GifGrig/getGifGrid';

const mockArrayResult = [
	{
		title: 'Dragon Ball GIF by Toei Animation',
		id: 'GRSnxyhJnPsaQy9YLn',
		url: 'https://media1.giphy.com/media/GRSnxyhJnPsaQy9YLn/giphy.gif?cid=4af62d6bb9kukxwyg8eynhqhz081zoxdtq5asdow2d61znd7&ep=v1_gifs_search&rid=giphy.gif&ct=g',
	},
	{
		title: 'Dragon Ball Super GIF by Toei Animation',
		id: 'WOb8EeFziTQNE02WXs',
		url: 'https://media1.giphy.com/media/WOb8EeFziTQNE02WXs/giphy.gif?cid=4af62d6bb9kukxwyg8eynhqhz081zoxdtq5asdow2d61znd7&ep=v1_gifs_search&rid=giphy.gif&ct=g',
	},
	{
		title: 'Dragon Ball Super Ultra Instinct GIF by Toei Animation',
		id: 'SIuI7syOPvm1HAd5GF',
		url: 'https://media1.giphy.com/media/SIuI7syOPvm1HAd5GF/giphy.gif?cid=4af62d6bb9kukxwyg8eynhqhz081zoxdtq5asdow2d61znd7&ep=v1_gifs_search&rid=giphy.gif&ct=g',
	},
	{
		title: 'Dragon Ball GIF by Toei Animation',
		id: 'aAbax5anloMNk6TSP9',
		url: 'https://media4.giphy.com/media/aAbax5anloMNk6TSP9/giphy.gif?cid=4af62d6bb9kukxwyg8eynhqhz081zoxdtq5asdow2d61znd7&ep=v1_gifs_search&rid=giphy.gif&ct=g',
	},
	{
		title: 'Dragon Ball GIF by Toei Animation',
		id: 'dxld1UBIiGuoh31Fus',
		url: 'https://media1.giphy.com/media/dxld1UBIiGuoh31Fus/giphy.gif?cid=4af62d6bb9kukxwyg8eynhqhz081zoxdtq5asdow2d61znd7&ep=v1_gifs_search&rid=giphy.gif&ct=g',
	},
];

describe('test on getGifGrid()', () => {
	test('cada elemento debe ser un objeto y tener las 3 propiedades, cada una con un string en su interior', async () => {
		const result = await getGif('goku');
		result.forEach(element => {
			expect(element).toEqual({
				title: expect.any(String),
				id: expect.any(String),
				url: expect.any(String),
			});
		});
	});

	// test('every element of returned array must be an object.', async () => {
	// 	const mockResult = 6;
	// 	// Act.
	// 	mockArrayResult.forEach(element => {
	// 		expect(element instanceof Object).toBe(true);
	// 	});
	// });
});
