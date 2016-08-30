import React from 'react';

class Friend extends React.Component {
	render() {
		return (
		     <li className='friend'>
		     		<img className="profile-pic" src={this.props.pictureUrl}/>
		     		<h3>{this.props.name}</h3>
		     		<div className="location">
		     			Location: {this.props.currentLocation.city||'MIA'}, {this.props.currentLocation.state||'MIA'}, {this.props.currentLocation.country||'MIA'}
		     		</div>
		     		<div className="status">
		     			Status: {this.props.status}
		     		</div>
		     		<div className="num-friends">
		     			Friends: {this.props.friendCount}
		     		</div>
		     	</li>
		)
	}
}

export default Friend;