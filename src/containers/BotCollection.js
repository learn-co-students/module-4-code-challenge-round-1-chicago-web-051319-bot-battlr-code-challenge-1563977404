import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
	console.log(this.props)	
	const bots = this.props.bots
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {bots.map(bot => {
				  return <BotCard bot={bot}
				  recruitBot={this.props.recruitBot}
				  />
			  })}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
