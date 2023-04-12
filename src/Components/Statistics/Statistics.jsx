import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const Marks = [
    {
      name: "Assignment-1",
      marks: 60,
   
    },
    {
      name: "Assignment-2",
      marks: 55,
   
    },
    {
      name: "Assignment-3",
      marks: 58,
    
    },
    {
      name: "Assignment-4",
      marks: 54,
     
    },
    {
      name: "Assignment-5",
      marks: 57,
     
    },
    {
      name: "Assignment-6",
      marks: 55,
    
    },
    {
      name: "Assignment-7",
      marks: 60,
    
    },
    {
        name: "Assignment-8",
        marks: 60,
      
      },
  ];

  return (
    <div>
      <h2 className="text-2xl text-center font-semibold mb-5 underline">Charts of the Assignment Marks</h2>

      <ResponsiveContainer width="100%" aspect={3}>
        <AreaChart
          width={500}
          height={400}
          data={Marks}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          
          <Area type="monotone"   dataKey="marks" stroke="#8884d8" fill="#8884d8" />
         
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
