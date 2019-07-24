import React from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'
import { SSL_OP_CISCO_ANYCONNECT } from "constants";
import BotSpecs from "../components/BotSpecs";
const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots'
class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(props) {
    super(props);
    this.state = { 
      bots: [],
      army: [],
      showBot: false,
      botSpecs: []
     }
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(data => this.setState({
      bots: data
    }))
  }

  showBot = (id) => {
    const bots = this.state.bots
    const bot = bots.find(bot => bot.id == id)
    this.setState({
      botSpecs: bot,
      showBot: true
    })
  }

  recruitBot = (id) => {
    const bots = this.state.bots
    const bot = bots.find(bot => bot.id == id)
    const prevBots = this.state.army
    this.setState({
      army: [...prevBots, bot],
    })
  }
  
  backButton = () => {
    this.setState({
      showBot: false
    })
  }

  render() {
    
    if(this.state.showBot){
      return (<div>
        <BotSpecs bot={this.state.botSpecs}
        backButton={this.backButton}
        recruitBot={(id) => this.recruitBot(id)}
        />
      </div>)
    }

    return (
      <div>
        <YourBotArmy bots={this.state.army}/>
        <BotCollection bots={this.state.bots}
        showBot={(id) => this.showBot(id)}
        />
      </div>
    );
  }

}

export default BotsPage;

