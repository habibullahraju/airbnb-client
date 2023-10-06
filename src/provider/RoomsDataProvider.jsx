import { createContext, useEffect, useState } from "react";


export const ROOMS_CONTEXTS = createContext(null)

// eslint-disable-next-line react/prop-types
const RoomsDataProvider = ({children}) => {
    const [allRooms, setAllRooms] = useState(null)
    const [displayBeforeTexes, setDisplayBeforeTexes] = useState(null)

    useEffect(()=>{
        fetch("https://airbnb-server-n4nb0szc1-habibullahraju.vercel.app/all-rooms")
        .then(res => res.json())
        .then(data => setAllRooms(data))
    },[])

    const roomsInfo = {
        allRooms,
        setAllRooms,
        displayBeforeTexes,
        setDisplayBeforeTexes
    }
    return (
        <ROOMS_CONTEXTS.Provider value={roomsInfo}>
            {children}
        </ROOMS_CONTEXTS.Provider>
    );
};

export default RoomsDataProvider;