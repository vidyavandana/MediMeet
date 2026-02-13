"use client";

import { useEffect, useState } from "react";
import { getAppointmentStats } from "@/actions/Analytics";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

export default function AppointmentBarChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function load() {
      const stats = await getAppointmentStats();

      setData([
        {
          name: "Appointments",
          booked: stats.booked,
          completed: stats.completed,
        },
      ]);
    }

    load();
  }, []);

  return (
    <div
    style={{
      backgroundColor: "#f5f7ff", 
      padding: "10px",
      borderRadius: "12px",
    }}
  >
    <BarChart width={500} height={350} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="booked" name="Booked" />
      <Bar dataKey="completed" name="Completed" />
    </BarChart>
    </div>
  );
}
