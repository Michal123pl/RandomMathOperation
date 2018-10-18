import React from 'react';
import './SigninForm.css';

class SigninForm extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      signInEmail: '',
	      signInPassword: '',
	      incorrectLogin: ''
	    }
	  }

	onEmailChange = (event) => {
	   this.setState({signInEmail: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value})
	}

	onSubmitSignin = () => {
		fetch('https://blooming-bastion-57407.herokuapp.com/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
		        email: this.state.signInEmail,
		        password: this.state.signInPassword
      			})
    		})
    		.then(response => response.json())
    		.then(user => {
        		if(user.id){
		          this.props.loadUser(user);
		          this.props.onSignedin('home');
        		} else {
        			this.setState({incorrectLogin: 'Ups! Something went wrong, try again'})
        		}
     	 	})
		}



	render() {
		return (
			<form className='Form'>
				<div className='FormInput'>
					<input type='email' name='e-mail' id='e-mail' onChange={this.onEmailChange}/>
					<label htmlFor='e-mail'>E-mail</label>
				</div>
				<div className='FormInput'>
					<input type='password' name='Password' id='password' onChange={this.onPasswordChange}/>
					<label htmlFor='password'>Password</label>
				</div>
				<div className='FormButton'>
						<input  
						className='SubmitButton cursor-p hoverEffect'
						type='button' 
						name='Submit' 
						value='Signin' 
						onClick={this.onSubmitSignin}
						/>
				</div>
				<div className='my-red'>
					<p>{this.state.incorrectLogin}</p>
				</div>
			</form>	
		

		);
	}
}

export default SigninForm;