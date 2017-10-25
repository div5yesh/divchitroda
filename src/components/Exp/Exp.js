import React, { Component } from 'react';
import './Exp.css';

class Exp extends Component{
	render() {
		const roles = this.props.details.roles.map((role, key) => { 
			return (<div className="Exp-role" key={key}>{role}</div>);
		});

		return (
			<div className="Exp">
				<div className="Exp-period">{this.props.period}<div className="Exp-unit">{this.props.unit}</div></div>
				<div className="Exp-details">
					<div className="Exp-title">{this.props.details.title.toUpperCase()}</div>
					<div className="Exp-company">{this.props.details.company.toUpperCase()}</div>
					<div className="Exp-roles">
						{roles}
					</div>
				</div>
			</div>
		);
	}
};

export default Exp;