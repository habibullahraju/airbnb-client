/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react'
import HeartButton from '../button/HeartButton'
import { ROOMS_CONTEXTS } from '../../provider/RoomsDataProvider'

const Card = ({room}) => {
  const {displayBeforeTexes} = useContext(ROOMS_CONTEXTS)
  const [differenceInDays, setDifferenceInDays] = useState(null);
  useEffect(() => {
    calculateDateDifference();
  }, [room]);

  const calculateDateDifference = () => {
    const [startDateStr, endDateStr] = room?.dateRange.split(' - ');

    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);

    // Calculate the difference in milliseconds
    const differenceInMilliseconds = endDate - startDate;

    // Convert milliseconds to days (1 day = 24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
    const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

    setDifferenceInDays(differenceInDays);
  };
  
  return (
    <div className='col-span-1 cursor-pointer group'>
      <div className='flex flex-col gap-2 w-full'>
        <div
          className='
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          '
        >
          <img
            className='
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            '
            src={room?.image}
            alt='Room'
          />
          <div
            className='
            absolute
            top-3
            right-3
          '
          >
            <HeartButton />
          </div>
        </div>
        <div className='font-semibold text-lg'>{room?.location}</div>
        <div className='font-light text-neutral-500'>
          {room?.dateRange}
        </div>
        <div className='flex flex-row items-center gap-1'>
          {displayBeforeTexes?<div className='font-semibold'> $ {room?.price * differenceInDays}</div>: <div className='font-semibold'> $ {room?.price } </div> }
          
          
          {displayBeforeTexes? <div className='font-light'>total before taxes</div> :<div className='font-light'>night</div>}
        </div>
      </div>
    </div>
  )
}

export default Card