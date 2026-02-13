"use server";

import { db } from "@/lib/prisma";

/**
 * Total booked vs completed appointments
 */
export async function getAppointmentStats() {
  const booked = await db.appointment.count({
    where: {
      status: { in: ["SCHEDULED", "COMPLETED"] },
    },
  });

  const completed = await db.appointment.count({
    where: { status: "COMPLETED" },
    });

  return { booked, completed };
}


// Line Chart

export async function getUsersPerWeek() {
  const result = [];
  const now = new Date();

  for (let i = 5; i >= 0; i--) {
    const start = new Date(now);
    start.setDate(now.getDate() - now.getDay() - i * 7);
    start.setHours(0, 0, 0, 0);

    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    end.setHours(23, 59, 59, 999);

    const users = await db.user.count({
      where: {
        createdAt: {
          gte: start,
          lte: end,
        },
      },
    });

    result.push({
      label: `${start.toLocaleDateString()} - ${end.toLocaleDateString()}`,
      users,
    });
  }

  return result;
}




