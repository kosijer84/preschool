import React, {Component} from 'react'

class Sidebar extends Component {

  render() {

    return (
        <div className='sidebar'>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><a href="/azbuka">Aзбука</a></li>
            <li className="list-group-item"><a href="/azbuka">Бројеви</a></li>
            <li className="list-group-item"><a href="/azbuka">Боје</a></li>
          </ul>
        </div>
    )
  }
}

export default Sidebar
