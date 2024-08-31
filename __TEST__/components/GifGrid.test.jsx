import { render, screen } from '@testing-library/react';
import GifGrid from '../../src/components/GifGrid';

describe('<GifGrid/>', () => {
	// test('Generar un snapshot del componente', () => {
	// 	const { container } = render(<GifGrid title='Naruto' />);
	// 	expect(container).toMatchSnapshot();
	// });
	test('Debe traer la info de carga de datos', () => {
		const { container } = render(<GifGrid title='Naruto' />);
		const infoCargando = screen.getAllByText(/Trayendo la info de/i);

		expect(infoCargando).toBeTruthy();
	});
	test('Debe traer la info del titulo Naruto', () => {
		const { container } = render(<GifGrid title='Naruto' />);
		const infoNaruto = screen.getAllByText(/Naruto/i);

		expect(infoNaruto).toBeTruthy();
	});
});
