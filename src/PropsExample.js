import React from 'react'
class PropsExample extends React.Component{
	render(){
		console.log(this.props)
		return(
			<div>
			this is Props component
			<p>name:{this.props.name}</p>
			<p>age:{this.props.age}</p>
			</div>
		)
	}
}
export default PropsExample