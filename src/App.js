import React from "react";
import axios from "axios";
import "./App.css";

import GithubInfo from "./github-info/github-info.component";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      githubInfo: null,
      name: null,
      profilePic: null,
      followers: null,
      following: null,
      url: null,
      bio: null,
      repo: null
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { username } = this.state;
    axios.get(`https://api.github.com/users/${username}`).then((res) => {
      console.log(res.data);
      this.setState({
        githubInfo: res.data,
        name: res.data.name,
        profilePic: res.data.avatar_url,
        followers: res.data.followers,
        following: res.data.following,
        url: res.data.html_url,
        bio: res.data.bio,
        repo: res.data.public_repos
      });
    });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Search</button>
        </form>
        {this.state.githubInfo ? (
          <GithubInfo
            name={this.state.name}
            username={this.state.username}
            profilePic={this.state.profilePic}
            followers={this.state.followers}
            following={this.state.following}
            url={this.state.url}
            bio={this.state.bio}
            repo={this.state.repo}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
