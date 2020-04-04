import React from "react";
import PropTypes from "prop-types";
const UserItem = ({ user: { avatar_url, login, html_url } }) => {
  return (
    <div className="container">
      <div className="card">
        <img src={avatar_url} alt="" className="avatarImg" />
        <h3> {login} </h3> 
        <div className="moreBtnWrapper">
          <a href={html_url} className="moreBtn">
            More
          </a>
        </div>
      </div>
    </div>
  );
};

UserItem.propTypes = {
    user: PropTypes.object.isRequired 
}

export default UserItem;
