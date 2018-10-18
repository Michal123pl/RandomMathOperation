import React from 'react';
import './NavigationButton.css';


const NavigationButton = ({NavigationButtonValue, onClick}) => {
	return (
	<div className=''>
			<input 
			className='hoverEffect navigationButton cursor-p'
			type='button' 
			value={NavigationButtonValue} 
			onClick={onClick}
			/>
	</div>

	);
}

export default NavigationButton;
