import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GameList from './GamesList.js'
import { connect } from 'react-redux'
import { fetchGames, deleteGame } from '../actions'

class GamesPage extends Component {

  componentDidMount () {
    this.props.fetchGames()
  }

  render() {
    return (
      <div>
        <GameList deleteGame={ this.props.deleteGame } games={ this.props.games } />
      </div>
    )
  }
}

GamesPage.propTypes = {
  games: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    games: state.games
  }
}


export default connect(mapStateToProps, { fetchGames, deleteGame })(GamesPage)
