import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";
const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      armies: [],
      clickedArmy: []
    }
  }

  componentDidMount = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(armies => {this.setState({
      armies: armies
    })})
  }

  botInfo(id){
    this.state.armies.forEach(army => {
      if(army.id === id){
        this.setState({
          clickedArmy: this.state.clickedArmy.concat(army)
        })
      }
    })
  }

  render() {
    // console.log(this.state.clickedArmy)
    return (
      <div className="App">
        <BotsPage
        armies={this.state.armies}
        botInfo={(id) => this.botInfo(id)}
        clickedArmy={this.state.clickedArmy}
        />
      </div>
    );
  }
}

export default App;
