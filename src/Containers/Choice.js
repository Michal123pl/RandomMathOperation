import React from 'react';
import Button from '../Components/Buttons/Button';

const Choice = ({choice}) => {
	return (
		<div>
			<Button 
			idName='+'
			valueName='Addition'
			action={choice}
			/>
			<Button 
			idName='-'
			valueName='Substraction'
			action={choice}
			/>
			<Button 
			idName='*'
			valueName='Multiplication'
			action={choice}
			/>
			<Button 
			idName='/'
			valueName='Division'
			action={choice}
			/>
			<Button 
			idName='E+'
			valueName='Equations wiht addition'
			action={choice}
			/>
			<Button 
			idName='E-'
			valueName='Equations wiht substraction'
			action={choice}
			/>
		</div>
	);
}

export default Choice;

