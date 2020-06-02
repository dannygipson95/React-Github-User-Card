import React from 'react'
import styled from 'styled-components'

const UserDiv = styled.div`
    width: 40%;
    margin: 2% 30%;
    padding: 1%;
    display: flex;
    justify-content: space-between;
    border: 1px solid gainsboro;

    img{
        width: 40%;
    }

    div{
        width: 50%;
    }
`

class UserCard extends React.Component{
    render(){
        return(
        <UserDiv>
            <img src={this.props.user.avatar_url}/>
            <div>
              <h3>{this.props.user.name}</h3>
              <p>{this.props.user.login}</p>
              <p>{this.props.user.location}</p>
              <p>Profile: <a href={this.props.user.html_url}>{this.props.user.html_url}</a></p>
              <p>Followers: {this.props.user.followers}</p>
              <p>Following: {this.props.user.following}</p>
              <p>Bio: {this.props.user.bio}</p>
            </div>
        </UserDiv>
        )
    }
}
export default UserCard