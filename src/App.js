import React from "react";
import axios from "axios";
import "./App.css";

import GithubInfo from "./github-info/github-info.component";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      exist: null,
      name: null,
      profilePic: null,
      followers: null,
      following: null,
      url: null,
      bio: null,
      repo: null,
      error: null,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value, error: null });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { username } = this.state;
    try {
      axios
      .get(`https://api.github.com/users/${username}`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          exist: true,
          error: null,
          name: res.data.name,
          profilePic: res.data.avatar_url,
          followers: res.data.followers,
          following: res.data.following,
          url: res.data.html_url,
          bio: res.data.bio,
          repo: res.data.public_repos,
        });
      })
      .catch((err) => {
        this.setState({ exist: null, error: true });
      });
    }
    catch(err) {
      this.setState({ exist: null, error: true });
    }
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
        {this.state.exist ? (
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
        {this.state.error ? (
          <p>User with <strong>{this.state.username}</strong> does not exist!</p>
        ) : null}
      </div>
    );
  }
}

export default App;
