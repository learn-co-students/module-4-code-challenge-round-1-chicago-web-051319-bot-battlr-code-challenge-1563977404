import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    const army = this.props.army
    const handleClick = this.props.handleClick
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}
            Your Bot Army
            {army.map(bot => {return <BotCard
                  handleClick={handleClick}
                  bot={bot}/>})}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
