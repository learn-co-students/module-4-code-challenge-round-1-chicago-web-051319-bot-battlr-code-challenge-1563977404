import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

handleSecondCardClick = (bot) => {
   let newBot = this.state.myBots
   newBot.push(bot)
   this.setState({
     myBots: newBot
   })
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
          {this.props.myBots.map(bot => {
          return <BotCard bot={bot}/>})
          }
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
