import React, {Component} from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Sok from "./sok";
import Spel from "./spel";
import LaegTill from "./laegTill";

require("./css/design.css");

class App extends Component{
	constructor(props){
		super(props);
		this.state={
			spel: ["Metal gear solid V" , "The witcher 3" , "Watchdogs 2", "Grand theft auto 5"], 
			selectedSpel: [],
			checkboxStatus: false
		}
		 this.taBort= this.taBort.bind(this);
		 
	}
	taBort(spel){
		var arr = this.state.spel;
		arr = arr.filter(function(ele){
			if(ele !== spel){
				return ele;
			}
		});

		this.setState({spel : arr});
	}
	sok(ord){
		var arr = this.state.selectedSpel;
		arr.push(ord);
		this.setState({selectedSpel: arr});
	}

	laegTill(spel){
		var	arr = this.state.spel;
		arr.push(spel);
		this.setState({spel: arr});
	}
	goemEllerVissa(status){
		this.setState({checkboxStatus : status});
	}
	render(){
		var arr = this.state.spel;
		arr = arr.map((ele,index)=>{
			return <Spel namn= {ele} key={index} taBort = {this.taBort.bind()} selected = {this.state.selectedSpel} checkboxStatus = {this.state.checkboxStatus}/>
		});
		
		return(
		<div id="wrapper">
			<Header sok = {this.sok.bind(this)} />	
			<div id="spel-lista">
				<p className="rubrik">Lista av favorit spel</p>
				<ul>
					{arr}
				</ul>
			</div>
			<div id="laegtill-och-filtrera-container">
				<LaegTill laegTill = {this.laegTill.bind(this)} goemEllerVissa = {this.goemEllerVissa.bind(this)} />
			</div>	
		</div>
		);
	}

}



ReactDOM.render(<App / >, document.getElementById("App"));