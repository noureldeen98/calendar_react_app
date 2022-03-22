import { Calendar , dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css"

import enUS from 'date-fns/locale/en-US'

import React , {useState} from 'react'

import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'

import './calendarStyle.css'
import globalize from "globalize";
import localizer from 'react-big-calendar/lib/localizers/globalize'
require('globalize/lib/cultures/globalize.culture.ar-AE')





let rtl ='ar-AE'
const globalizeLocalizer = localizer( globalize)



// const locales = {
//     "arEG" :require("date-fns/locale/ar-EG")
//     "ar-AE" :
      
//     // "en-Us":enUS
// }



// const localizer = dateFnsLocalizer(
//   { format,
//     parse,
//     startOfWeek,
//     getDay,
//     locales}
// )




const events =[
    {
        title: "Meeting",
        allDay:true,
        start: new Date (2022 , 2, 15),
        end: new Date(2022 , 2, 16),
        backgroundEvents:"red"
    },

    {
        title: "Mothers Day Vacation",
        start: new Date(2022 , 2 , 21),
        end: new Date(2022 , 2 , 21),
        
    }
]




const CalendarComp=props=>{

    const [newEvent , setNewEvent] =  useState({title:" " , start:" " , end:" "});
    const [allEvents , setAllEvents]= useState(events)
    


    return(
        <>
        <h2 style={{color:"#180889", marginTop:10}}>التقويم</h2>
       
       <div>
       <Calendar  localizer={globalizeLocalizer}
       rtl={rtl}
       culture= 'ar-AE'
      events={allEvents}
      startAccessor="start"
      endAccessor="end"
      messages={{
        next: "التالى",
        previous: "السابق",
        today: "اليوم",
        month: "الشهر",
        week: "االاسبوع",
        day: "اليوم"
      }}
      eventPropGetter={(event, start, end, isSelected) => ({
        event,
        start,
        end,
        isSelected,
        style: { backgroundColor: "green" }
      })}


      defaultView='month'
      
      style={{ height: 500 , margin:"50px" , width:800 }}/>
        </div>

        </>
    )
}

export default CalendarComp;