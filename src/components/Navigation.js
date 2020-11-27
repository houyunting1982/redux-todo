import React, { Fragment } from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { signIn, signOut } from '../Auth'

const NavigationBar = styled.div`
    margin-bottom: 15px;
    background-color: lightgray;
`

const Profile = styled.span`
    margin-left: 15px;
`

const ProfilePicture = styled.img`
    border-radius: 50%;
    max-width: 30px;
    margin-right: 5px;
`

const Navigation = ({ user }) => (
    <NavigationBar>
        <Link className="btn btn-primary" to="/">
            To-Do List
        </Link>
        <Link className="btn btn-secondary" to="/new-item">
            + Add New
        </Link>
        {!user && <Button onClick={signIn}>Login</Button>}
        {user && (
            <Fragment>
                <Button onClick={signOut}>Logout</Button>
                <Profile>
                    <ProfilePicture src={user.profile.picture} />
                    {user.profile.email}
                </Profile>
            </Fragment>
        )}
    </NavigationBar>
)

export default Navigation
