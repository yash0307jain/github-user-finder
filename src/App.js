import React from "react";
import axios from "axios";
import "./App.scss";

import Loader from "react-loader-spinner";
import GithubInfo from "./github-info/github-info.component";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      exist: null,
      error: null,
      name: null,
      loginUsername: null,
      profilePic: null,
      followers: null,
      following: null,
      url: null,
      bio: null,
      repo: null,
      loading: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value, error: null });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ exist: null, loading: true });

    const { username } = this.state;

    setTimeout(() => {
      axios
        .get(`https://api.github.com/users/${username}`)
        .then((res) => {
          this.setState({
            exist: true,
            error: null,
            name: res.data.name,
            loginUsername: res.data.login,
            profilePic: res.data.avatar_url,
            followers: res.data.followers,
            following: res.data.following,
            url: res.data.html_url,
            bio: res.data.bio,
            repo: res.data.public_repos,
            loading: false,
          });
        })
        .catch((err) => {
          this.setState({ exist: null, error: true, loading: false });
        });
    }, 500);
  };

  render() {
    return (
      <div className="App">
        <h3 className="light heading">Github User Finder</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="container">
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              required
              placeholder="Enter Username"
            />
            <div className="search"></div>
          </div>
        </form>
        {this.state.exist ? (
          <GithubInfo
            name={this.state.name}
            username={this.state.loginUsername}
            profilePic={this.state.profilePic}
            followers={this.state.followers}
            following={this.state.following}
            url={this.state.url}
            bio={this.state.bio}
            repo={this.state.repo}
          />
        ) : null}
        {this.state.loading ? (
          <div className="loader-oval">
            <Loader type="Grid" color="#CA7C4E" timeout={3000} />
          </div>
        ) : null}
        {this.state.error ? (
          <p className="loader-oval" style={{ color: "white" }}>
            <h2>User with</h2>
            <p className="light">{this.state.username}</p>{" "}
            <h2>does not exist!</h2>
          </p>
        ) : null}
      </div>
    );
  }
}

export default App;
