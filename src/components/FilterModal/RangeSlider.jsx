
import MultiRangeSlider from "multi-range-slider-react";
import  './rangeSlider.css'

// eslint-disable-next-line react/prop-types
const RangeSlider = ({rangMinValue, setRangMinValue, rangeMaxValue, setRangeMaxValue}) => {

const handleInput = (e) => {
	setRangMinValue(e.minValue);
	setRangeMaxValue(e.maxValue);
};
    return (
        <MultiRangeSlider className="cursor-pointer"
			min={30}
			max={1000}
			step={5}
            preventWheel={false}
			minValue={rangMinValue}
			maxValue={rangeMaxValue}
			onInput={(e) => {
				handleInput(e);
			}}
		/>
    );
};

export default RangeSlider;