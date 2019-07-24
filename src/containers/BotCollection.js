import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  render(){
    const bots = this.props.bots
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/}
    		  Collection of all bots
          {bots.map(bot=>{return <BotCard
              bot={bot}
              handleClick={this.props.handleClick}
              />})}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
