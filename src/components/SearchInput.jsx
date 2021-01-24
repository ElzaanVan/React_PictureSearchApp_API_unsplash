import React from "react";

class SearchInput extends React.Component {
  state = { term: "" };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div class="ui icon input">
          <input
            type="text"
            placeholder="Image search..."
            onChange={(e) => {
              this.setState({ term: e.target.value });
            }}
            value={this.state.term}
          />
          <i
            onClick={this.onFormSubmit}
            class="inverted circular search link icon"
          ></i>
        </div>
      </form>
    );
  }
}

export default SearchInput;
