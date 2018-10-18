import React from 'react';

class RegisterForm extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      email: '',
	      password: '',
	      name: '',
	      errorMessage: ''
	    }
	  }

	onNameChange = (event) => {
	   this.setState({name: event.target.value})
	}

	onEmailChange = (event) => {
	   this.setState({email: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value})
	}

	validRegisterData = () => {
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(this.state.name.length < 3) {
			this.setState({errorMessage: 'Name is too short, min. 3 signs'})
			return false;
		}

		else if(!re.test(this.state.email)){
			this.setState({errorMessage: 'Incorrect email'})
			return false;
		}
		else if(this.state.password.length < 6){
			this.setState({errorMessage: 'Password is too short, min 6 signs'})
			return false;
		} else {
			return true;
		}
	}

	registerUser = () => {
		fetch('https://blooming-bastion-57407.herokuapp.com/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
		        email: this.state.email,
		        password: this.state.password,
		        name: this.state.name
      			})
    	})
    		.then(response => response.json())
    		.then(user => {
    			if (user.id) {
    				this.props.loadUser(user)
    				this.props.onSignedin('home');
    			} else {
    				this.setState({errorMessage: 'unable to register. Chech your data'})
    			}
    		})
	}

	onSubmitRegister = () => {
		if (this.validRegisterData()) {
			return this.registerUser();
		}
	}

	render() {

		return (
			<form className='Form'>
				<div className='FormInput'>
					<input 
					type='text' 
					name='Name' 
					id='Name' 
					onChange={this.onNameChange}
					/>
					<label htmlFor='Name'>Name</label>
				</div>

				<div className='FormInput'>
					<input 
					type='email' 
					name='E-mail' 
					id='email'
					onChange={this.onEmailChange}
					/>
					<label htmlFor='email'>E-mail</label>
				</div>
				<div className='FormInput'>
					<input 
					type='password' 
					name='Pass' 
					d='pass'
					onChange={this.onPasswordChange}
					/>
					<label htmlFor='pass'>Password</label>
				</div>
				<div className='FormButton'>
						<input 
						className=' SubmitButton cursor-p hoverEffect' 
						type='button' 
						name='Submit' 
						value='Register'
						onClick={this.onSubmitRegister}
						/>	
				</div>
				<div className='my-red'>
					<p>{this.state.errorMessage}</p>
				</div>
			</form>

		);
	}
}

export default RegisterForm;