import React from "react";
import "./TariffItem.scss";

export class TariffItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			initWidth: `${Math.floor(800/props.totalCount)}px`,
			width: `${Math.floor(800/props.totalCount)}px`
		}
	}

	componentDidMount() {
		window.addEventListener("resize", this.onWindowResize.bind(this));
	}

	componentWillUnount() {
		window.removeEventListener("resize");
	}

	onWindowResize() {
		if (window.innerWidth <= 600) {
			this.setState({
				width: "100%"
			})
		} else {
			this.setState({
				width: this.state.initWidth
			})
		}
	}

	render() {
		return (
			<div
				className="tariffItem"
				style={{
					width: `${this.state.width}`
				}}>
				<div className="img-holder">
					<img src={this.props.img}/>
				</div>
				<p className="block-header">{this.props.header}</p>
				<p className="block-text">{this.props.children}</p>
			</div>
		)
	}
}
