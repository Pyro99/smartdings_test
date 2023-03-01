import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Card from './Card';
const CardContainer = () => {
  const newData = useSelector((store) => store.filterData.data);
  return (
    <>
      <div>
        {newData.map((w) => (
          <Link
            key={w.id}
            to={'/display/' + w.id}
          >
            <Card {...w} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default CardContainer;
