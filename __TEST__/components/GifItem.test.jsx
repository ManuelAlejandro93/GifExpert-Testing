import { render, screen } from '@testing-library/react';

import GifItem from '../../src/components/GifItem';

describe('Tests on </GifItem>', () => {
	//Arrange.
	const mockUrl = 'https://www.google.com/';
	const mockTitle = 'estoy en google';

	test('el titulo debe existir en la pantalla.', () => {
		//Act.
		render(
			<GifItem
				url={mockUrl}
				title={mockTitle}
			/>,
		);

		//Assert.
		expect(screen.queryByText(/estoy en google/i)).toBeTruthy();
	});

	test('data should be an object js element', () => {
		//Act.
		render(
			<GifItem
				url={mockUrl}
				title={mockTitle}
			/>,
		);

		const { src, alt } = screen.getByRole('img');
		//Assert.
		expect(src).toBe(mockUrl);
		expect(alt).toBe(mockTitle);
	});

	test('Props must be required.', () => {
		//Act.
		const { container } = render(<GifItem />);
		//Assert.
		expect(screen.queryByRole('img').innerHTML === '').toBeTruthy();
	});

	// Instantánea del componente.
	test('el componente debe coinncidir con su foto.', () => {
		const { container: syntaxComponent } = render(
			<GifItem
				url={mockUrl}
				title={mockTitle}
			/>,
		);

		expect(syntaxComponent).toMatchSnapshot();
	});
});
