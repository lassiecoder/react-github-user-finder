import React, { Component } from 'react';

export class UserItem extends Component {

    render() {
        const {avatar_url, login,html_url} = this.props.user;

        return (
            <div className="container">
                <div className="card">
                    <img src={avatar_url} alt='' className='avatarImg' />
                    <h3> {login} </h3>
                    <div className="moreBtnWrapper">
                        <a href={html_url} className='moreBtn'>More</a>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default UserItem
