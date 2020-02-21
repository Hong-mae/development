import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import Profile from './Profile'

const Profiles = () => {
    const activeStyle = {
        background: 'black',
        color: 'white'
    }
    return (
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li>
                    <NavLink activeStyle={activeStyle} to={process.env.REACT_APP_DEVELOPMENT_URL + 'Profiles/p-bin'}>p-bin</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={activeStyle} to={process.env.REACT_APP_DEVELOPMENT_URL + 'Profiles/velopert'}>velopert</NavLink>
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
