/* eslint-disable no-useless-constructor */
import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from './YourBotArmy';

class BotsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      botArmy: [],
    }
  }

  addBotToArmy = bot => {
    this.state.botArmy.includes(bot) ? this.removeBotFromArmy(bot) : this.setState({botArmy: [...this.state.botArmy, bot]})
    //removes a bot from army upon second click in collection
    // this.state.botArmy.includes(bot) ? null : this.setState({botArmy: [...this.state.botArmy, bot]})
  }

  removeBotFromArmy = bot => {
    console.log('HERE')
    const newBotArmy = this.state.botArmy.filter(bots => bots !== bot);
    this.setState({botArmy: newBotArmy});
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.botArmy} removeBotFromArmy={this.removeBotFromArmy} />
        <BotCollection bots={this.props.bots} addBotToArmy={this.addBotToArmy}/>
      </div>
    );
  }

}

export default BotsPage;
