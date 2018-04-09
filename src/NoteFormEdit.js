import React, { Component } from 'react'
import './List.css'
import { connect } from 'react-redux'
import { addNote_, removeNote,editNote } from "./action";
import { Link } from 'react-router-dom';
 class NoteFormEdit extends Component {
  changeTitle = (e) => {
    const id = this.props.match.params.id;
    var note = this.props.notes.find((note) => note.key == id)
    this.props.editNote({ ...note, title: e.target.value });
  }
  changeText = (e) => {
    const id = this.props.match.params.id;
    var note = this.props.notes.find((note) => note.key == id)
    this.props.editNote({ ...note, text: e.target.value });
  }
  render() {
    const id = this.props.match.params.id;
    var note = this.props.notes.find((note) => note.key == id)
    return (
      <div className="edit">
        <input name="title" value={note.title} onChange={this.changeTitle}
          placeholder="title">
        </input>
        <input name="text" value={note.text} onChange={this.changeText}
          placeholder="write your note">
        </input>
        {/* <button onClick={() => this.props.history.goBack()}>back</button> */}
        <Link to={'/'} > Save  </Link>
      </div>
    
    )
  }
}
const mapStateToProps = state => ({
  notes: state,
})

const mapDispatchToProps = dispatch => ({
  addNote_: note => dispatch(addNote_(note)),
  removeNote: note => dispatch(removeNote(note)),
  editNote: note =>dispatch(editNote(note))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteFormEdit)