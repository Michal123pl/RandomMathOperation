import React from 'react';
import './UserProfile.css';

const UserProfile = ({user}) => {
	return (
		<div className='container'>
			<div className='tc'>
				<h1>Your Profile</h1>
			</div>
			<div className=''>
				<table className='table'>
					<tbody>
						<tr>
							<th>Name:</th>
							<td>{user.name}</td>
						</tr>
						<tr>
							<th>Email:</th>
							<td>{user.email}</td>
						</tr>
						<tr>
							<th>Total score:</th>
							<td>{user.score}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);

}

export default UserProfile;