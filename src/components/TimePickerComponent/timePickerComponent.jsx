import TimePicker from "react-time-picker/dist/TimePicker";

import { useState } from "react";

import { BiTrash } from 'react-icons/bi';


import { BsTrash } from 'react-icons/bs';


import './timepickerStyle.css'





const TimePickerComponent = () => {

  const [startTime, setStartTime] = useState();
  const [endtTime, setEndtTime] = useState();

  const resetAllInputs = () => {
     
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column  flex-md-row " style={{ textAlign: "center", color: "blue" }}>

        <form className="d-flex flex-column flex-md-row ">


          <lable  for="startTime" >من</lable>
          <input name="startTime"  type="time" id="startTime" className="startTime"  />
          

          <lable for="endTime" >الى</lable>
          <input name="endTime"   lang="ar" type="time" id="endTime" className="endTime"  />

          <lable for="session" >الجلسه</lable>
          <input name="session"  type="text" id="session" placeholder="عنوان المهمه" className="mission"  />

          <lable for="chairs">المقاعد</lable>
          <input name="chairs"  type="number" min="0" id="chairs" className="chairs"  />

          <lable for="NoOfusers" >عدد المستخدمين</lable>
          <input name=" NoOfusers"   type="text" min="0" id="NoOfusers" className="NoOfusers"  />


          <button type="reset" className="deleteButton">
             <BsTrash style={{color:"red"}}/> احذف
            </button> 

        </form>


      </div>



    </>
  )
}

export default TimePickerComponent;