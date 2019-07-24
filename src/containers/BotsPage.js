import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  constructor(props){
    super(props);
    this.state = {
      botsArr: [],
      yourArmy: []
    }
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(data => this.setState({
      botsArr: data
    }))
  }

  addToArmy = (bot) => {
    const newArmy = this.state.yourArmy
    newArmy.push(bot)
    this.setState({
      yourArmy: newArmy
    })
  }



  render() {
    return (
      <div>
        <YourBotArmy yourArmy={this.state.yourArmy}/>
        <BotCollection botsArr={this.state.botsArr} addToArmy={(bot) => this.addToArmy(bot)}/>
      </div>
    );
  }

}

export default BotsPage;
