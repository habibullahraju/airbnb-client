import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


const DatePicker = ({date, setDate, setDateChanged}) => {
return (
      <DateRange
        editableDateInputs={true}
        onChange={item => {
          setDate([item.selection])
          setDateChanged(true)
        }}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={date}
        direction="horizontal"
      />
  );
};

export default DatePicker;