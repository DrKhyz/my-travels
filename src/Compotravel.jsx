import React, { Component } from 'react';

class Compotravel extends Component {
  render() {
    const arrNameList = this.props.nameListProps;
    const data = arrNameList.map(name => {
      return (
        <div className='Voyage' key={name.id}>
          <div>
            Vous irez à {name.destination} qui se trouve en {name.country}
          </div>
          <div>
            Le bateau utilisé sera celui ci :{' '}
            <img src={name.photo} alt='Un bateau' />
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
