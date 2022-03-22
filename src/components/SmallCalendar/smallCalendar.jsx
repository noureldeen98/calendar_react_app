import DatePicker from 'sassy-datepicker';


function SmallCalendar() {
  const onChange = (date) => {
    console.log(date.toString());
  };

  return (
    <DatePicker onChange={onChange} className="container"  style={{marginTop:70}}   />
  );
}

export default SmallCalendar;