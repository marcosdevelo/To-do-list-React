import React from "react";

//include images into your bundle

//create your first component
export class ListNew extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newItem: "",
			list: []
		};
	}
	updateInput(key, value) {
		this.setState({
			[key]: value
		});
	}

	addItem() {
		const newItem = {
			id: 1 + Math.random(),
			value: this.state.newItem.slice()
		};

		const list = [...this.state.list];
		list.push(newItem);

		this.setState({
			list,
			newItem: ""
		});
	}

	deleteItem(id) {
		const list = [...this.state.list];
		const updatedList = list.filter(item => item.id !== id);
		this.setState({ list: updatedList });
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
				/>

				<button onClick={() => this.addItem()}> Add </button>

				<br />

				<ul>
					{this.state.list.map(item => {
						return (
							<li key={item.id}>
								{item.value}
								<span onClick={() => this.deleteItem(item.id)}>
									<i className="fas fa-times" />
								</span>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}
