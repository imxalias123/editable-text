import './index.css'
import {Component} from 'react'

class EditableText extends Component {
  state = {
    saved: false,
  }

  render() {
    return (
      <div>
        <input />
        <button type="button">Save</button>
      </div>
    )
  }
}

export default EditableText
