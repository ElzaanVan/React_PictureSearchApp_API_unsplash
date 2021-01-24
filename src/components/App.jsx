import React, { Fragment } from "react";
import unsplash from "../API/unsplash";
import ImageList from "./ImageList";
import SearchInput from "./SearchInput";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("search/photos", {
      params: { query: term }
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <Fragment>
        <h1>
          Picture Search<i class="camera retro icon"></i>
        </h1>
        <div className="header">
          <SearchInput onSubmit={this.onSearchSubmit} />
        </div>
        <div>
          <ImageList images={this.state.images} />
        </div>
      </Fragment>
    );
  }
}

export default App;
