import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component{
  // this.handleAdd = this.handleChange.bind(this) 
  //   this.handleSubmit = this.handleSubmit.bind(this) 
  state={
    name1:"",
    email:"",
    password:"",
  }
  
  handleAdd=async e=>{
    console.log(e.target.name); 
    this.setState({
       
      [e.target.name]:e.target.value
    })
    
  }
  handleSubmit= e =>{
    e.preventDefault();
    console.log(this.state.name1);
    console.log(this.state.email);
    console.log(this.state.password);
    let formData =new FormData();
    formData.append("name",this.state.name);
    formData.append("email",this.state.email);
    formData.append("password",this.state.password);
    const url="http://localhost:8080/react/";
    axios.post(url,formData)
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err));
  }
  render()
  {
    return(
      <div className="App">
      <div className="container">
      <h1>Registration</h1>
          <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" onChange={this.handleAdd} name="name1" className="form-control" id="name" placeholder="Name"/>
          </div>
          <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" onChange={this.handleAdd} className="form-control" name="email" id="email"  placeholder="Name@email.com" />
          </div>
          <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" onChange={this.handleAdd}  className="form-control" name="password" id="password"  placeholder="Password" />
          </div>
          <div className="d-grid gap-2">
            <input type="submit" onClick={this.handleSubmit} name="button" className="btn btn-success btn-lg" id="submit" value="Submit"></input>
          </div>
        </div>
      </div>
    );
  }
}

// onChange={this.handleAdd.name}
export default App;
