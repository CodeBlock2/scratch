import React, { Component } from 'react';
import axios from 'axios';
import Ranking from './Ranking'

class Leaderboard extends Component {

  constructor() {
    super();
    this.state = {
      top10: [],
    }
  }


  loadhighscores = () => {
    axios.get('/highscores').then((data) => {
      this.setState({ top10: data.data })
    })

  }

  componentDidMount = () => {
    this.loadhighscores()
  }



  render() {
    const rankingList = this.state.top10.map((ranking, index) => {
      return <Ranking name={ranking.name} score={ranking.score} accuracy={ranking.accuracy} key={index} />
    })
    return (
      <div className="leaderboard">
        <h2> Leaderboards </h2>
        {rankingList}
      </div>
    );
  }
}

export default Leaderboard;