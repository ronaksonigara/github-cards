import React from 'react';
import Card from './Card';

function CardWrapper(props) {

  const cardList = (profiles) => {
    return profiles.map((data, index) => {
      return < Card key={data.id} name={data.name} avatar={data.avatar_url} company={data.company} />
    });
  };

  const {
    profiles
  } = props;

  return (
    <div>
      {cardList(profiles)}
    </div>
  )
}

export default CardWrapper;