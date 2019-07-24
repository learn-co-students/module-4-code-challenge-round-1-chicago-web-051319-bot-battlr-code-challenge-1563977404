import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  renderArmy = () => {
    return this.props.armies.map((army) => {
      return < BotCollection
      bot={army} key={army.id}
      botInfo={this.props.botInfo}
      />
    })
  }

  render() {
    return (
      <div>
        < YourBotArmy clickedArmy={this.props.clickedArmy} />
        {this.renderArmy()}
      </div>
    );
  }

}

export default BotsPage;
