import React from 'react';
import axios from 'axios';

import Card from '../components/Card';

export function Orders() {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchOrders() {
      try {
        const { data } = await axios.get('http://localhost:3001/orders');
        setOrders(data.map((obj) => obj.items).flat());
        setIsLoading(false);
      } catch (error) {
        alert('Error');
        console.log(error);
      }
    }

    fetchOrders();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-30">
        <h1>My orders</h1>
      </div>
      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(8)] : orders).map((item, index) => (
          <Card key={index} loading={isLoading} {...item} />
        ))}
      </div>
    </div>
  );
}
