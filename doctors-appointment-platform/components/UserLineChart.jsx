"use client";

import { useEffect, useState } from "react";
import { getUsersPerWeek } from "@/actions/Analytics";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function UsersLineChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function load() {
      const result = await getUsersPerWeek();
      setData(result);
    }
    load();
  }, []);

  return (
  <div
    style={{
      backgroundColor: "#f5f7ff",   // light blue background
      padding: "10px",
      borderRadius: "12px",
    }}
  >
    <LineChart width={500} height={350} data={data}>
      <CartesianGrid strokeDasharray="3 3" />

      {/* 👉 Only first date before hyphen */}
      <XAxis
        dataKey="label"
        tickFormatter={(value) => value.split(" - ")[0]}
      />

      <YAxis />
      <Tooltip />

      <Line
        type="monotone"
        dataKey="users"
        name="Users per week"
      />
    </LineChart>
  </div>
);

}
