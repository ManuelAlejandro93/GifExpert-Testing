import PropTypes from 'prop-types';
//Emitir un evento al padre.

const InputNewCategory = ({ addCategoryFunction }) => {
	return (
		<>
			<h2>Escribir nueva categoria.</h2>
			<form
				onSubmit={addCategoryFunction}
				data-testid={'form'}>
				<input
					type='text'
					data-testid={'input'}
				/>
			</form>
		</>
	);
};

export default InputNewCategory;

InputNewCategory.propTypes = {
	addCategoryFunction: PropTypes.func.isRequired,
};
