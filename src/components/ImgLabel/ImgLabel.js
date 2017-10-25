import React, { Component } from 'react';
import './ImgLabel.css';
import '../FontAwesome/css/font-awesome.css';

class ImgLabel extends Component{
	render() {
		const imgClass = `fa fa-${this.props.img} Imglabel-img`;

		return (
			<div className="Imglabel">
				<div className={imgClass}></div> {this.props.label}
			</div>
		);
	}
};

export default ImgLabel;