import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  //start here with your code for step one

  constructor(props){
    super(props);
    this.state = {
      botsArr: [],
      yourArmy: [],
      showBot: false
    }
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(data => this.setState({
      botsArr: data
    }))
  }


  showSpec = (bot) => {
    this.setState({
      showBot: bot
    })
  }

  addToArmy = (bot) => {
    const newArmy = this.state.yourArmy
    newArmy.push(bot)
    this.setState({
      yourArmy: newArmy,
      showBot: false
    })
  }

  allList = () => {
    this.setState({
      showBot:false
    })
  }



  render() {
    return (
      <div>
        <YourBotArmy yourArmy={this.state.yourArmy}/>
        {this.state.showBot ? <BotSpecs bot = {this.state.showBot} allList={this.allList} addToArmy={(bot) => this.addToArmy(bot)}/> : <BotCollection botsArr={this.state.botsArr}
        addToArmy={(bot) => this.addToArmy(bot)}
        showSpec = {(bot) => this.showSpec(bot)}
        />}

      </div>
    );
  }

}

export default BotsPage;
