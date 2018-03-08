import React, {Component} from "react";

class Spel extends Component{
	render(){
		var status = "visa";
		var namn = this.props.namn;
		var arr = this.props.selected;
		if(this.props.checkboxStatus){
			status = "gom";
		}

		else if(arr.length !== 0){
			arr.forEach(function(ele){
				if(namn.toLowerCase().indexOf(ele.toLowerCase()) !== -1){
					status = "visa";
				}else{
					status = "gom";
				}	
			});			
		}
		
		return(
			<li className={status}><span className= "titel">{this.props.namn}</span> <span className="radera" onClick= {this.taBort.bind(this)}>Radera</span></li>
		);
	}
	taBort(){
		this.props.taBort(this.props.namn);
	}
}	


export default Spel;