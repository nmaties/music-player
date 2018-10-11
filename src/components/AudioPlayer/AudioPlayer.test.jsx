import React from 'react';
import renderer from 'react-test-renderer';
import AudioPlayer from './AudioPlayer';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('AudioPlayer', () => {

  const playerProps = {
    artist: 'Calum Scott',
    songName: 'You Are The Reason',
    format: '.mp3',
    releaseYear: 2018,
    album: 'Only Human',
    songLink: '1GYwj2eL61SkOOEsGakyTgNpong37WCWv',
    id: 1
  };

  describe('Snapshots', () => {
    it('is displayed fine', () => {
      const player = renderer
        .create(<AudioPlayer song = { playerProps } />);
      expect(player.toJSON()).toMatchSnapshot();
    });

    it('is displayed fine playing state', () => {
      const player = renderer
        .create(<AudioPlayer song = { playerProps } />);

      player.getInstance().setState({
        play: true,
        duration: 75
      });
      expect(player.toJSON()).toMatchSnapshot();
    });

    it('is displayed fine paused state', () => {
      const player = renderer
        .create(<AudioPlayer song = { playerProps } />);

      player.getInstance().setState({
        play: false,
        duration: 100
      });
      expect(player.toJSON()).toMatchSnapshot();
    });
  });

  describe('AudioPlayer functionality', ()=> {
    const player = mount(<AudioPlayer song = { playerProps } />);

    it('play button', () => {
      player.find('.fa-play').simulate('click');
      expect(player.state().play).toBeTruthy();
      expect(player.state().interval).not.toBeNull();
    });

    it('pause button', () => {
      player.find('.fa-pause').simulate('click');
      expect(player.state().play).toBeFalsy();
      expect(player.state().interval).toBeNull();
    });
  });
});