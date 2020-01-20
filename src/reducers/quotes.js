export default (state = [], action) => {
  let index;

  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote];
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);
    case 'UPVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId);
      state[index].votes += 1
      return state;
    case 'DOWNVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId);
      if (state[index].votes > 0) {
        state[index].votes -= 1
      }
      return state;

    default:
      return state;
  }
}