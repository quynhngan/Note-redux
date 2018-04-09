export const addNote_ = note => ({
  type: 'ADD_NOTE',
  key: note.key,
  text: note.text,
  title: note.title
});
export const editNote = note => ({
  type: 'EDIT_NOTE',
  key: note.key,
  text: note.text,
  title: note.title
});

export const removeNote = note => ({
    type: 'REMOVE_NOTE',
    key: note.key,
  });

 