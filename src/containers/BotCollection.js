import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  displayBots = () => {
    return this.props.bots.map((bot)=>{
      // if (this.props.recruitedBots.includes(bot)) {return}
      return <BotCard bot={bot} key={bot.id} showBot={this.props.showBot} isBotCollection={true}/>
    })
  }
  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.displayBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
