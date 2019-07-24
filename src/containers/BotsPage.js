/* eslint-disable no-useless-constructor */
import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from './YourBotArmy';
import BotSpecs from '../components/BotSpecs';

class BotsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      botArmy: [],
      clickedBot: null,
    }
  }

  addBotToArmy = bot => {
    this.state.botArmy.includes(bot) ? this.removeBotFromArmy(bot) : this.setState({botArmy: [...this.state.botArmy, bot]})
    //removes a bot from army upon second click in collection
    // this.state.botArmy.includes(bot) ? null : this.setState({botArmy: [...this.state.botArmy, bot]})
  }

  removeBotFromArmy = bot => {
    const newBotArmy = this.state.botArmy.filter(bots => bots !== bot);
    this.setState({botArmy: newBotArmy});
  }

  botShowPage = bot => {
    this.setState({clickedBot: bot})
  }
  
  unclickBot = () => {
    this.setState({clickedBot: false})
  }

  handlePages() {
    if (this.state.clickedBot) {
      return  (
        <div>
          <BotSpecs bot={this.state.clickedBot} addBotToArmy={this.addBotToArmy} unclickBot={this.unclickBot}/>
        </div>
      )
    } else {
      return (
        <div>
          <YourBotArmy bots={this.state.botArmy} removeBotFromArmy={this.removeBotFromArmy} />
          <BotCollection bots={this.props.bots} addBotToArmy={this.addBotToArmy} botShowPage={this.botShowPage}/>
        </div>
      )
    }
  }
  render() {
    return (
      <div>
        {this.handlePages()}
      </div>
    );
  }

}

export default BotsPage;
