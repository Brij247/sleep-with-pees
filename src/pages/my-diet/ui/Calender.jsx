import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Modal } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";

import { AddActivity } from "./AddActivity";

const { confirm } = Modal;

export const Calender = () => {
  const [currentEvents, setCurrentEvents] = useState([]);
  const [addDayTask, setAddDayTask] = useState(false);
  console.log(currentEvents);

  const handleDateClick = (selected) => {
    setAddDayTask(true);
    // const title = prompt("Please enter a new title for your event");
    // const calendarApi = selected.view.calendar;
    // calendarApi.unselect();

    // if (title) {
    //   calendarApi.addEvent({
    //     id: `${selected.dateStr}-${title}`,
    //     title,
    //     start: selected.startStr,
    //     end: selected.endStr,
    //     allDay: selected.allDay,
    //   });
    // }
  };

  const handleEventClick = (selected) => {
    confirm({
      title: `Are you sure you want to delete the event '${selected.event.title}'`,
      icon: <ExclamationCircleFilled />,
      onOk() {
        selected.event.remove();
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const hideModal = () => {
    setAddDayTask(false);
  };

  return (
    <>
      <FullCalendar
        height="85vh"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
        }}
        initialView="dayGridMonth"
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
      <Modal
        title="Add activity"
        open={addDayTask}
        onCancel={hideModal}
        footer={null}
      >
        <AddActivity />
      </Modal>
    </>
  );
};
