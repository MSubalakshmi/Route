import React from 'react';
import { useLocation } from 'react-router-dom';

const Items = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const itemId = queryParams.get('id');

  return (
    <div>
      <h1>Item Detail Page</h1>
      {itemId && <p>Item ID: {itemId}</p>}
    </div>
  );
};

export default Items;
