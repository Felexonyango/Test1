import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Search = () => {
    
    const [users, setUsers] = useState([]);
    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const response = await  axios.get('https://pacific-chamber-45004.herokuapp.com/api/users')
      setUsers(response.data.data);
    }
    loadUsers();
  }, []);
    
  const onSuggestionHandler = (text) => {
    setText(text);
    setSuggestions([]);
  }

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0){
      matches = users.filter(user => {
        const regex = new RegExp(`${text}`, 'gi');
        return users.fname.match(regex);
      })
    }
    console.log(matches)
    setSuggestions(matches)
    setText(text);
  }
  return (
    <div className="container">
      <input type="text" className='col-md-12' style={{marginTop:'10px'}}
        onChange={e => onChangeHandler(e.target.value)}
          value={text}
           
      />
      {suggestions && suggestions.map((suggestion, i) => {
        return(
            <div key={i}
                 className='suggestion col-md-12 justify-content-md-center'
            onClick={() => onSuggestionHandler(suggestion.fname)}>{suggestion.fname}</div>
        )
      })}
    </div>
  )
}

export default Search
