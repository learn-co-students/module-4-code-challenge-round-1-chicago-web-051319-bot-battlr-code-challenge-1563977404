import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          <ul>
            <li>
    		      {< BotCard
                bot={this.props.bot}
                botInfo={this.props.botInfo}
                />}
            </li>
          </ul>
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
