import React, { Fragment, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';


const User = ({match}) => {

    const githubContext = useContext(GithubContext)

    const {getUser, user, loading, getUserRepos, repos} = githubContext;

        useEffect(() => {
            getUser(match.params.login)
            getUserRepos(match.params.login)
        },[])

        console.log(repos);

        const {
            name,
            company,
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
            hireable
        } = user

        

        return (
            <Fragment>
                {loading ? (<Spinner />)  : (
                <Fragment>
                    <Link to='/' className='btn btn-light'>Back to Search</Link>
                    Hireable : {' '}
                    {hireable ? (<i className='fas fa-check text-success' />) : 
                    (<i className='fas fa-times-circle text-danger' />)
                    }

                    <div className="card grid-2">
                        <div className="all-center">
                            <img src={avatar_url} 
                            className="round-img" 
                            style={{width:'150px'}} 
                            alt ="" /> 
                            <h1>{name}</h1>
                            <p>Locaion: {location}</p>
                    </div>

                        <div>
                            
                            {bio && (<Fragment>
                                <h3>Bio</h3>
                                <p>{bio}</p>
                            </Fragment>)}

                            <br />

                            <a href={html_url} className="btn btn-dark">Visit Github Profile</a>
                            <br />
                            <br />

                            <ul>
                        <li>
                            {login && (
                                <Fragment>
                                    <strong>Username: {login}</strong>
                                </Fragment>
                            )}
                        </li>
                           
                        <li>
                            {company && (
                                <Fragment>
                                    <strong>Company: {company}</strong>
                                </Fragment>
                            )}
                        </li>

                        <li>
                            {blog && (
                                <Fragment>
                                    <strong>Website: {blog}</strong>
                                </Fragment>
                            )}
                        </li>
                    </ul>
                        </div>
                    
                  
                    
                </div>
                <div className="card text-center">
                    <div className="badge badge-primary">
                        Followers: {followers}
                    </div>

                    <div className="badge badge-success">
                        Following: {following}
                    </div>

                    <div className="badge badge-light">
                        Public Repos: {public_repos}
                    </div>

                    <div className="badge badge-dark">
                        Public Gists: {public_gists}
                    </div>
                </div>
                 <Repos repos={repos} /> 
                </Fragment>)
                
             }

          
            </Fragment>
        )
    
}



export default User
