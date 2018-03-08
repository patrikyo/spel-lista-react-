import React, {Component} from "react";

class Header extends Component{
	render(){	
		return(
		<div id="banner">
			<h1 className="rubrik">Spel</h1>
			<form id="searchBar">	
				<input type="text" placeholder="spel.." onKeyUp={this.sok.bind(this)} ref="sok" />
			</form>	
		</div>
		);
	}	
	sok(){
		var vaerde = this.refs.sok.value;
		this.props.sok(vaerde);
	}
}

export default Header;  