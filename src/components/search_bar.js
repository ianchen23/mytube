import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
        };
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onKeyPress={(event) => this.onSearch(event)}
                    onChange={(event) => this.setState({term: event.target.value})} />
                    {/* onChange={(event) => this.onInputChange(event.target.value)} /> */}
            </div>
        )
    }

    // onInputChange(term) {
    //     this.setState({term});
    //     this.props.onSearchTermChange(term);
    // }
    onSearch(e) {
        if (e.key === 'Enter') {
            this.props.onSearchTermChange(e.target.value);
        }
    }
}

export default SearchBar;