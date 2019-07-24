import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";


class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(props){
    super(props)
    this.state = {
      data: [],
      army: [],
      clicked: false
    }
  }


  componentDidMount(){
    const url = "https://bot-battler-api.herokuapp.com/api/v1/bots"

    fetch(url)
    .then(resp => resp.json())
    .then(data => this.setState({ data }))
  }

  handleClick=(id)=>{
    this.setState({ clicked: !this.state.clicked })
    if (this.state.clicked){
      return comp = <BotCollection
        handleClick={(id)=>this.handleClick(id)}
        army={army}
        bots={bots}/>
    } else {
      return comp = <BotSpecs
        bot={bots}/>
    }
  }

  handleEnlist=(id)=>{
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
    }

  }

  renderComponent = () => {

  }

  render() {
    const bots = this.state.data
    const army = this.state.army
    return (
      <div>
        <YourBotArmy
          handleClick={(id)=>this.handleClick(id)}
          army={army}/>
        <BotSpecs
          bot={bots}/>
        <BotCollection
          handleClick={(id)=>this.handleClick(id)}
          army={army}
          bots={bots}/>
        <HandleClick />
        {/* put your components here */}
      </div>
    );
  }

}

export default BotsPage;
