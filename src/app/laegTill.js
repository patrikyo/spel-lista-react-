import React, {Component} from "react";

class LaegTill extends Component{
	render(){
		return(
			<div id ="laegtill-och-filtrera"> 
				<label htmlFor ="check">visa/göm
					<input type="checkbox" name="check" ref="checkbox" onChange={this.checkBox.bind(this)} />
				</label>	
				<input type="search" name="searchNamn" placeholder="Lägg till spel" ref="laegTillSpell"/>
				<button onClick= {this.laegTill.bind(this)} >Lägg till</button>
			</div>
		);
	} 
	laegTill(){
		var spel = this.refs.laegTillSpell.value;
		this.props.laegTill(spel);
	}
	checkBox(){
		var status = this.refs.checkbox.checked;
		this.props.goemEllerVissa(status);
	}
}

export default LaegTill;