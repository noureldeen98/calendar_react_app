
import './App.css';
import NavbarComponent from '../src/components/NavbarComponents/navbarComponent'
import CalendarComp from '../src/components/CalendarDatePicker/calendar'
import TimePickerComponent from '../src/components/TimePickerComponent/timePickerComponent'
import SmallCalendar from './components/SmallCalendar/smallCalendar'


function App() {
  return (
    <>
    <div>
    <NavbarComponent/>
    <div className=' d-flex flex-column justify-content-center flex-md-row'>
      <div>
      <CalendarComp/>
      </div>
    <div>
    <SmallCalendar/>
    </div>
    
    </div>

    <TimePickerComponent/>
    </div>
    
    </>
  );
}

export default App;
