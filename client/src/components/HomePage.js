<<<<<<< HEAD
import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class HomePage extends Component{
    render() {
        return(
            <div>
                HomePage
                <Link to='/login'>Login</Link>
            </div>
        )
    }
=======
import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class HomePage extends Component {
  render() {
    return (
      <div>

        <div>
          <Link to='/login'>Login Link</Link>
        </div>

        HomePage

      </div>
    )
  }
>>>>>>> 23a1d2b91560543f8428a8a74281fcd835ee5ace
}

export default HomePage