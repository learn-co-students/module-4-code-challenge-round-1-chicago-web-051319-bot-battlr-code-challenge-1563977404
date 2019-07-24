import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here


  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.bots.map(bot => {
          return <BotCard bot={bot} handleCardClick={this.props.handleCardClick}/>})
          }
    		  Collection of all bots

    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
