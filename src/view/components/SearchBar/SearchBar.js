import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
    }

    onChangeHandler = (event) => {
        const inputValue = event.target.value;
        this.props.onSearchHandler(inputValue);

        this.setState({
            inputValue
        });
    }

    render() {
        return (
            <div id="search">
                <div className="nav-wrapper">
                    <form>
                        <div className="input-field">
                            <input id="search" type="search" placeholder="Search" required onChange={this.onChangeHandler} value={this.state.inputValue} />
                            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                            <i className="material-icons">close</i>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export { SearchBar };