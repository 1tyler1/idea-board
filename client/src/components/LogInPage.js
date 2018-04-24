import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class LogIn extends Component {
  state = {
    users: []
  }

<<<<<<< HEAD
  componentDidMount(){
      this.getAllUsers()
=======
  componentDidMount() {
    this.getAllUsers()
>>>>>>> 23a1d2b91560543f8428a8a74281fcd835ee5ace
  }

  getAllUsers = () => {
    axios.get('/api/users')
<<<<<<< HEAD
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
       
=======
      .then(res => {
        console.log("Saving users to state", res.data)
        this.setState({ users: res.data })
      })
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    console.log("Users in state at LogIn Render", this.state.users)
    const userLinks = this.state.users.map((user, i) => {
      return (
        <div key={i}>
          <Link to={`/user/${user._id}`}>{user.userName}</Link>
        </div>)
    })

    return (
      <div>
        <div>
          <Link to='/'>Return Home</Link>
        </div>
        <h1>Log-In</h1>
        <h3>Please Select an Existing User</h3>
        {userLinks}
>>>>>>> 23a1d2b91560543f8428a8a74281fcd835ee5ace
      </div>
    )
  }
}

export default LogIn