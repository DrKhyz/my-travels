import React, { Component } from 'react';
import Compotravel from './Compotravel.jsx';

class Travel extends Component {
  state = {
    nameList : [
      {id: 1, destination: 'Paris', country: 'France', photo: 'http://img.nauticexpo.fr/images_ne/photo-m2/20176-13489489.jpg', distance: '1000'},
      {id: 2, destination: 'Barcelone', country: 'Espagne', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRKce9NFZxmO8-3wudavbpJMrxvHAPkjHdqmjHzXYZ2U1BMPTR', distance: '985'}
    ]
  }
  render() {
    return (
      <div className="Travel">
            <h1>Voici les voyages :</h1>
            <Compotravel nameListProps={ this.state.nameList }/>
      </div>
    );
  }
}

export default Travel;