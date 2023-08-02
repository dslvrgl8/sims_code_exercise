import React, { useState } from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import PostList from './components/PostList';
import Scatterplot1 from './Scatterplot';
import Pie1 from './Pie';
import Bar1 from './Bar';
import Line1 from './Line';

function AdminPanel() {
  const initialData = [
    { name: "Sony", value: 30 },
    { name: "Microsoft", value: 23 },
    { name: "Nintendo", value: 43 },
  ];

  const [data, setData] = useState(initialData);

  // Function to handle deleting a graph
  const handleDeleteGraph = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <Admin dataProvider={restProvider('http://localhost:5000')}>
      <Resource name='posts' list={PostList} />
      {data.length > 0 && <Scatterplot1 data={data} onDelete={() => handleDeleteGraph(0)} />}
      {data.length > 1 && <Pie1 data={data} onDelete={() => handleDeleteGraph(1)} />}
      {data.length > 2 && <Bar1 data={data} onDelete={() => handleDeleteGraph(2)} />}
      {data.length > 3 && <Line1 data={data} onDelete={() => handleDeleteGraph(3)} />}
    </Admin>
  );
}

export default AdminPanel;
