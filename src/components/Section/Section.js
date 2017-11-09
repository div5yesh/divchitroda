import React, { Component } from 'react';
import './Section.css';

class Section extends Component{

	static defaultProps = {
		name: ""
	}

	render() {

		const sectionClass = "Section " + this.props.name.toLowerCase().replace(' ', '');

		return (
			<div className={sectionClass}>
				<div className="Section-header">{this.props.name}</div>
				{this.props.children}
			</div>
		);
	}
};

export default Section;
