


import React from "react";

//include images into your bundle

//create your first component
export class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newItem: "",
			list: [],
			username: null
		};
	}


	updateInput(key, value) {
		this.setState({
			[key]: value
		});
	}



	render() {
		return (
			<div className="container">
				<input
					id="addToDo"
					type="text"
					placeholder="What needs to be done?"
					value={this.state.newItem}
					onChange={e => this.updateInput("newItem", e.target.value)}
					onKeyPress={e => {
						e.charCode == 13
							? this.setState({
									list: this.state.list.concat([
										{
											label: e.target.value
										}
									])
							  })
							: null;
					}}
				/>

				<button onClick={() => this.deleteList()}> Delete List </button>

				<br />

				<ul>
					{this.state.list.map((content,index) => {
						return (
							<li key={index}>
								{content.label}
								<span
									onClick={() => this.deleteItem(content.label)}>
									<i className="fas fa-times" />
								</span>
							</li>
						);
					})}
					<li>{this.state.list.length + " Items left"} </li>
				</ul>
			</div>
		);
	}
}