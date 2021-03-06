import React, { useEffect, Fragment } from 'react';
import propTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos'
import { Link } from 'react-router-dom';

const User = (props) => {
  useEffect(() => {
    props.getUser(props.match.params.login);
    props.getUserRepos(props.match.params.login);
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    company
  } = props.user;

  const { loading, repos } = props;

  if (loading) return (<Spinner />);

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back to search
        </Link>
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            className='round-img'
            alt=''
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && <Fragment>
            <h1>Bio</h1>
            <p>{bio}</p>
          </Fragment>}
          <a href={html_url} className='btn btn-dark my-1'>
            Visit Github Profile
            </a>
          <ul>
            <li>
              {login && <Fragment>
                <strong>Username</strong> {login}
              </Fragment>}
            </li>
            <li>
              {company && <Fragment>
                <strong>Company</strong> {company}
              </Fragment>}
            </li>
            <li>
              {blog && <Fragment>
                <strong>Website</strong> {blog}
              </Fragment>}
            </li>
          </ul>
        </div>
      </div>

      <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {followers}</div>
        <div className='badge badge-success'>Following: {following}</div>
        <div className='badge badge-light'>Public Repos: {public_repos}</div>
        <div className='badge badge-dark'>Public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
      {/* {repos &&  } */}
    </Fragment>
  );
}

User.propTypes = {
  loading: propTypes.bool.isRequired,
  getUser: propTypes.func.isRequired,
  user: propTypes.object.isRequired,
  repos: propTypes.array.isRequired,
  getUserRepos: propTypes.func.isRequired,

}

export default User;
