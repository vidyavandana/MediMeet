import { getAppointmentStats } from "@/actions/Analytics";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

export default async function AppointmentBarChart() {

  const stats = await getAppointmentStats();

  const data = [
    { name: "Appointments", booked: stats.booked, completed: stats.completed }
  ];

  return (
  <div
    style={{
      backgroundColor: "#f5f7ff",   // light blue background
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
