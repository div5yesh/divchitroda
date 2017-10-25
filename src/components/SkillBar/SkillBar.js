import React, { Component } from 'react';
import './SkillBar.css';

class SkillBar extends Component{
	render() {
		const skillbarValue = {
			width: this.props.value + '%'
		};
		return (
			<div className="Skillbar">
				<div className="Skillbar-label">{this.props.name.toUpperCase()}</div>
				<div className="Skillbar-total">
					<div className="Skillbar-value" style={skillbarValue}></div>
				</div>
			</div>	
		);
	}
}

export default SkillBar;