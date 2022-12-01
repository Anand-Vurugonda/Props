import React from 'react'
class ClassComponentExample extends React.Component{
	render(){
		return(
			<div>
			this is ClassComponentExample
			{this.props.name}
			</div>
		)
	}
}
export default ClassComponentExample