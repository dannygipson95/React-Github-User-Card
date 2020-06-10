import React from 'react'

class SearchForm extends React.Component{
    constructor(){
        super();
        this.setState({
            searchTerm: ''
        })
    }

    render(){
        return(
            <form>
                <label>
                    New Base User 
                    <input
                        type='text'
                        name='searchTerm'
                        placeholder='username'
                    />
                </label>
                <button>Submit</button>
            </form>
        )
    }
}

export default SearchForm