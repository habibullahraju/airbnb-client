import { useContext, useEffect } from "react";
import Container from "../container/container";
import Card from "./Card";
import { useSearchParams } from "react-router-dom";
import { ROOMS_CONTEXTS } from "../../provider/RoomsDataProvider";
import Loader from "../Loader/Loader";



const Rooms = () => {
    const {allRooms, setAllRooms} = useContext(ROOMS_CONTEXTS)
    
    // eslint-disable-next-line no-unused-vars
    const [params , setParams] = useSearchParams()
    const categoryValue = params.get('category')
    useEffect(()=>{
        fetch("https://airbnb-server-n4nb0szc1-habibullahraju.vercel.app/all-rooms")
        .then(res => res.json())
        .then(data => {
            if (categoryValue && categoryValue !== "All") {
                const filtered = data?.filter(room=> room.category === categoryValue);
                setAllRooms(filtered);
            }
            else{
                setAllRooms(data);
            }
        })
        
        
     
    },[categoryValue,])
    return (
        <Container>

            {allRooms? <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 xl:grid-cols-5">
            {
                allRooms?.map((room,index)=>(
                    <Card key={index} room={room}></Card>
                ))
            }
            </div>: <Loader></Loader>}
            
        </Container>
    );
};

export default Rooms;