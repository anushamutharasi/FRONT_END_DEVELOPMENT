import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
const Barchart = () => {
  return (
    <>
      <div>Barchart</div>
      <ResponsiveContainer
        width="90%"
        height={400}
        style={{ backgroundColor: "pink" }}
      >
        <BarChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            style={{ backgroundColor: "green" }}
          />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default Barchart


const data = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 5000 },
  { name: "Apr", sales: 4500 },
  { name: "May", sales: 6000 },
  { name: "May", sales: 9500 },
];
