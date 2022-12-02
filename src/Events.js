import {Component} from 'react'
class Events extends Component{
	state={
		Username:"",
		rollno:""
	}
	handleClick=()=>{
		console.log(this.state.Username)
		console.log(this.state.rollno)
	}
	handleChange=(e)=>{
		this.setState({
			[e.target.name]:e.target.value
		})
	}
render(){
	return(
		<div>
			<input name="Username" onChange={this.handleChange} placeholder="Enter Username"/>
			<input name="rollno" onChange={this.handleChange} placeholder="Enter rollno"/>
			<button onClick={this.handleClick}>Submit</button>
		</div>
		)
	}
}
export default Events