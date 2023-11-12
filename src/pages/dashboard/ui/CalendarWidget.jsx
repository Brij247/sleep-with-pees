import { useState } from "react";
import { Card } from "antd";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

import styled from "styled-components";

function CalendarWidget() {
  const [currentEvents, setCurrentEvents] = useState([]);
  console.log(currentEvents);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <CalendarCard title={"My physical diet and activity"}>
      <FullCalendar
        height="75vh"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
        }}
        initialView="timeGridDay"
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        themeSystem="Sandstone"
        select={handleDateClick}
        eventClick={handleEventClick}
        eventsSet={(events) => setCurrentEvents(events)}
        initialEvents={[
          {
            id: "12315",
            title: "All-day event",
            date: "2023-12-14",
          },
          {
            id: "5123",
            title: "Timed event",
            date: "2023-11-28",
          },
        ]}
      />
    </CalendarCard>
  );
}

export default CalendarWidget;

const CalendarCard = styled(Card)`
  box-shadow: 0 3px 8px rgba(44, 130, 143, 0.2);
`;
