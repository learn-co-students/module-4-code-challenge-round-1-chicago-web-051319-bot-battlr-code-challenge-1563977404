import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots';

class BotsPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bots: [],
      myBots: []
    }
  }

  componentDidMount = () => {
    fetch(API)
    .then(r => r.json())
    .then(bots => this.setState({
      bots: bots
    }))
  }

  removeMyBot = (bot) => {
    const filtered = this.state.myBots.filter(mybot => mybot !== bot);
    this.setState({
      myBots: filtered
    })
  }

  receiveBotInfo = (bot) => {
    this.state.myBots.find(mybot => mybot.id === bot.id) ? this.removeMyBot(bot) :
    this.setState({
      myBots: this.state.myBots.concat(bot)
    })
  }

  render() {
    return (
      <div>
      {< YourBotArmy
        myBots={this.state.myBots}
        receiveBotInfo={this.receiveBotInfo}
        />}
        {< BotCollection
          bots={this.state.bots}
          receiveBotInfo={this.receiveBotInfo}
          />}
      </div>
    );
  }

}

export default BotsPage;
