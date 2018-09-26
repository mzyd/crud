const games = (state = [], action = {}) => {
  switch(action.type) {
    case 'SET_GAMES':
      return action.games
    case 'ADD_GAME':
      return [
        ...state,
        action.game
      ]
    case 'GAME_FETCHED':
      const id = action.game._id
      const index = state.findIndex(item => item._id === id)
      if (index > -1) {
        /* return [state[index]] */
        return state.map(item => {
          if (item._id === action.game._id) return action.game
          return item
        })
      } else {
        return [
          ...state,
          action.game
        ]
      }
    case 'GAME_UPDATED':
      return state.map(item => {
        if (item._id === action._id) return action.game
        return item
      })
    case 'GAME_DELETED':
      let abc = state.filter(item => item.id !== action.gameId)
      console.log( "abc: ", abc )
      return state.filter(item => item._id !== action.gameId)
    default:
      return state
  }
}

export default games
