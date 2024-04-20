"use client";

import BigCard from "@/components/BigCard";
import "./style.css";

import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Event } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";

const Calendar = () => {
  const [data, setData] = useState<Event[] | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/event")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="h-full max-w-[800px] mx-auto my-8">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar className="bg-stone-200 rounded-lg mb-8 w-full" />
      </LocalizationProvider>
      {data?.map((event) => (
        <>
          <h2>{(new Date(event.eventDate)).toDateString()}</h2>
          <BigCard
            data={event}
            isShowLike={false}
            isShowPaticipants={false}
            isShowTags
            isShowActer={false}
          />
        </>
      ))}
      <div className="flex flex-col items-center gap-4 w-full"></div>
    </div>
  );
};

export default Calendar;
