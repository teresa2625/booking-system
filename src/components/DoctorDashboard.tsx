import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react"; // FullCalendar React component
import dayGridPlugin from "@fullcalendar/daygrid"; // Day grid view
import timeGridPlugin from "@fullcalendar/timegrid"; // Time grid view
import interactionPlugin from "@fullcalendar/interaction"; // Drag and drop functionality
import { Booking } from "types/booking";

interface DoctorDashboardProps {
  bookings: Booking[];
}

const DoctorDashboard: React.FC<DoctorDashboardProps> = ({ bookings }) => {
  const [events, setEvents] = useState([]);

  //   useEffect(() => {
  //     // Transform bookings into events for FullCalendar
  //     const calendarEvents = bookings.map((booking) => ({
  //       id: booking.id,
  //       title: `${booking.title} - ${booking.notes || "No notes"}`,
  //       start: booking.date, // ISO string or Date object
  //       end: booking.endDate || booking.date, // Optional: Specify end date/time
  //     }));
  //     setEvents(calendarEvents);
  //   }, [bookings]);

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
      events={events} // Provide events to FullCalendar
      editable={false} // Disable event drag and drop
      eventClick={(info) => alert(`Booking Details: ${info.event.title}`)} // Handle event clicks
    />
  );
};

export default DoctorDashboard;
