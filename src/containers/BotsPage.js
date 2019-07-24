import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";


class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(props){
    super(props)
    this.state = {
      data: [],
      army: []
    }
  }


  componentDidMount(){
    const url = "https://bot-battler-api.herokuapp.com/api/v1/bots"

    fetch(url)
    .then(resp => resp.json())
    .then(data => this.setState({ data }))
  }

  handleClick=(id)=>{

    const data = this.state.data
    const army = this.state.army
    const enlisted = data.filter(bot => bot.id == id)[0]
    const isEnlistedCheck = army.includes(enlisted)

    if(!isEnlistedCheck){
      this.setState({ army: [...this.state.army, enlisted] })
    } else {
      const index = army.indexOf(enlisted)
      army.splice(index, 1)
      this.setState({ army: army })
      // console.log(army)
    }
    // return console.log(isEnlistedCheck)
  }

  render() {
    const bots = this.state.data
    const army = this.state.army
    return (
      <div>
        <YourBotArmy
          handleClick={(id)=>this.handleClick(id)}
          army={army}/>
        <BotCollection
          handleClick={(id)=>this.handleClick(id)}
          bots={bots}/>
        {/* put your components here */}
      </div>
    );
  }

}

export default BotsPage;
