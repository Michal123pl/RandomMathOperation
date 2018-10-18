import React from 'react';
import Button from './Button';

const CheckButton = ({buttonRoute, check, next}) =>{

	if(buttonRoute === 'check'){
		return (
			<div >
				<Button 
				valueName={'Check'}
				action={check}
				/>
			</div>
		);
	} else {
		return (
			<div >
				<Button 
				valueName={'Next'}
				action={next}
				/>
			</div>
		);
	}

	
}

export default CheckButton;