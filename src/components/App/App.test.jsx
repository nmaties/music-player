import App from './App.jsx';
import React from 'react';
import renderer from 'react-test-renderer';

describe('App', () => {
  const songsList = [
    {
      artist: 'test 1',
      songName: 'test 1',
      format: '.mp3',
      releaseYear: 2018,
      album: 'test 1',
      songLink: 'sadas231231sa',
      id: 1
    },
    {
      artist: 'test 2',
      songName: 'test 2',
      format: '.mp3',
      releaseYear: 2018,
      album: 'test 2',
      songLink: 'sxaxasda31231',
      id: 1
    },
    {
      artist: 'test 3',
      songName: 'test 3',
      format: '.mp3',
      releaseYear: 2018,
      album: 'test 3',
      songLink: 'qeqweqsqdq',
      id: 1
    }
  ];
  it('is displayed fine', () => {
    const app = renderer
      .create(<App/>);

    app.getInstance().setState({
      songsItems: songsList
    });
    expect(app.toJSON()).toMatchSnapshot();
  });


  it('is displayed fine when filtering by artist', () => {
    const app = renderer
      .create(<App/>);

    app.getInstance().setState({
      songsItems: songsList.filter((el)=> el.artist === 'test 1')
    });
    expect(app.toJSON()).toMatchSnapshot();
  });

  it('is displayed fine when filtering by album', () => {
    const app = renderer
      .create(<App/>);

    app.getInstance().setState({
      songsItems: songsList.filter((el)=> el.album === 'test 2')
    });
    expect(app.toJSON()).toMatchSnapshot();
  });

});

