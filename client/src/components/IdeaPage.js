import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

class IdeaPage extends Component {
  state = {
    user: {
      userName: 'Bob'
    },
    ideas: [{
      id: 1,
      title: 'hello',
      description: 'world'
    }, {
      id: 2,
      title: 'hola',
      description: 'mundo'
    }, {
      id: 3,
      title: 'goodnight',
      description: 'moon'
    }, {
      id: 4,
      title: 'greetings',
      description: 'earthlings'
    }]
  }

  handleChange = (event) => {
    console.log(event)
  }

  render () {
   const ideas = this.state.ideas.map((idea, i) => {
          return (
              <div key={i}>
                <input type="text" name="title" value={idea.description} onChange={this.handleChange}/>
                <textarea name="description" onChange={this.handleChange}/>
                <button>Delete Idea</button>
              </div>
            )
          })
    return (
      <div>
        <div>
          <h1>{this.state.user.userName}'s Idea Board</h1>
          <button>New Idea</button>
        </div>
        
        </div>
    
    )
  }
}
   

export default IdeaPage