import React from "react";
import "./github-info.styles.scss";

const GithubInfo = ({
  name,
  username,
  profilePic,
  followers,
  following,
  url,
  bio,
  repo
}) => (
  <div className="frame">
    <div className="center">
      <div className="profile">
        <div className="image">
          <div className="circle-1"></div>
          <div className="circle-2"></div>
          <img src={profilePic} style={{width:70, height:70}}  alt="Jessica Potter" />
        </div>

        <div className="name"><strong>{name}</strong></div>
        <div className="job"><strong>{username}</strong></div>
        <br />
        <div className="job"><strong>{bio}</strong></div>

        <div className="actions">
          <a className="btn" href={url} target="_blank" rel="noopener noreferrer">Visit</a>
        </div>
      </div>

      <div className="stats">
        <div className="box">
          <span className="value">{followers}</span>
          <span className="parameter"><strong>Followers</strong></span>
        </div>
        <div className="box">
          <span className="value">{following}</span>
          <span className="parameter"><strong>Following</strong></span>
        </div>
        <div className="box">
          <span className="value">{repo}</span>
          <span className="parameter"><strong>Respository</strong></span>
        </div>
      </div>
    </div>
  </div>
);

export default GithubInfo;
