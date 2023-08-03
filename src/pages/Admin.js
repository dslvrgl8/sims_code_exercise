import React, { useContext, useState } from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import Scatterplot1 from './Scatterplot';
import Pie1 from './Pie';
import Bar1 from './Bar';
import Line1 from './Line';
import { DataContext } from '../App';

function AdminPanel() {
  const { 
    data, 
    barData, 
    pieData, 
    scatterplotData, 
  } = useContext(DataContext);

  const [showCharts, setShowCharts] = useState({
    barChart: true,
    lineChart: true,
    pieChart: true,
    scatterplotChart: true,
  });
  
  return (
    <Admin dataProvider={restProvider('http://localhost:5000')}>
      <Resource name="scatterplots" list={() => <Scatterplot1 data={scatterplotData} />} />
      <Resource name="pies" list={() => <Pie1 data={pieData} />} />
      {showCharts.barChart && <Resource name="bars" list={() => <Bar1 data={barData} />} />}
      {showCharts.lineChart && <Resource name="lines" list={() => <Line1 data={data} />} />}
    </Admin>
  );
}

export default AdminPanel;


