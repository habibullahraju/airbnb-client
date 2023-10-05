
import { useContext } from 'react';
import { ROOMS_CONTEXTS } from '../provider/RoomsDataProvider';

const useGetAvarage = () => {
    const {allRooms} = useContext(ROOMS_CONTEXTS)

    const getAvarage = (type) => {
        let allTypes ;
        if (type =='All types') {
            allTypes = allRooms;
        }
        else if (type == "Rooms") {
            allTypes = allRooms?.filter((room)=> room.category == type); 
        }
        else{
            allTypes = allRooms?.filter((room)=> room.propertyType == type);
        }

        const totalPrice = allTypes?.reduce((accumulator, currentValue) => currentValue.price + accumulator, 0);
        const averagePrice = totalPrice / allTypes?.length;
        return averagePrice;
    }

    const alltypesAvarage = parseInt(getAvarage("All types"));
    const roomsTypesAvarage = parseInt(getAvarage("Rooms"));
    const homeTypesAvarage = parseInt(getAvarage("Home"));
    
    return [  alltypesAvarage, roomsTypesAvarage, homeTypesAvarage] ;
};

export default useGetAvarage;