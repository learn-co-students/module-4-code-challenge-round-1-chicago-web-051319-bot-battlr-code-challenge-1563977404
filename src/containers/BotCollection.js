import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
	
  render(){
	const bots = this.props.bots
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {bots.map(bot => {
				  return <BotCard bot={bot}/>
			  })}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
