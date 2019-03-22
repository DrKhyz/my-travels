import React, { Component } from 'react';

class Compotravel extends Component {
  render() {
    const arrNameList = this.props.nameListProps;
    const data = arrNameList.map(name => {
      return (
        <div className='Voyage' key={name.id}>
          <div>
            <img src={name.photo} alt='La ville' />
          </div>
          <div>
            Vous irez à {name.destination} qui se trouve en {name.country}
          </div>
          <div>
            Vous etes actuellement à {name.distance} km de votre déstination.
          </div>
        </div>
      );
    });
    return <div className='name-list'>{data}</div>;
  }
}

export default Compotravel;
