import { createContext, useEffect, useState } from "react";


export const ROOMS_CONTEXTS = createContext(null)

// eslint-disable-next-line react/prop-types
const RoomsDataProvider = ({children}) => {
    const [allRooms, setAllRooms] = useState(null)
    const [reFetch, setReFetch] = useState(null)
    const [displayBeforeTexes, setDisplayBeforeTexes] = useState(null)
    const [openDetailNav, setOpenDetailNav] = useState(false)

    useEffect(()=>{
        fetch("https://airbnb-server-dn4czmnee-habibullahraju.vercel.app/all-rooms")
        .then(res => res.json())
        .then(data => setAllRooms(data))
    },[reFetch])

    const roomsInfo = {
        allRooms,
        setAllRooms,
        displayBeforeTexes,
        setDisplayBeforeTexes,
        setReFetch,
        openDetailNav,
        setOpenDetailNav
    }
    return (
        <ROOMS_CONTEXTS.Provider value={roomsInfo}>
            {children}
        </ROOMS_CONTEXTS.Provider>
    );
};

export default RoomsDataProvider;