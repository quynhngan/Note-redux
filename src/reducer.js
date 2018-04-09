const notes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [
        ...state,
        {
          key: action.key,
          text: action.text,
          title: action.title
        }
      ]
    case 'REMOVE_NOTE':
      return state.filter(note => note.key !== action.key)
    case 'EDIT_NOTE':
      const note = state.find(note => note.key == action.key);

      note.title = action.title;
      note.text = action.text;
    return [...state];
    default:
      return state
  }
}
 
export default notes