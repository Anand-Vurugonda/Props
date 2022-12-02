import React from 'react'
function JSX(){
	//with elements
	/*return(
		<div>
			<h1>Good Afternoon</h1>
		</div>
	)*/
	//whithout elements
return React.createElement("div",
						 {id:"one",className:"classone"},
						 React.createElement("h1",null,"Good Afternoon"))
}
export default JSX
