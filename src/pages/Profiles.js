import React from 'react'
import { Link, Route } from 'react-router-dom'
import Profile from './Profile'

const Profiles = () => {
    return (
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li>
                    <Link to={process.env.REACT_APP_DEVELOPMENT_URL + 'Profiles/p-bin'}>p-bin</Link>
                </li>
                <li>
                    <Link to={process.env.REACT_APP_DEVELOPMENT_URL + 'Profiles/velopert'}>velopert</Link>
                </li>
            </ul>

            
            <Route 
                path={process.env.REACT_APP_DEVELOPMENT_URL + "Profiles"}
                exact
                render={() => <div>사용자를 선택해주세요.</div>}
            />
            <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "Profiles/:username"} component={Profile} />
        </div>
    )
}

export default Profiles
