import React from 'react'
import Note from '../Note/Note'
import './NotePageMain.css'
import Context from '../Context'
import { findNote } from '../notes-helpers'

export default class NotePageMain extends React.Component {
  static contextType = Context;

  render () {  
    const note = findNote(this.context.notes, this.props.note.id);
    return (
      <section className='NotePageMain'>
        <Note
          id={this.props.note.id}
        />
        <div className='NotePageMain__content'>
          {note.content.split(/\n \r|\n/).map((para, i) =>
            <p key={i}>{para}</p>
          )}
        </div>
      </section>
    )
  } 
}
  

NotePageMain.defaultProps = {
  note: {
    content: '',
  }
}
