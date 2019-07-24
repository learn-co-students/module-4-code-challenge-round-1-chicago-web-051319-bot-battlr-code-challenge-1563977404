import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";

const API = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      bots: [],
      recruitedBots: [],
      showBot: undefined
    }
  }
  componentDidMount = () =>{
    this.fetchBots()
  }
  fetchBots = () =>{
    fetch(API)
    .then(resp => resp.json())
    .then(bots => this.setState({bots}))
  }

  recruitBot = (bot) =>{
    let currentBots = this.state.recruitedBots
    if (currentBots.includes(bot)) {return}
      this.setState({
        recruitedBots: [...currentBots, bot],
        showBot: undefined
      })
  }

  unRecruitBot = (bot) => {
    let currentBots = this.state.recruitedBots
    currentBots = currentBots.filter((currentBot) => currentBot.id !== bot.id)
    this.setState({
      recruitedBots: currentBots
    })
  }

  showBot = (bot) => {
    this.setState({
      showBot: bot
    })
  }
  goBack = () => {
    this.setState({
      showBot: undefined
    })
  }
  render() {
    return (
      <div>
        <YourBotArmy recruitedBots={this.state.recruitedBots} unRecruitBot={this.unRecruitBot}/>

        {this.state.showBot ? <BotSpecs bot={this.state.showBot} recruitBot={this.recruitBot} goBack={this.goBack}/> : <BotCollection bots={this.state.bots} showBot={this.showBot} recruitedBots={this.state.recruitedBots} />}

      </div>
    );
  }

}

export default BotsPage;
