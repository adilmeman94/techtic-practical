import React from "react";
import "./styles.css";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          composition: "",
        },
      ],
      virus: "",
      inputlength: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addClick() {
    this.setState((prevState) => ({
      users: [...prevState.users, { composition: "" }],
    }));
  }

  createUI() {
    return this.state.users.map((item, index) => (
      <div key={index}>
        <input
          placeholder="composition of individual"
          name="composition"
          value={item.composition || ""}
          onChange={this.handleChange.bind(this, index)}
        />

        <input
          type="button"
          value="remove"
          onClick={this.removeClick.bind(this, index)}
        />
      </div>
    ));
  }

  handleChange(i, e) {
    const { name, value } = e.target;
    let users = [...this.state.users];
    users[i] = { ...users[i], [name]: value };
    this.setState({ users });
  }

  removeClick(i) {
    let users = [...this.state.users];
    users.splice(i, 1);
    this.setState({ users });
  }

  handlechange1 = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit(event) {
    event.preventDefault();
    const virus1 = this.state.virus;
    console.log(virus1);
    const users1 = this.state.users;
    console.log(users1);
    if (users1 > 1) {
      for (let i = 0; i <= users1.length; i++) {
        this.isVirusComibnation(virus1, users1[i].composition);
      }
    } else {
      this.isVirusComibnation(virus1, users1.composition);
    }
  }

  isVirusComibnation(virusName, compositionName) {
    let x = 0;
    let y = 0;
    while (x < virusName.length && y < compositionName.length) {
      if (virusName[x] === compositionName[y]) {
        x++;
        y++;
      } else {
        x++;
      }
    }
    if (y === compositionName.length) {
      console.log("POSITIVE");
    } else {
      console.log("NEGETIVE");
    }
  }

  render() {
    return (
      <div className="Homepage">
        <h1>Welcome to Dashboard</h1>
        <input
          type="text"
          placeholder="Virus composition"
          name="virus"
          value={this.state.virus}
          onChange={this.handlechange1}
        />
        <input
          type="number"
          placeholder="Number of Person"
          name="inputlength"
          value={this.state.inputlength}
          onChange={this.handlechange1}
        />
        <form onSubmit={this.handleSubmit}>
          {this.createUI()}
          <input
            type="button"
            value="add more"
            onClick={this.addClick.bind(this)}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
