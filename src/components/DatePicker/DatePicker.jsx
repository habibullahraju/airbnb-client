import { DateRange } from 'react-date-range';

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