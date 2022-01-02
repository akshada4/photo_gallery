import './App.css';
import React from "react";
import SearchBar from './SearchBar';

class App extends React.Component {
  createImageComponents = (images) => { return images.map(({ src, id }) => <img key={id} src={src} />) }

  render() {
    return (
      <div className="app">
        <div className="search">
          <SearchBar url="/search="/>
        </div>
        <div className="gallery">
          {this.props.loading ? <h1>loading...</h1> : <>
            <div className="galleryColumn">{this.createImageComponents(this.props.imagesC1)}</div>
            <div className="galleryColumn">{this.createImageComponents(this.props.imagesC2)}</div>
            <div className="galleryColumn">{this.createImageComponents(this.props.imagesC3)}</div>
          </>}
        </div>
      </div>
    )
  }
}

export default App;
