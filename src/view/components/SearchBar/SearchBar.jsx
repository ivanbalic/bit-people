import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const inputValue = event.target.value;
    this.props.onSearchHandler(inputValue);
    this.setState({
      inputValue
    });
  }

  render() {
    const { inputValue } = this.state;
    return (
      <div id="search">
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input
                id="search"
                type="search"
                placeholder="Search"
                required
                onChange={this.handleChange}
                value={inputValue}
              />
              <label className="label-icon" htmlFor="search">
                <i className="material-icons">search</i>
              </label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export { SearchBar };
