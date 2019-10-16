import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Note.css'
import Context from '../Context'
import {findNote} from '../notes-helpers.js'

export default class Note extends React.Component {
  static contextType = Context;
  render () {
    const specificNote = findNote(this.context.notes, this.props.id);
    const {id, name, modified} = specificNote;
    return (
      <div className='Note'>
        <h2 className='Note__title'>
          <Link to={`/note/${id}`}>
            {name}
          </Link>
        </h2>
        
        {(this.props.reset) && <Link to='/' ><button className='Note__delete' type='button' onClick={()=>this.context.deletedId(id)}>
              <FontAwesomeIcon icon='trash-alt' />
              {' '}
              remove
            </button></Link>}
        {(!this.props.reset) && <button className='Note__delete' type='button' onClick={()=>this.context.deletedId(id)}>
              <FontAwesomeIcon icon='trash-alt' />
              {' '}
              remove
            </button>}

        <div className='Note__dates'>
          <div className='Note__dates-modified'>
            Modified
            {' '}
            <span className='Date'>
              {format(modified, 'Do MMM YYYY')}
            </span>
          </div>
        </div>
      </div>
    )
  }
}
  