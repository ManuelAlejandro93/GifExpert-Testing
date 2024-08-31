import { useState } from 'react';
import InputNewCategory from './InputNewCategory';
import GifGrid from './GifGrid';

const MainPage = () => {
	const [categories, setCategories] = useState(['one punch man', 'dragon ball']);
	const addCategory = event => {
		console.log('Bueno, entré a la función por defecto en el padre.');
		event.preventDefault();
		const value = event.target[0].value.trim();
		if (value.length <= 3) return;
		// validación con regex;
		const regex = new RegExp(`^${value}$`, 'i');
		if (categories.some(category => category.match(regex))) return;
		setCategories([value, ...categories]);
		event.target[0].value = '';
	};

	return (
		<>
			<h1>MainPage</h1>
			<InputNewCategory addCategoryFunction={addCategory} />

			<ol>
				{categories.map(elementName => (
					<GifGrid
						title={elementName}
						key={`${elementName}`}
					/>
				))}
			</ol>
		</>
	);
};

export default MainPage;
