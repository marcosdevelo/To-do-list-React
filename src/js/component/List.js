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

	componentDidMount() {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/marcostodo", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				console.log(resp.ok); // will be true if the response is successfull
				console.log(resp.status); // the status code = 200 or code = 400 etc.
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(data => {
				//here is were your code should start after the fetch finishes
				console.log(data); //this will print on the console the exact object received from the server
				this.setState({
					list: data,
					newItem: ""
				});
			})
			.catch(error => {
				//error handling
				console.log(
					"No se pudo obtener la lista, vamos a crearla: ",
					error
				);
				fetch(
					"https://assets.breatheco.de/apis/fake/todos/user/marcostodo",
					{
						method: "POST",
						body: JSON.stringify([]),
						headers: {
							"Content-Type": "application/json"
						}
					}
				)
					.then(resp => {
						console.log(resp.ok); // will be true if the response is successfull
						console.log(resp.status); // the status code = 200 or code = 400 etc.
						console.log(resp.text()); // will try return the exact result as string
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						//here is were your code should start after the fetch finishes
						console.log(data); //this will print on the console the exact object received from the server
					})
					.catch(error => {
						//error handling
						console.log(error);
						alert("Erro!!!!!!!!!!!!!!!!!!!!!");
					});
			});
	}

	updateInput(key, value) {
		this.setState({
			[key]: value
		});
	}

	deleteList() {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/marcostodo", {
			method: "DELETE",
			body: JSON.stringify([]),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				console.log(resp.ok); // will be true if the response is successfull
				console.log(resp.status); // the status code = 200 or code = 400 etc.
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(data => {
				//here is were your code should start after the fetch finishes
				console.log(data); //this will print on the console the exact object received from the server
				this.setState({
					newItem: ""
				});
			})
			.catch(error => {
				//error handling
				console.log(error);
				alert("mal!!!!!!!!!!!!!!!!!!!!!");
			});
	}

	addItem() {
		const newItem = {
			done: false,
			label: this.state.newItem.slice()
		};

		//alert(newItem.value);

		const list = [...this.state.list];
		list.push(newItem);

		fetch("https://assets.breatheco.de/apis/fake/todos/user/marcostodo", {
			method: "POST",
			body: JSON.stringify(list),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				console.log(resp.ok); // will be true if the response is successfull
				console.log(resp.status); // the status code = 200 or code = 400 etc.
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(data => {
				//here is were your code should start after the fetch finishes
				console.log(data); //this will print on the console the exact object received from the server
				this.setState({
					list: list,
					newItem: ""
				});
			})
			.catch(error => {
				//error handling
				console.log(error);
				alert("Error!!!!!!!!!!!!!!!!!!!!!");
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

				<button onClick={() => this.deleteList()}> Clear List</button>

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
