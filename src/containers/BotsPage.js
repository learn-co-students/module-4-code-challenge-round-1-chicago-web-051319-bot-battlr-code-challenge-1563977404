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

handleCardClick = (sbot) => {

    let newBot = this.state.myBots
    if(this.state.myBots.find((bot) => {return bot == sbot})) {
      const bots = newBot.filter(bot => bot != sbot)
      this.setState({
       myBots: bots
     })
    } else {
      newBot.push(sbot)
      this.setState({
       myBots: newBot
     })
    }
}



  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.bots} handleCardClick={this.handleCardClick} myBots = {this.state.myBots} />
        <BotsCollection bots={this.state.bots} handleCardClick={this.handleCardClick}/>
      </div>
    );
  }

}

export default BotsPage;
