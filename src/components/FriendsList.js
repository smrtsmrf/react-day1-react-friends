import React from 'react';
import Friend from './Friend';
import friends from '../../friends'

class FriendsList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			searchNameText: '',
			searchFriendsText: '',
			orderBy: 'name',
			order: 'asc'
		}
	}

	render() {
		const friendsList = friends.filter(friend => friend.name.toLowerCase().indexOf(this.state.searchNameText.toLowerCase()) !== -1 )
		.sort((a,b) => a[this.state.orderBy] > b[this.state.orderBy])
		.map(friend => (
		           <Friend
			           currentLocation={friend.current_location || {}}
			           friendCount={friend.friend_count}
			           key={friend.$$hashKey}
			           name={friend.name}
			           pictureUrl={friend.pic_square}
			           status={friend.status ? friend.status.message : ''}
		        	/>
		));

		const displayFriends = this.state.order === 'asc' ? friendsList : friendsList.slice().reverse();
		return (
		      <div>
		        	<form className="form-inline searchForm" role="form">
		        		<div className="form-group">
			        		<select
			        			className="input-medium"
			        		
			        		>
			        			<option>Name</option>
			        			<option>#Friends</option>
			        		</select>

			        		<input 
			        			className="form-control" 
			        			placeholder="Search for Friends"
			        			value={this.state.searhNameText}
			        			onChange={this.handleChange.bind(this, 'searchNameText')}
			        		/>
			        		<select 
			        			className="input-medium"
			        			value={this.state.orderBy}
			        			onChange={this.handleChange.bind(this, 'orderBy')}
			        		>
			        			<option>Name</option>
			        			<option>#Friends</option>
			        		</select>

			        		<select 
			        			className="input-medium"
			        			value={this.state.order}
			        			onChange={this.handleChange.bind(this, 'order')}
			        		>
			        			<option value="dsc">Descending</option>
			        			<option value="asc">Ascending</option>
			        		</select>
		        		</div>
		        	</form>

		        	<ul>
		        	{displayFriends}
		        	</ul>
		     </div>

		);
	}

	handleChange(field, event) {
		this.setState({
			[field]: event.target.value
		});
	}
}

export default FriendsList;