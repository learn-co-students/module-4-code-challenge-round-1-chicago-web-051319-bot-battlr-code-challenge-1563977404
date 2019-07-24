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
      bots: []
     }
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(data => this.setState({
      bots: data
    }))
  }

  render() {
    return (
      <div>
        <YourBotArmy/>
        <BotCollection bots={this.state.bots}/>
      </div>
    );
  }

}

export default BotsPage;

