import React, { Component } from 'react';
class App extends Component {
    constructor(props) {
       super(props);
	   this.state = {};
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {    this.setState({[event.target.name]: event.target.value});  }
    handleSubmit(event) {
		let data = this.state;
		let url = 'http://dev.pubmate.io/pubmate/api/0.1/user/create';
		// let url = 'http://localhost:2525/pubmate/api/0.1/user/create';
	    const requestOptions = {
	           method: 'POST',
	           headers: { 'Content-Type': 'application/json' },
	           body: JSON.stringify(data)
	       };
	       fetch(url, requestOptions)
	           .then(async response => {
	               const data = await response.json();
	               // check for error response
	               if (!response.ok) {
	                   // get error message from body or default to response status
	                   const error = (data && data.message) || response.status;
	                   return Promise.reject(error);
	               }
	               this.setState({ postId: data.id })
	           })
	           .catch(error => {
	               this.setState({ errorMessage: error.toString() });
	               console.error('There was an error!', error);
	           });
	 }
  render() {
    return (
    <div className="wrapper">
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <label>
            <p>Email</p>
            <input name="email" value={this.state.email} onChange={this.handleChange}/>
          </label>
        </fieldset>
        <fieldset>
         <label>
           <p>Username</p>
            <input name="username" value={this.state.username} onChange={this.handleChange}/>           
         </label>
         <label>
           <p>Password</p>
           <input name="password" value={this.state.password} onChange={this.handleChange}/>
         </label>
         <label>
           <p>Type</p>
           <input name="type" value={this.state.type} onChange={this.handleChange}/>
         </label>
       </fieldset>	  
        <button type="submit">Submit</button>
      </form>
		</div>
    );
  }
}
export default App;