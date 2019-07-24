import React from "react";
import BotsCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(props) {
     super(props);
     this.state = {
       bots: [],
       myBots: []
     };
}

componentDidMount(){
  fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
  .then(resp=>resp.json())
  .then(data => this.setState({
    bots: data
  }))
}

// { this.state.myBots.find((bot) => {return bot === bot}) ?
// null :

  handleCardClick = (bot) => {
   let newBot = this.state.myBots
   newBot.push(bot)
   this.setState({
     myBots: newBot
   })
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.bots} myBots = {this.state.myBots} />
        <BotsCollection bots={this.state.bots} handleCardClick={this.handleCardClick}/>
      </div>
    );
  }

}

export default BotsPage;
