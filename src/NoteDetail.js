import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNote_, removeNote } from "./action";
import { Link } from 'react-router-dom';
import './List.css'
class NoteDetail extends Component {
  deleteNote = (text) => {
    this.props.removeNote({ text: text })
  }
  render() {
    const id = this.props.match.params.id;
    var note = this.props.notes.find((note) => note.key == id)
    return (
      <div className="detail">
        <p className="title"> {note.title} </p>
        <p className="text"> {note.text} </p>
        <Link to={'/' + note.key+'/edit'} key={note.key}> edit
        </Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  notes: state,
})

const mapDispatchToProps = dispatch => ({
  addNote_: note => dispatch(addNote_(note)),
  removeNote: note => dispatch(removeNote(note))

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteDetail)