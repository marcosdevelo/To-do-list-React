import React from "react";

//include images into your bundle

//create your first component
export class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newItem: "",
			list: [
				{
					id: 23,
					label: "Make the bed"
				},
				{
					id: 41,
					label: "Wash my hands"
				},
				{
					id: 59,
					label: "Walk the dog"
				},
				{
					id: 15,
					label: "Eat"
				}
			]
		};
	}
	updateInput(key, value) {
		this.setState({
			[key]: value
		});
	}

	deleteItem(pupu) {
		const list = [...this.state.list];
		const updatedList = list.filter(item => item.label !== pupu);
		this.setState({ list: updatedList });
	}

	render() {
		return (
			<div className="container">
				<header>
					<h1 className="top">todos</h1>
				</header>

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

				<br />

				<ul>
					{this.state.list.map(item => {
						return (
							<li key={item.id}>
								{item.label}
								<span
									onClick={() => this.deleteItem(item.label)}>
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
