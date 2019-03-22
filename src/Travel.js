import React, { Component } from 'react';
import Compotravel from './Compotravel.jsx';

class Travel extends Component {
  state = {
    nameList: [
      {
        id: 1,
        destination: 'Paris',
        country: 'France',
        photo: 'http://levieuxbougon.l.e.pic.centerblog.net/o/3af92c39.jpg',
        distance: '1000'
      },
      {
        id: 2,
        destination: 'Barcelone',
        country: 'Espagne',
        photo: 'https://p6.storage.canalblog.com/65/36/281423/15119593.jpg',
        distance: '985'
      },
      {
        id: 3,
        destination: 'Munich',
        country: 'Allemagne',
        photo:
          'https://znaniye.ru/files/images/schools/de/did-deutsch-institut-munich-01.jpg',
        distance: '1521'
      },
      {
        id: 4,
        destination: 'Berlin',
        country: 'Allemange',
        photo:
          'https://static.ferienwohnungen.de/m/panorama/m/u/museumsinsel-berlin-700x200-c.jpg?20180720',
        distance: '985'
      },
      {
        id: 5,
        destination: 'New York',
        country: "Etats Unis d'amerique",
        photo:
          'https://i1.wp.com/perm-ads.com/wp-content/uploads/2019/02/PERM-Immigration-Advertising-NEW-YORK-HEADER.jpg?resize=700%2C200&ssl=1',
        distance: '985'
      }
    ]
  };
  render() {
    return (
      <div className='Travel'>
        <h1>Voici les voyages :</h1>
        <Compotravel nameListProps={this.state.nameList} />
      </div>
    );
  }
}

export default Travel;
