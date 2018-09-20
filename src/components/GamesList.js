import React from 'react';
import PropTypes from 'prop-types';
import GameCard from './GameCard'

const GameList = ({ games }) => {

  const emptyMessage = (
    <p>There are no games yet in your collection.</p>
  )

  const gamesList = (


    <div className="ui four cards">
      { games.map(game => <GameCard game={ game } key={ game._id } />) }
    </div>
  )

  return (
    <div>
      { games.length === 0 ? emptyMessage : gamesList }
    </div>
  )
}

GameList.propTypes = {
  games: PropTypes.array.isRequired
}

export default GameList


/* <div className="ui four cards">
 * {
 *   games.map(
 *     game => <GameCard game={ game } key={ game._id } />
 *   )
 * }
 * </div> */
