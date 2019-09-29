import React from 'react';

function Card(props) {

  const {
    name,
    avatar,
    company
  } = props;
  return (
    <div className="github-card">
      <img className="github-card__img" width="75" height="75" alt={name} title={name} src={avatar} />
      <div className="github-card__content">
        {name &&
          <div className="github-card__name">{name}</div>
        }
        {company &&
          <div className="github-card__company">{company}</div>
        }
      </div>
    </div>
  );

}

export default Card;