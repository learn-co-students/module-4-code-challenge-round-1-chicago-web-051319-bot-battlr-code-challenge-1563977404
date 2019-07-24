import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  displayBots = () => {
    return this.props.recruitedBots.map((bot)=>{
      return <BotCard bot={bot} key={bot.id} unRecruitBot = {this.props.unRecruitBot}/>
    })
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.displayBots()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
