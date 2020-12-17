import React, { Component } from 'react';
import GoogleLogin from 'react-google-login'
import Register from './Register';
import Invoice from './../components/Invoice/Invoice.js'
import history from './history';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";

class Login extends Component {
	constructor(props) {
		super(props);

		
		this.state = {
			email: '',
			password: '',
			redirect: false,
			session:false
		};

		this.update = this.update.bind(this);

		this.displayLogin = this.displayLogin.bind(this);
		localStorage.setItem("session",this.state.session)
	}
	responseGoogle=(response)=>{
		console.log("this is google response",response);
		console.log(response.profileObj);
		if(response.profileObj){
		this.setState({
			redirect:true
		})
	}
		
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
		var a, b, c;
		a=localStorage.getItem("fullname")
		b=localStorage.getItem("Password")
		c=localStorage.getItem("Email")
		var mail=this.state.email;
		var pass=this.state.password;
		console.log("these are test values",a,b,c);
		console.log('You are logged in');
		console.log(this.state);
		this.setState({
			email: '',
			password: ''
		});
		if(b==pass && c==mail){
		console.log("successful")
		this.setState({
			redirect:true,
		})
		
		localStorage.setItem('session',true)
	}
	else
	window.alert("invalid Username or Password")
	
	}

	render() {
		return (
			<div>
			{(this.state.redirect) ? 
				(<Invoice/>):

			<div className="login">
				
				<form onSubmit={this.displayLogin}>
					<h2>Login</h2>
					<div className="username">
						<input
							type="text"
							placeholder="Email"
							value={this.state.email}
							onChange={this.update}
							name="email"
						/>
					</div>

					<div className="password">
						<input
							type="password"
							placeholder="Password..."
							value={this.state.password}
							onChange={this.update}
							name="password"
						/>
					</div>

					<input type="submit" value="Login" />
				</form>
				<div >
				<GoogleLogin className="google" 
        clientId="243046509918-nrm7cf0m907ssf91nkfn0je9v6ujs6h7.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
		cookiePolicy={'single_host_origin'}
		
        
        />
		</div>
			
				<Link to="/register">Create an account</Link>
		
			</div>}
			</div>
		);
	}
}

export default Login;
