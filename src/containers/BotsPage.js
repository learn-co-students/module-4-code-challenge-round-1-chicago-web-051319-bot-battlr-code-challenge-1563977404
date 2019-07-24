import React from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'
import { SSL_OP_CISCO_ANYCONNECT } from "constants";
const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots'
class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(props) {
    super(props);
    this.state = { 
      bots: [],
      army: []
     }
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(data => this.setState({
      bots: data
    }))
  }

  recruitBot = (id) => {
    const bots = this.state.bots
    const bot = bots.find(bot => bot.id == id)
    const prevBots = this.state.army
    this.setState({
      army: [...prevBots, bot]
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.army}/>
        <BotCollection bots={this.state.bots}
        recruitBot={(id) => this.recruitBot(id)}
        />
      </div>
    );
  }

}

export default BotsPage;

