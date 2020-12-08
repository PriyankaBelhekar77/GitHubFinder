import React from 'react';
import { Link } from 'react-router-dom'

const UserDetails = (props) => {
  const { avatar_url, html_url, login } = props.user;
  return (
    <div className='card text-center'>
      <img className='round-img' alt='' src={avatar_url} style={{ width: '50px', height: '50px' }}></img>
      <h3>{login}</h3>
      <div>
        <Link className='btn btn-dark btn-sm my-1' to={`/user/${login}`}>
          More
        </Link>
      </div>
    </div>
  );
}

export default UserDetails;