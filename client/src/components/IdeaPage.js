import React, { Component } from 'react'
import axios from 'axios'
import styled from "styled-components"

<<<<<<< HEAD

// const B = styled.div`
// display: flex;
// align-self: center;
// `

=======
>>>>>>> 9891fc41b65bc0550557503d9462394051fea127
const FormWrapper = styled.div`
  
  display: flex;
  flex-direction: column;
  
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: yellow;
  color: white;
  border: 2px solid white;
  button {
    background-color: #123456;
    color: white;
  }
`
const StyledButton = styled.button`
background-color: #123456;
color: white;
    background-color: #123456;
    color: white;
`
const IdeaContainer = styled.span`
background-color:yellow;
margin: 5px;
`
<<<<<<< HEAD
=======

>>>>>>> 9891fc41b65bc0550557503d9462394051fea127
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

  componentDidMount() {
    const userId = this.props.match.params.userId
    console.log(userId)
    axios.get(`/api/users/${userId}`)
      .then(response => {
        console.log(response.data)
        this.setState({
          user: response.data,
          ideas: response.data.ideas
        })
      })
  }

  render() {
    const ideas = this.state.ideas.map((idea, i) => {
      return (
<<<<<<< HEAD
        
=======
>>>>>>> 9891fc41b65bc0550557503d9462394051fea127
        <FormWrapper key={i}>
          <input type="text" name="title" value={idea.title} onChange={this.handleChange} />
          <textarea name="description" value={idea.description} onChange={this.handleChange} />
          <button>Delete Idea</button>
        </FormWrapper>
<<<<<<< HEAD
        
=======
>>>>>>> 9891fc41b65bc0550557503d9462394051fea127
      )
    })

    return (
      <div>
        <div>
<<<<<<< HEAD
         
          <h1>
            {this.state.user.userName}'s Idea Board
          </h1>
          
          
          <StyledButton>New Idea</StyledButton>
        </div>
        <div>
          <IdeaContainer>
          {ideas}
          </IdeaContainer>

        </div>
=======
          <h1>{this.state.user.userName}'s Idea Board</h1>
          <StyledButton>New Idea</StyledButton>
        </div>
        <IdeaContainer>
          {ideas}
        </IdeaContainer>
>>>>>>> 9891fc41b65bc0550557503d9462394051fea127
      </div>
    )
  }
}
   

export default IdeaPage