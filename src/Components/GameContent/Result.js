import React from 'react';

const Result = ({feedback, score}) =>{
		if(feedback === 'Correct answer!') {
			return (
				<div className='bg-my-green'>
					<h1>{feedback}</h1>
					<h2>Your score: {score}</h2>
				</div>
			);
		} else if(feedback === 'Wrong answer!') {
			return (
				<div className='bg-red'>
					<h1>{feedback}</h1>
					<h2>Your score: {score}</h2>
				</div>
			);
		}
		else{
			return (
				<div className='pa2 mt4 w-100'>
					<h1>{feedback}</h1>
					<h2>Your score: {score}</h2>
				</div>
			);
		}
}

export default Result;