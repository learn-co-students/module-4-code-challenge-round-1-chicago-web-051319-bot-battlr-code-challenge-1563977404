import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  renderBots = () => {
    return this.props.bots.map(bot => {
      return < BotCard
      bot={bot} key={bot.id}
      receiveBotInfo={this.props.receiveBotInfo}
      showBotSpec={this.props.showBotSpec}
      findBot={this.props.findBot}
      removeMyBot={this.props.removeMyBot}
      />
    })
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
