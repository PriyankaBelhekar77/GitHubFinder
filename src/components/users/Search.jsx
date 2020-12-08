import React, { useState } from 'react';
import propTypes from 'prop-types'

const Search = ({ setAlert, searchUsers, showClear, clearUsers }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  }

  const onChange = (e) => {
    setText(e.target.value);
  }

  return (
    <div className="App">
      <form action='input' onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange} />
        <input
          type='submit'
          value='search'
          className='btn btn-dark btn-block'
        />
      </form>
      {
        showClear && <button
          className="btn btn-light btn-block"
          onClick={clearUsers}
        >
          Clear
          </button>
      }
    </div>
  );
}

Search.propTypes = {
  searchUsers: propTypes.func.isRequired,
  clearUsers: propTypes.func.isRequired,
  showClear: propTypes.bool.isRequired,
  setAlert: propTypes.func.isRequired,
}

export default Search;
