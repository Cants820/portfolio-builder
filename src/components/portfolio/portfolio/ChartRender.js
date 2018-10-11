import React from 'react';
import { ResponsiveContainer, Tooltip, Legend} from 'recharts/lib/component/';
import LineChart from 'recharts/lib/chart/LineChart';
import { Line, XAxis, YAxis, CartesianGrid } from 'recharts/lib/cartesian/';

const data = [
  { stockSymbol: '', stockName: '', closingPrice: '', openingPrice: '', divYield: '', divAmount: ''},
  { stockSymbol: '', stockName: '', closingPrice: '', openingPrice: '', divYield: '', divAmount: ''},
  { stockSymbol: '', stockName: '', closingPrice: '', openingPrice: '', divYield: '', divAmount: ''},
  { stockSymbol: '', stockName: '', closingPrice: '', openingPrice: '', divYield: '', divAmount: ''},
  { stockSymbol: '', stockName: '', closingPrice: '', openingPrice: '', divYield: '', divAmount: ''},
  { stockSymbol: '', stockName: '', closingPrice: '', openingPrice: '', divYield: '', divAmount: ''},
  { stockSymbol: '', stockName: '', closingPrice: '', openingPrice: '', divYield: '', divAmount: ''},
];

class ChartRender extends React.Component {
  function SimpleLineChart() {
    return (
      // 99% per https://github.com/recharts/recharts/issues/172
      <ResponsiveContainer width="99%" height={320}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Visits" stroke="#82ca9d" />
          <Line type="monotone" dataKey="Orders" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  };
}

export default ChartRender;