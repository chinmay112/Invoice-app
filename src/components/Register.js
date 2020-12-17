import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login'


class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fullname: '',
			email: '',
			password: '',
			password1: '',
			redirect:false
		};

		this.update = this.update.bind(this);

		this.displayLogin = this.displayLogin.bind(this);
	}

	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
		
	}

	displayLogin(e) {
		e.preventDefault();
		if(this.state.password==this.state.password1)
		{
		localStorage.setItem("fullname",this.state.fullname)
		localStorage.setItem("Password",this.state.password)
		localStorage.setItem("Email",this.state.email)
		//console.log("this is to check a",a)
		console.log('You have successfully registered');
		console.log(this.state);
		this.setState({
			fullname: '',
			email: '',
			password: '',
			password1:''
		});
		alert("registration successfull")
		this.setState({
			redirect:true
		})
		}
		else {
			alert("Enter same password")
		}
		
		
	}

	render() {
		return (
			
			<div  >
				{(this.state.redirect) ?(<Login/>):(
				<form onSubmit={this.displayLogin}>
					<h2 className="h2"> Register</h2>

					<div className="box">
						<input
							type="text"
							placeholder="Full Name"
							name="fullname"
							value={this.state.fullname}
							onChange={this.update}
							required
						/>
					</div>

					<div className="box">
						<input
							type="text"
							placeholder="Enter your email"
							name="email"
							value={this.state.email}
							onChange={this.update}
							required
						/>
					</div>

					<div className="box">
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={this.state.password}
							onChange={this.update}
							required
						/>
					</div>

					<div className="box">
						<input type="password" placeholder="Confirm Password" name="password1" value={this.state.password1} onChange={this.update} required/>
					</div>

					<div className="box1"><input type="submit" value="Register" /></div>
					<Link to="/">Login Here</Link> 
				</form>)}
					
				
			</div>
		);
	}
}

export default Register;
