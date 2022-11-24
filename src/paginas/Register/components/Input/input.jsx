import React from 'react';
// import './Input.css';

const Input = ({ attribute, handleChange, param }) => {
	return (
		<div>
			<input 
			id={attribute.id}
			name={attribute.name}
			placeholder={attribute.placeholder}
			type={attribute.type}
			onChange={ (e) => handleChange(e.target.name, e.target.value) }
			className={ param ? "pa3 f6 grow no-underline br-pill ba bw1 ph3  mb2 dib ba b--light-red bg-lightest-blue" : attribute.class}
			/>

		</div>

		);
}

export default Input;