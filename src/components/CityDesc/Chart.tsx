import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./chart.css";

const Chart: React.SFC<any> = ({ preparedData }) => {
  const data: Array<Object> = preparedData;
  return (
    <ResponsiveContainer width="90%" height="80%" className="chart">
      <LineChart data={data} margin={{ right: 40, bottom: 5 }}>
        <XAxis minTickGap={30} dataKey="name" />
        <YAxis type="number" domain={[0, 40]} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="temp"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="feels_like" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
