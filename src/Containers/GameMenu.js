import React, { Component } from 'react';
import Choice from './Choice';
import GameContent from '../Components/GameContent/GameContent';
import './GameMenu.css';

class GameMenu extends Component {
	constructor(props) {
		super(props)
		this.state = {
			route: 'menu',
			gameMode: '',
			gameModeName: '',
	      	user: {
		        id: this.props.user.id,
		        name: this.props.user.name,
		        email: this.props.user.email,
		        score: this.props.user.score,
		        joined: this.props.user.joined
		    }
		}
	} 

 	onChoice = (event) => {
	    this.setState({gameMode: event.target.id})
	    this.setState({gameModeName: event.target.value})
	    this.setState({route: 'gameContent'})
	}

 	onMenu = () => {
	    this.setState({route: 'menu'})
	}

	 updateScore = (newScore) => {
	  	fetch('https://random-math-operation.herokuapp.com/score', {
	  		method: 'put',
	  		headers: {'Content-Type': 'application/json'},
	  		body: JSON.stringify({
	  			id: this.props.user.id,
	  			score: newScore
	  		})
	  	})
	  	.then(response => response.json())
	  	.then(number => {
	  	})
	}

	render() {
		const {route} = this.state;
		return(
			<div>
				{ route === 'menu'
					? <div className='relative georgia tc container'>
							<h1 className='mb6'>Choose what do you want to practice</h1>
							<Choice choice={this.onChoice}/>
						</div>
					:(
						<div className='relative georgia tc container'>
							<GameContent 
							updateScore={this.updateScore}
							gameMode={this.state.gameMode}
							gameModeName={this.state.gameModeName}
							onMenu={this.onMenu}
			            	user={this.state.user}
			            	/>
						</div>
					)
				}
			</div>
		);
	}

}

export default GameMenu;