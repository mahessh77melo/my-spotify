import React from "react";
import { Component } from "react";

export default class NameForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			first_name: "",
			last_name: "",
			gender: "",
			destination: "",
			isVegan: false,
			isChinese: false,
			ifgiven: false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleCheck = this.handleCheck.bind(this);
	}
	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	handleCheck(e) {
		this.setState({ [e.target.name]: e.target.checked });
	}
	handleSubmit(e) {
		e.preventDefault();
		this.setState({ ifgiven: true });
		console.log(
			"A name has been  submitted: " +
				this.state.first_name +
				" " +
				this.state.last_name +
				" and " +
				(this.state.gender === "male" ? "he" : "she") +
				" is " +
				this.state.gender +
				" who is from " +
				this.state.destination +
				"\n"
		);
	}
	render() {
		return (
			<div className="form-group">
				<form action="/submit" onSubmit={this.handleSubmit}>
					<label>
						FName :
						<input
							type="text"
							value={this.state.name}
							onChange={this.handleChange}
							name="first_name"
						/>
					</label>
					<br />
					<label>
						LName :
						<input
							type="text"
							value={this.state.name}
							onChange={this.handleChange}
							name="last_name"
						/>
					</label>
					<br />
					<label>
						<input
							type="radio"
							value="male"
							onChange={this.handleChange}
							name="gender"
							checked={this.state.gender === "male"}
						/>
						Male
					</label>
					<label>
						<input
							type="radio"
							value="female"
							onChange={this.handleChange}
							name="gender"
							checked={this.state.gender === "female"}
						/>
						female
					</label>
					<label>
						Select the country
						<select
							name="destination"
							value={this.state.destination}
							onChange={this.handleChange}
						>
							<option value="Germany">Germany</option>
							<option value="Spain">Spain</option>
							<option value="France">France</option>
							<option value="India">India</option>
						</select>
					</label>
					<br />
					<label>
						Vegan?
						<input
							type="checkbox"
							name="isVegan"
							checked={this.state.isVegan}
							onChange={this.handleCheck}
						/>
					</label>
					<br />
					<label>
						Chinese
						<input
							type="checkbox"
							name="isChinese"
							checked={this.state.isChinese}
							onChange={this.handleCheck}
						/>
					</label>
					<br />
					<input type="submit" value="Submit" className="btn-sub" />
				</form>
				{this.state.ifgiven ? (
					<h2>{this.state.first_name + " " + this.state.last_name}</h2>
				) : (
					<h2></h2>
				)}
				<p>Vegan:{this.state.isVegan ? "Yes" : "No"}</p>
				<p>Chinese:{this.state.isChinese ? "Yes" : "No"}</p>
			</div>
		);
	}
}
