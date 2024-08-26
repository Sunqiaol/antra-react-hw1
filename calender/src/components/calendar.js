import React, { useEffect, useState } from "react"

export default function Calendar() {


    const [currentDate, setCurrentDate] = useState(new Date());
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    const getdays = () => {
        const days = []
        const totalDays = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
        for (let i = 1; i <= totalDays; i++) {
            days.push(i)
        }

        return days
    }

    const getemptydays = () => {
        const days = []
        const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

        for (let i = 1; i <= firstDayOfMonth; i++) {
            days.push(i)
        }

        return days
    }

    const handlePrevMon = () => {
        const previousMonthDate = new Date(currentDate);
        if (currentDate.getMonth() == 0) {
            previousMonthDate.setMonth(11);
            previousMonthDate.setFullYear(currentDate.getFullYear() - 1);
            setCurrentDate(previousMonthDate);
        }
        else {
            previousMonthDate.setMonth(currentDate.getMonth() - 1);
            setCurrentDate(previousMonthDate);
        }
    }

    const handleNextMon = () => {
        const previousMonthDate = new Date(currentDate);
        if (currentDate.getMonth() == 11) {
            previousMonthDate.setMonth(0);
            previousMonthDate.setFullYear(currentDate.getFullYear() + 1);
            setCurrentDate(previousMonthDate);
        }
        else {
            previousMonthDate.setMonth(currentDate.getMonth() + 1);
            setCurrentDate(previousMonthDate);
        }
    }

    const handleCell = (day) => {
        const NewDate = new Date(currentDate);
        NewDate.setDate(day);
        setCurrentDate(NewDate);
        console.log(day, days[currentDate.getDay()], month[currentDate.getMonth()], currentDate.getFullYear());
    }





    return (

        <div className="app">
            <div className="calendar_month_btn">
                <span onClick={handlePrevMon} className="prev_month_btn">
                    {"<  "}
                    {month[currentDate.getMonth() === 0 ? 11 : currentDate.getMonth() - 1]}
                </span>
                <span className="curMonth">{month[currentDate.getMonth()]}</span>
                <span onClick={handleNextMon} className="next_month_btn">

                    {month[currentDate.getMonth() === 11 ? 0 : currentDate.getMonth() + 1]}
                    {"  >"}
                </span>

                <span className="curYear">
                    FullYear {currentDate.getFullYear()}
                </span>
            </div>

            <div className="calendar_title">

                Calendar For {month[currentDate.getMonth()]} {currentDate.getFullYear()}  (United States)
            </div>

            <div className="calendar">
                <div className="calendar_month">
                    {month[currentDate.getMonth()]}
                </div>
                <div className="calendar_month_tag">
                    <span>
                        Sun
                    </span>
                    <span>
                        Mon
                    </span>
                    <span>
                        Tue
                    </span>
                    <span>
                        Wed
                    </span>
                    <span>
                        Thu
                    </span>
                    <span>
                        Fri
                    </span>
                    <span>
                        Sat
                    </span>
                </div>



                <div className="calendar_days">
                    {
                        getemptydays().map(day => {
                            return (
                                <span className="calendar_day"></span>
                            )
                        })
                    }
                    {
                        getdays().map(day => {
                            if (day === currentDate.getDate()) {
                                return (
                                    <span className="cur_day" onClick={() => handleCell(day)}>{day}</span>
                                )
                            }
                            else {
                                return (
                                    <span className="calendar_day" onClick={() => handleCell(day)}>{day}</span>
                                )
                            }

                        })
                    }
                </div>
            </div>
        </div>
    )
}



