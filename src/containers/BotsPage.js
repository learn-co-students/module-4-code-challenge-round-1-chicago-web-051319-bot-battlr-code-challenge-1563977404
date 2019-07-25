import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'
const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots';

class BotsPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bots: [],
      myBots: [],
      showSpec: false,
      displayBot: []
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

  // Refactor

  showBotSpec = (bot) => {
    this.setState({
      showSpec: !this.state.showSpec
    })
  }

  findBot = (bot) => {
    this.setState({
      displayBot: this.state.displayBot.concat(bot)
    })
  }

  handleBack = () => {
    this.setState({
      displayBot: [],
      showSpec: !this.state.showSpec
    })
  }

  // ShowBotSpec need to set state bot info which handed from BotCard
  // and toggle showing or not with true or false

  render() {
    return (
      <div>
      {< YourBotArmy
        myBots={this.state.myBots}
        receiveBotInfo={this.receiveBotInfo}
        removeMyBot={this.removeMyBot}
        />}
        { this.state.showSpec ? < BotSpecs
          bot={this.state.displayBot[0]}
          receiveBotInfo={this.receiveBotInfo}
          handleBack={this.handleBack}
          />
          :
          < BotCollection
          bots={this.state.bots}
          receiveBotInfo={this.receiveBotInfo}
          showBotSpec={this.showBotSpec}
          findBot={this.findBot}
          removeMyBot={this.removeMyBot}
          />}
      </div>
    );
  }

}

export default BotsPage;
