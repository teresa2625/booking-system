import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

interface DoctorDashboardProps {
  id: string;
  title: string;
  notes?: string;
  date: string;
  endDate?: string;
}

interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end: string;
}

const mockBookings: DoctorDashboardProps[] = [
  {
    id: "1",
    title: "Patient Consultation",
    notes: "Follow-up appointment",
    date: "2024-12-10T10:00:00",
    endDate: "2024-12-10T11:00:00",
  },
  {
    id: "2",
    title: "New Patient",
    notes: "Initial consultation",
    date: "2024-12-12T14:00:00",
  },
];

const DoctorDashboard: React.FC = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  useEffect(() => {
    console.log("dashboard");
    const calendarEvents = mockBookings.map((booking) => ({
      id: booking.id,
      title: `${booking.title} - ${booking.notes || "No notes"}`,
      start: booking.date,
      end: booking.endDate || booking.date,
    }));
    setEvents(calendarEvents);
  }, [mockBookings]);

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
      events={events}
      editable={false}
      eventClick={(info) => alert(`Booking Details: ${info.event.title}`)}
    />
  );
};

export default DoctorDashboard;
