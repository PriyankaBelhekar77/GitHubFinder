/* eslint-disable */
import React from 'react';
import UserDetails from './UserDetails';
import Spinner from '../layout/Spinner';

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />
  } else {
    return (
      <div style={userStyle}>
        {
          users.map(user => (
            <UserDetails key={user.id} user={user} />
          ))
        }
      </div>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export default Users;
