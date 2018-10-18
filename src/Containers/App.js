import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import Particles from 'react-particles-js';
import ParticlesOptions from './ParticlesOptions.js'

import Navigation from './Navigation';
import GameMenu from './GameMenu';
import SigninForm from '../Components/Forms/SigninForm';
import RegisterForm from '../Components/Forms/RegisterForm';
import UserProfile from '../Components/UserProfile';

class App extends Component {
  constructor(){
    super()
    this.state = {
      signedin: false,
      route: 'signin',
      user: {
        id: '',
        name: '',
        email: '',
        score: 0,
        joined: ''
      }
    }
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      score: data.score,
      joined: data.joined
    }})
  }

  loadScore = () => {
    fetch(`https://blooming-bastion-57407.herokuapp.com/profile/${this.state.user.id}`, {
      method: 'get',
      headers: {'Content-Type': 'application/json'}
      })
    .then(response => response.json())
    .then(user => {
      this.setState({user: {
        id: user.id,
        name: user.name,
        email: user.email,
        score: user.score,
        joined: user.joined
      }})
    })
    .then(this.onProfile())
  }

  onSignedin = (route) => {
    this.setState({route: route})
    this.setState({signedin: true})
  }

  onSignin = () => {
    this.setState({route: 'signin'})
  }

  onRegister = () => {
    this.setState({route: 'register'})
  }

  onSignout = () => {
    this.setState({route: 'signin'})
    this.setState({signedin: false})
  }

  onProfile = () => {
    this.setState({route: 'userProfile'})
  }

  onGameMenu = () => {
    this.setState({route: 'gameMenu'})
  }

  render() {
    const { route, signedin } = this.state;

    return(
      <div>
        <Particles 
        className='particles'
        params={ParticlesOptions}
        />
          { signedin === true 
            ? route === 'userProfile'
              ? (
                <div>
                  <Navigation 
                  buttonValue={'Menu'}
                  onProfile={this.onGameMenu}
                  onSignout={this.onSignout}
                  signedin={this.state.signedin}/>
                  <UserProfile 
                  user={this.state.user}/>
                </div>
              )
              :(
              <div>
                <Navigation 
                buttonValue={'Profile'}
                onProfile={this.loadScore}
                onSignout={this.onSignout}
                signedin={this.state.signedin}/>
                <GameMenu user={this.state.user}/>
              </div>
              )
           : (
              route === 'signin' 
              ? (
                  <div>
                    <Navigation 
                    onSignin={this.onSignin}
                    onRegister={this.onRegister}
                    />
                    
                    <SigninForm 
                    loadUser={this.loadUser}
                    onSignedin={this.onSignedin}/>
                  </div>
                )
              : (
                  <div>
                    <Navigation 
                    onSignin={this.onSignin}
                    onRegister={this.onRegister}
                    />

                    <RegisterForm 
                    loadUser={this.loadUser}
                    onSignedin={this.onSignedin}/>
                  </div>
                )
              )
          }
      </div>
    );

    
  }
}

export default App;

