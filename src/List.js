import React, { Component } from 'react';
import Note from "./Note";
import  "./List.css";
import { connect } from 'react-redux';
import { addNote_, removeNote } from "./action";

class List extends Component {
  addNote = (e) => {
    if (this.inputTitle.value !== "") {
      var newNote = {
        title: this.inputTitle.value,
        text: this.inputText.value,
        key: Date.now(),

      };
      this.props.addNote_(newNote);
      this.inputTitle.value = "";
      this.inputText.value = "";
      
    }
    e.preventDefault();
  }
   deleteNote = (key) => {
    this.props.removeNote({ key: key })
   }
  render() {
    return (
      <div className="noteList">
        <div className="header">
          <input name="title" ref={(a) => this.inputTitle = a}
            placeholder="title">
          </input>
          <input name="text" ref={(a) => this.inputText = a}
            placeholder="write your note">
          </input>
          <button onClick={this.addNote}>add</button>
        </div>
        <Note entries={this.props.notes}
                />
      </div>
    );
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
)(List)

