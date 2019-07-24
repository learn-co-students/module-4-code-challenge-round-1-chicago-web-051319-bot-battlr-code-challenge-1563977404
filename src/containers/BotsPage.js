import React from "react";

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(props){
    super(props)
    this.state = {
      data: []
    }
  }


  componentDidMount(){
    const url = "https://bot-battler-api.herokuapp.com/api/v1/bots"

    fetch(url)
    .then(resp => resp.json())
    .then(data => this.setState({ data }))
  }

  render() {
    const bots = this.state.data
    return (
      <div>
        {/* put your components here */}
      </div>
    );
  }

}

export default BotsPage;
