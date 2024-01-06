import Input from "./components/Input";
import { InlineIcon } from "@iconify/react";
import Period from "./components/Period";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  // eslint-disable-next-line no-unused-vars
  let isError = false;
  const handlesubmite = (e) => {
    // toast("ok");
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    let currentDay = formData.get("day");
    let currentMonth = formData.get("month");
    let currentYear = formData.get("year");
    if (
      currentDay > 31 ||
      currentDay < 1 ||
      currentMonth > 12 ||
      currentMonth < 1 ||
      currentYear < 1 ||
      currentDay > new Date().getFullYear()
    ) {
      isError = true;
    } else {
      setDay(currentDay);
      setMonth(currentMonth);
      setYear(new Date().getFullYear() - currentYear);
    }

    // console.log(day, month, year);
    console.log(isError);
  };

  return (
    <div className="container">
      <Toaster />
      <div className="content">
        <form onSubmit={handlesubmite} id="form">
          <Input placeholder="DD" label="DAY" name="day" />
          <Input placeholder="MM" label="MONTH" name="month" />
          <Input placeholder="YYYY" label="YEAR" name="year" />
        </form>

        <div className="collpasediv">
          <div className="br"></div>
          <button type="submit" form="form">
            <InlineIcon
              icon="guidance:up-arrow"
              style={{
                color: "#FFFFFF",
                fontSize: 33,
              }}
              rotate={2}
            />
          </button>
        </div>
        <div className="#">
          <Period periodValue={year} period="years" />
          <Period periodValue={month} period="months" />
          <Period periodValue={day} period="days" />
        </div>
      </div>
    </div>
  );
}
