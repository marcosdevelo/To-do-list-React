import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: "" };

		this.handleChange = this.handleChange.bind(this);
		this.keyPress = this.keyPress.bind(this);
	}

	handleChange(e) {
		this.setState({ value: e.target.value });
	}

	keyPress(e) {
		if (e.keyCode == 13) {
			console.log("value", e.target.value);
			// put the login here
		}
	}

	render() {
		return (
			<div className="container">
				<input
					id="addToDo"
					type="text"
					placeholder="What needs to be done?"
					value={this.state.value}
					onKeyDown={this.keyPress}
					onChange={this.handleChange}
					fullWidth={true}
				/>
				<ul>
					<li>
						Wash My Hands
						<span>
							<i className="fas fa-times" />
						</span>{" "}
					</li>
					<li>
						Make the Bed
						<span>
							<i className="fas fa-times" />
						</span>{" "}
					</li>
					<li>
						{this.state.value}
						<span>
							<i className="fas fa-times" />
						</span>{" "}
					</li>
				</ul>
			</div>
		);
	}
}
