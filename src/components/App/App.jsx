import React, { Component } from 'react';
import './App.css';
import songsList from '../../utilities/songsList';
import AudioPlayer from '../AudioPlayer/AudioPlayer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songsItems: songsList
    };
  }

  filterBy = (evt) =>{
    let value = evt.target.value;
    let filterBy = evt.target.name;
    let filteredList = songsList.filter((el) => {
      return el[filterBy].toLowerCase().indexOf(value) !== -1;
    });

    this.setState({
      songsItems: filteredList
    });
  };

  render() {
    return (
      <div className="container">
        <br/>
        <div className="card border-orange">
          <div className="card-header bg-warning text-dark">
            <em>Songs Playlist</em>
          </div>
            <table className="table table-hover table-bordered table-black table-border-radius table-fixed text-warning">
              <thead className="text-darkorange">
              <tr className="text-center">
                <th>#</th>
                <th>
                  <input type="text"
                           name="artist"
                           placeholder="Artist"
                           className="form-control orange-input"
                           onChange={this.filterBy}/></th>
                <th>Song <i className="fas fa-music"></i></th>
                <th>
                  <input type="text"
                         name="album"
                         placeholder="Album"
                         className="form-control orange-input"
                         onChange={this.filterBy}/>
                </th>
                <th>Release Year</th>
                <th>Format</th>
                <th className="text-center">Play/Pause</th>
              </tr>
              </thead>
              <tbody className="pagination-container">
              {this.state.songsItems.map((el, idx) => {
                el.songLink = 'http://docs.google.com/uc?export=open&id=' + el.songLink;
                return (
                  <tr className="text-center" key={idx}>
                    <td>{idx + 1}</td>
                    <td>{el.artist}</td>
                    <td>{el.songName}</td>
                    <td>{el.album}</td>
                    <td>{el.releaseYear}</td>
                    <td>{el.format}</td>
                    <td><AudioPlayer song={el} key={el.id}/></td>
                  </tr>
                )
              })}
              </tbody>
            </table>
        </div>
      </div>
    );
  }
}

export default App;
