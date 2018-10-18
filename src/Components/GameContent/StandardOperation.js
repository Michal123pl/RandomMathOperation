import React from 'react';
import './StandardOperation.css';
import TextField from './TextField';
import CheckButton from '../Buttons/CheckButton';
import Result from './Result';
import Button from '../Buttons/Button';


const StandardOperation = ({onMenu, gameModeName, gameMode, numbersInOperations, userResp, onTextChange, buttonRoute, onNext, onCheck, feedback, score}) => {
	const {num1, num2} = numbersInOperations;
	return(
			<div className='contentContainer'>
				<div>
					<Button 
					id={'menu'}
					valueName={'Menu'}
					action={onMenu}/>
				</div>
				<h1 className=''>{gameModeName}</h1>
				<div>
					<h1 className=''>{num1} {gameMode} {num2} = </h1>
					{ feedback === 'Correct answer!'
					? <h1>{userResp}</h1>
					: <TextField textChange={onTextChange}/>
				}
				</div>
				<CheckButton 
				buttonRoute={buttonRoute}
				next={onNext}
				check={onCheck}/>
				<Result 
				feedback={feedback}
				score={score}
				/>
				{ gameModeName === 'Division'
					? (<div>
						<p>* Enter result rounded down with 1 number after comma precision (3.66 = 3.6 but -3.66 = -3.7)</p>
					</div>)
					:(<div></div>)
				}
			</div>
	);
}

export default StandardOperation;