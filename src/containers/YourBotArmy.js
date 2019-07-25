import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  renderMyBots = () => {
    return this.props.myBots.map(myBot => {
      return < BotCard
      bot={myBot} key={myBot.id}
      receiveBotInfo={this.props.receiveBotInfo}
      />
    })
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
          Your Bot Army
            {this.renderMyBots()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
