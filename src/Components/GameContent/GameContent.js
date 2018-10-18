import React, { Component } from 'react';

import StandardOperation from './StandardOperation';
import Equation from './Equation';

class GameContent extends Component {
	constructor(props){
		super(props)
		this.state = {
			numbersInOperations: {
				num1: 0,
				num2: 0,
				//Modifier of the unknown
				modOfTheUnknown1: 0,
				modOfTheUnknown2: 0,
				operatorChanger: 1
			},
			operationSign: '',
			userResp: 0,
			buttonRoute: 'check',
		    feedback: '',
		    user: {
			    id: this.props.user.id,
			    name: this.props.user.name,
			    email: this.props.user.email,
			    score: this.props.user.score,
			    joined: this.props.user.joined
			}
		}
	}

	onTextChange = (event) => {
    this.setState({userResp: event.target.value})
  	}

	randomizeNumbers = () => {
		if(this.props.gameMode === 'E-'){
		this.setState({numbersInOperations:{ 
			num1: Math.floor((Math.random() * 100) + 1),
			num2: Math.floor((Math.random() * 100) + 1),
			modOfTheUnknown1: Math.floor(Math.random() * 11),
			modOfTheUnknown2: Math.floor((Math.random() * 10) + 1),
			operatorChanger: -1
		}})
		}else{
			this.setState({numbersInOperations:{ 
			num1: Math.floor((Math.random() * 100) + 1),
			num2: Math.floor((Math.random() * 100) + 1),
			modOfTheUnknown1: Math.floor(Math.random() * 11),
			modOfTheUnknown2: Math.floor((Math.random() * 10) + 1),
			operatorChanger: 1
		}})
		}
	}

	onNext = () => {
	    this.setState({feedback: ''})
	    this.setState({buttonRoute: 'check'})
	    this.randomizeNumbers()
	}

	checkStandardOperation = () => {
		const {num1, num2} = this.state.numbersInOperations;
	    const {gameMode} = this.props;
	    const {userResp} = this.state;
		if(gameMode === '+'){
		      if(num1+num2!==parseInt(userResp, 10)){
		        this.WrongAnswer(1);
		      }else{
		        this.CorrectAnswer(2);
		      }
		    } else if(gameMode === '-'){
		      if(num1-num2!==parseInt(userResp, 10)){
		        this.WrongAnswer(1);
		      }else{
		        this.CorrectAnswer(2);
		      }
		    } else if(gameMode === '*'){
		      if(num1*num2!==parseInt(userResp, 10)){
		        this.WrongAnswer(1);
		      }else{
		        this.CorrectAnswer(4);
		      }
		    }else if(gameMode ==='/'){
		      // floorRes variable reduce result of operation to one number after the comma
		      const floorRes = (Math.floor((num1/num2)*10))/10 ; 

		      if(floorRes!==parseFloat(userResp, 10)){
		        this.WrongAnswer(1);
		      }else{
		        this.CorrectAnswer(4);
		      }
		    }
	}

	checkEquationOperation = () => {
		const {num1, num2, modOfTheUnknown2, operatorChanger} = this.state.numbersInOperations;
	    const {userResp} = this.state;
	    const equationModel = ((num2*operatorChanger)-(num1*operatorChanger))/modOfTheUnknown2;
	    

		if(parseFloat(userResp) === (Math.floor(equationModel*10)/10)){
	    		this.CorrectAnswer(10);
	    	} else{
	    		this.WrongAnswer(1);
	    	}
	}

  	onCheck = () =>{
  		const {gameMode} = this.props;

	    if(gameMode === 'E+' || gameMode === 'E-'){
	    	this.checkEquationOperation()
	    }else {
		    this.checkStandardOperation()
		}
	  }


	CorrectAnswer = (point) => {
 		let newScore = parseInt(this.state.user.score, 10)+parseInt(point, 10);
 		this.props.updateScore(newScore);
    	return (
	        this.setState({feedback: 'Correct answer!'}),
	        this.setState({buttonRoute: 'next'}),
	        this.setState({user: {
	        	score: newScore
	        }})
	    );
	}

	WrongAnswer = (point) => {
		let newScore = parseInt(this.state.user.score, 10)-parseInt(point, 10);
 		this.props.updateScore(newScore);
	    return (
	        this.setState({feedback: 'Wrong answer!'}),
	        this.setState({user: {
	        	score: newScore
	        }})
	    );
	}

	checkSign = () => {
		if(this.props.gameMode === 'E+'){
			this.setState({operationSign: '+'})
			console.log(this.props.gameMode)
		}else{
			this.setState({operationSign: ''})
			console.log(this.props.gameMode)
		}
	}

	componentDidMount(){
		this.randomizeNumbers();
		this.checkSign();
	}

	render() {

		return(
			<div>
			{ this.props.gameMode === 'E+' || this.props.gameMode === 'E-'
				? <Equation 
					onMenu={this.props.onMenu}
					gameModeName={this.props.gameModeName}
					gameMode={this.props.gameMode}
					numbersInOperations={this.state.numbersInOperations}
					operationSign={this.state.operationSign}
					userResp={this.state.userResp}
					onTextChange={this.onTextChange}
					buttonRoute={this.state.buttonRoute}
					onNext={this.onNext}
					onCheck={this.onCheck}
					feedback={this.state.feedback}
					score={this.state.user.score}
				/>

				: <StandardOperation
					onMenu={this.props.onMenu}
					gameModeName={this.props.gameModeName}
					gameMode={this.props.gameMode}
					numbersInOperations={this.state.numbersInOperations}
					userResp={this.state.userResp}
					onTextChange={this.onTextChange}
					buttonRoute={this.state.buttonRoute}
					onNext={this.onNext}
					onCheck={this.onCheck}
					feedback={this.state.feedback}
					score={this.state.user.score}
				/>
			}
			</div>
		);
	}
}

export default GameContent;

/*
<div>
					<Button 
					id={'menu'}
					valueName={'Menu'}
					action={this.props.onMenu}/>
				</div>
				<h1 className=''>{this.props.gameModeName}</h1>
				<div>
					<h1 className=''>{this.state.num1} {this.props.gameMode} {this.state.num2} = </h1>
					{ this.state.feedback === 'Correct answer!'
					? <h1>{this.state.userResp}</h1>
					: <TextField textChange={this.onTextChange}/>
				}
				</div>
				<CheckButton 
				buttonRoute={this.state.buttonRoute}
				next={this.onNext}
				check={this.onCheck}/>
				<Result 
				feedback={this.state.feedback}
				score={this.state.user.score}
				/>
				{ this.state.gameModeName === 'Division'
					? (<div>
						<p>* Enter result with 1 number after comma precision</p>
					</div>)
					:(<div></div>)
				}
*/