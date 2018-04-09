import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeNote } from "./action";
import './List.css';
class Note extends Component {
  deleteNote = (key) => {
    this.props.removeNote({ key: key })
  }
  createTasks = (note) => {
    return (
      <div>
      <div className="note">
        <Link to={`/${note.key}`} key={note.key}> {note.title}
        </Link>
        </div>
        <div className="remove">
        <button onClick={() => this.deleteNote(note.key)}> remove </button>
        </div>
      
      </div>
    )
  };
  render() {
    var todoEntries = this.props.entries;
    var listNotes = todoEntries.map(this.createTasks);

    return (
      <ul className="theList">
        {listNotes}
      </ul>
    );
  }
};
const mapStateToProps = state => ({
  notes: state,
})

const mapDispatchToProps = dispatch => ({
  removeNote: note => dispatch(removeNote(note))

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Note)
