import React from 'react';
import NavigationButton from '../Components/Buttons/NavigationButton';
import './Navigation.css';

const Navigation = ({signedin, onSignout, buttonValue, onProfile, onSignin, onRegister}) => {
	return (
		<div className=''>
		{ signedin === true
			? 
			<div className='nav-container'>
				<NavigationButton 
				NavigationButtonValue={'Signout'}
				onClick={onSignout}
				/>
				<NavigationButton 
				NavigationButtonValue={buttonValue}
				onClick={onProfile}
				/>

			</div>
			: (
			<div className='nav-container'>
				<NavigationButton 
				NavigationButtonValue={'Signin'}
				onClick={onSignin}
				/>
				<NavigationButton 
				NavigationButtonValue={'Register'}
				onClick={onRegister}
				/>
			</div>
			)
		}
		</div>
	);
}

export default Navigation;