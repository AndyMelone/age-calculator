import Input from "./components/Input";
import { InlineIcon } from "@iconify/react";
import Period from "./components/Period";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  const [errorDay, setErrorDay] = useState(false);
  const [errorMonth, setErrorMonth] = useState(false);
  const [errorYear, setErrorYear] = useState(false);

  let isError = false;

  const handlesubmite = (e) => {
    e.preventDefault();

    setErrorDay(false);
    setErrorMonth(false);
    setErrorYear(false);

    // date actuelle
    let currentDay = new Date().getUTCDate();
    let currentMonth = new Date().getUTCMonth() + 1;
    let currentYear = new Date().getUTCFullYear();

    // date de naissance
    const formData = new FormData(e.currentTarget);
    let oldDay = formData.get("day");
    let oldMonth = formData.get("month");
    let oldYear = formData.get("year");

    // intervalle du jour
    if (oldDay > 31 || oldDay < 1) {
      setErrorDay(true);
      isError = true;
    }
    // intervalle du mois
    if (oldMonth > 12 || oldMonth < 1) {
      isError = true;
      setErrorMonth(true);
    }

    // intervalle de l'année
    if (
      oldYear < 1 ||
      oldDay > new Date().getFullYear() ||
      oldYear > currentYear
    ) {
      isError = true;
      setErrorYear(true);
    }

    // validation
    if (isError === false) {
      //  calcul des jours, mois et années
      if (currentDay < oldDay) {
        if (currentMonth < oldMonth) {
          (currentYear = currentYear - 1),
            (currentMonth = currentMonth + 11),
            (currentDay = currentDay + 30);
        } else
          (currentMonth = currentMonth - 1), (currentDay = currentDay + 30);
      } else {
        if (currentMonth < oldMonth) {
          (currentYear = currentYear - 1), (currentMonth = currentMonth + 12);
        } else {
          currentDay = currentDay + 0;
          currentMonth = currentMonth + 0;
        }
      }

      let numberOfYear = currentYear - oldYear;
      let numberOfMonth = currentMonth - oldMonth;
      let numberOfDay = currentDay - oldDay;

      if (numberOfYear === 0) {
        numberOfYear = "0";
      }
      if (numberOfMonth === 0) {
        numberOfMonth = "0";
      }
      if (numberOfDay === 0) {
        numberOfDay = "0";
      }

      setDay(numberOfDay);
      setMonth(numberOfMonth);
      setYear(numberOfYear);

      // toast notification
      if ((numberOfDay == 0) & (numberOfMonth == 0) & (numberOfYear != 0)) {
        toast.success(`Happy birthday, you are ${numberOfYear} old 🥳🎊`);
      } else {
        toast.success(
          `Congratulation you are ${numberOfYear} year ${numberOfMonth} month ${numberOfDay} day`
        );
      }
    } else {
      toast.error("une erreur est survenue");
    }
  };

  useEffect(() => {
    toast("welcom to age calculator app");
  }, []);
  return (
    <div className="container">
      <Toaster />

      <div className="content">
        <form onSubmit={handlesubmite} id="form">
          <Input
            placeholder="DD"
            label="DAY"
            name="day"
            errorInput={errorDay}
          />
          <Input
            placeholder="MM"
            label="MONTH"
            name="month"
            errorInput={errorMonth}
          />
          <Input
            placeholder="YYYY"
            label="YEAR"
            name="year"
            errorInput={errorYear}
          />
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
