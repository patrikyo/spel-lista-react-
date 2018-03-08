import React, {Component} from "react";

class Sok extends Component{
	render(){
		return(
			<div id="searchBar">
				<input type="text" placeholder="spel.." onKeyUp={this.sok.bind(this)} ref="sok" />
			</div>
		);
	}

	sok(){
		var vaerde = this.refs.sok.value;
		this.props.sok(vaerde);
	}
}

export default Sok;