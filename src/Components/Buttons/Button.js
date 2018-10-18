import React from 'react';
import './Button.css';

const Button = ({idName, valueName, action}) => {
	return (
		<div className='dib'>
		<input 
			id={idName}
			className='hoverEffect buttonMain cursor-p'
			type='button' 
			value={valueName} 
			onClick={action}
			/>
		</div>
	);
}

export default Button;