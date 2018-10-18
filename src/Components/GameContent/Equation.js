import React from 'react';
import './Equation.css';
import TextField from './TextField';
import CheckButton from '../Buttons/CheckButton';
import Result from './Result';
import Button from '../Buttons/Button';

const Equation = ({onMenu, gameModeName, gameMode, numbersInOperations, operationSign, feedback, buttonRoute, onNext, onCheck, score, userResp, onTextChange}) => {
	const {num1, num2, modOfTheUnknown2, modOfTheUnknown1, operatorChanger} = numbersInOperations;

	return (
		<div className='contentContainerEquation'>
			<div>
				<Button 
				id={'menu'}
				valueName={'Menu'}
				action={onMenu}/>
			</div>

			<h1 className=''>{gameModeName}</h1>
			<div>
				<div>
				{ modOfTheUnknown1 === 0 
					? <h1>{num1} = -{modOfTheUnknown2}x {operationSign} {parseInt(num2*operatorChanger)}</h1>
					: ( modOfTheUnknown1 === modOfTheUnknown2
						? <h1>{modOfTheUnknown1}x {operationSign} {parseInt(num1*operatorChanger)} = {num2}</h1>
						: <h1>{modOfTheUnknown1}x {operationSign} {parseInt(num1*operatorChanger)} = {parseInt(modOfTheUnknown1 - modOfTheUnknown2)}x {operationSign} {parseInt(num2*operatorChanger)}</h1>
					)
				}
				</div>
				<div>
					{ feedback === 'Correct answer!'
						?<h1>x = {userResp}</h1>
						:<h1>
							x = <TextField textChange={onTextChange}/>
						</h1>
					}
				</div>
			</div>
			<CheckButton 
				buttonRoute={buttonRoute}
				next={onNext}
				check={onCheck}/>
			<Result 
				feedback={feedback}
				score={score}/>
			<div>
				<p>* Enter result rounded down with 1 number after comma precision (3.66 = 3.6 but -3.66 = -3.7)</p>
			</div>
			
		</div>
	);
}

export default Equation;