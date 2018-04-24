import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class LogIn extends Component {
  state = {
    users: []
  }

  componentDidMount(){
      this.getAllUsers()
  }

  getAllUsers = () => {
    axios.get('/api/users')
    .then(res => {
        console.log('saving users to state', res.data)
      this.setState({users: res.data})
    })
    .catch(err => {
        console.log(err)
    })
  }
  
  render () {
      console.log('saving users to state', this.state.users)
      const userLinks =  this.state.users.map((user, i) => {
    return (<Link to={`/user/${user._id}`}>{user.userName}</Link>) })
    
    return (
      <div>
      <Link to='/'>Home</Link>
        <h1>Log-In</h1>
        <h3>Please Select an Existing User</h3>
       {userLinks}
       
      </div>
    )
  }
}

export default LogIn