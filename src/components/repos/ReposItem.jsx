import React from 'react';
import propTypes from 'prop-types';

const ReposItem = ({ repo }) => {
  return (
    <div className='card'>
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  );
}

ReposItem.propTypes = {
  repo: propTypes.object.isRequired
}

export default ReposItem;