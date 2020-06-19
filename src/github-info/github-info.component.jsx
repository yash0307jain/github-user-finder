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
  // <div className="card">
  //   {profilePic ? (
  //     <img src={profilePic} alt="ProfilePic" style={{ width: "100%" }} />
  //   ) : null}
  //   {name ? <h1>{name}</h1> : null}
  //   {username ? <p className="title">{username}</p> : null}
  //   {bio ? <p>{bio}</p> : null}
  //   {followers ? <p>Followers: {followers}</p> : <p>Followers: 0</p>}
  //   {following ? <p>Following: {following}</p> : <p>Following: 0</p>}
  //   <p>
  //     <a className="visit" href={url}>
  //       Visit
  //     </a>
  //   </p>
  // </div>
  <div className="frame">
    <div className="center">
      <div className="profile">
        <div className="image">
          <div className="circle-1"></div>
          <div className="circle-2"></div>
          <img src={profilePic} style={{width:70, height:70}}  alt="Jessica Potter" />
        </div>

        <div className="name">{name}</div>
        <div className="job">{username}</div>

        <div className="actions">
          {/* <button className="btn">Follow</button> */}
          <a className="btn" href={url}>Visit</a>
        </div>
      </div>

      <div className="stats">
        <div className="box">
          <span className="value">{followers}</span>
          <span className="parameter">Followers</span>
        </div>
        <div className="box">
          <span className="value">{following}</span>
          <span className="parameter">Following</span>
        </div>
        <div className="box">
          <span className="value">{repo}</span>
          <span className="parameter">Respository</span>
        </div>
      </div>
    </div>
  </div>
);

export default GithubInfo;
