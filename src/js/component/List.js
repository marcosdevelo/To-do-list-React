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
					pupu: "Make the bed"
				},
				{
					id: 41,
					pupu: "Wash my hands"
				},
				{
					id: 59,
					pupu: "Walk the dog"
				},
				{
					id: 15,
					pupu: "Eat"
				}
			]
		};
	}
	updateInput(key, value) {
		this.setState({
			[key]: value
		});
	}

	/*addItem() {
		const newItem = {
			id: 1 + Math.random(),
			value: this.state.newItem.slice()
		};

		//alert(newItem.value);

		const list = [...this.state.list];
		list.push(newItem);

		this.setState({
			list: list,
			newItem: ""
		});
	}
*/
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
					onKeyPress={e => {
						e.charCode == 13
							? this.setState({
									list: this.state.list.concat([
										{
											pupu: e.target.value
										}
									])
							  })
							: null;
					}}
				/>

				<button onClick={() => this.addItem()}> Add </button>

				<br />

				<ul>
					{this.state.list.map(item => {
						return (
							<li key={item.pupu}>
								{item.pupu}
								<span onClick={() => this.deleteItem(item.id)}>
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
