import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Card from './Card';
const FilteredDataPage = () => {
  const newData = useSelector((store) => store.filterData.dummyData);
  return (
    <>{newData.length === 0 ? <h1 className='font-bold text-2xl'>No data found matching your filter!!!</h1>:
      <div>
        {newData.map((w) => (
          <Link
            key={w.id}
            to={'/display/' + w.id}
          >
            <Card {...w} />
          </Link>
        ))}
      </div>}
    </>
  );
};

export default FilteredDataPage;
