import React from 'react';

const Card = ({name,accessories}) => {
    return (
    <div className="border border-purple-200 p-10 m-2 rounded-lg bg-purple-200 text-red-400 shadow-lg">
      <h1 className="font-bold text-3xl">{name}</h1>
      <h1 className ="text-xl">{accessories} Accessories</h1>
    </div>
  );
};

export default Card;
