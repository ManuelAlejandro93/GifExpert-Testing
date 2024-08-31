import { fireEvent, render, screen } from '@testing-library/react';
import InputNewCategory from '../../src/components/InputNewCategory';

describe('Component <InputNewCategory/>', () => {
	// beforeEach(() => {
	// 	render(
	// 		<InputNewCategory
	// 			addCategoryFunction={() => {
	// 				console.log('Aquí estoy.');
	// 			}}
	// 		/>,
	// 	);
	// });

	// test('El componente corresponde al snapshot', () => {
	// 	const { container } = render(
	// 		<InputNewCategory
	// 			addCategoryFunction={() => {
	// 				console.log('Aquí estoy.');
	// 			}}
	// 		/>,
	// 	);

	// 	expect(container).toMatchSnapshot();
	// });

	// test('Ante el ingreso de "gordo" en el input solito, este debe cambiar sin importar el submit del formulario.', () => {
	// 	const inputText = screen.getByRole('textbox');

	// 	fireEvent.input(inputText, { target: { value: 'Gordo' } });
	// 	expect(inputText.value).toBe('Gordo');
	// });

	// test('ante el submit "Vegeta", la función pasada al componente debe renderizar el console.log("Estoy en la función")', () => {
	// 	const mockValue = 'Vegeta';
	// 	const form = screen.getByTestId(/form/i);
	// 	const input = screen.getByTestId(/input/i);
	// 	const event = { target: { value: 'Vegeta' } };
	// 	fireEvent.input(input, event);
	// 	fireEvent.submit(form);
	// });

	test('Comprobar que se ejecuta 1 vez la función de cuando se hace un submit.', () => {
		const mockFunction = jest.fn();

		render(<InputNewCategory addCategoryFunction={mockFunction} />);

		const form = screen.getByTestId(/form/i);
		const input = screen.getByTestId(/input/i);
		const event = { target: { value: 'Vegeta' } };
		fireEvent.input(input, event);
		fireEvent.submit(form);

		expect(mockFunction).toHaveBeenCalledTimes(3); // Esto debería fallar.
	});
});
