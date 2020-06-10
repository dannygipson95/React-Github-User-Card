import React from 'react';
import axios from 'axios'
import UserCard from './components/userCard'
import './App.css';
import SearchForm from './components/searchForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      mainUser: 'dannygipson95',
      users: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.mainUser}`)
      .then(firstRes => {
        this.setState({
          users: [...this.state.users, firstRes.data]
        })
        axios.get(`https://api.github.com/users/${this.state.mainUser}/followers`)
          .then(secondRes =>{
            secondRes.data.forEach(follower =>{
              axios.get(`https://api.github.com/users/${follower.login}`)
                .then(thirdRes =>{
                  this.setState({
                  users: [...this.state.users, thirdRes.data]
                })
              })
            })
          }
        )
      }
    )
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.mainUser !== this.state.mainUser){
      axios.get(`https://api.github.com/users/${this.state.mainUser}`)
      .then(firstRes => {
        this.setState({
          users: [...this.state.users, firstRes.data]
        })
        axios.get(`https://api.github.com/users/${this.state.mainUser}/followers`)
          .then(secondRes =>{
            secondRes.data.forEach(follower =>{
              axios.get(`https://api.github.com/users/${follower.login}`)
                .then(thirdRes =>{
                  this.setState({
                  users: [...this.state.users, thirdRes.data]
                })
              })
            })
          }
        )
      }
    )
    }
  }
  changeHandler = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  onSubmit = event =>{
    event.preventDefault();
    this.setState({
      mainUser: this.state.searchTerm
    })
  }

  render() {
    return (
      <div>
         <form onSubmit={this.onSubmit}>
            <label>
                New Base User 
                <input
                    type='text'
                    name='searchTerm'
                    placeholder={this.state.mainUser}
                    value={this.state.searchTerm}
                    onChange={this.changeHandler}
                />
            </label>
            <button >Submit</button>
            </form>
        {this.state.users.map(user=>{
          return(
            <UserCard user={user}/>
          )
        })}
      </div>
    );
  }
  
}

export default App;
