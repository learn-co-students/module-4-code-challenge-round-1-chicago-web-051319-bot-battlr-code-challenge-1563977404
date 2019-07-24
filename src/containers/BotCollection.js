import React from 'react';
import BotCard from '../components/BotCard';

class BotCollection extends React.Component {
  constructor(props) {
	  super(props);
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
				Collection of all bots <br />
			  {this.props.bots.map(bot => {
			  return (<BotCard
				  key={bot.id}
				  bot={bot}
				  addBotToArmy={this.props.addBotToArmy}
				  botShowPage={this.props.botShowPage}
				/>)
			  })
			  }
    		</div>
  	  </div>
  	);
  }

}

export default BotCollection;
