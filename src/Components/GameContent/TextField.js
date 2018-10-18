import React from 'react';
import './TextField.css';

const TextField = ({textChange}) =>{
	return (
		<div>
			<input 
			type='number'
			className='br3 bg-near-white tc answerInput'
			onChange={textChange}
			autoFocus='on'
			/>
		</div>
	);
}

export default TextField;