import { useEffect, useState } from "react";
import Container from "../container/container";
import Card from "./Card";
import { useSearchParams } from "react-router-dom";



const Rooms = () => {
    const [rooms, setRooms]= useState([]);
    const [params , setParams] = useSearchParams()
    const categoryValue = params.get('category')
    console.log(categoryValue);
    useEffect(()=>{
        fetch('rooms.json',)
      .then(res=>res.json())
      .then(data=>{
        if (categoryValue && categoryValue !== "All") {
            const filtered = data.filter(room=> room.category === categoryValue);
            setRooms(filtered);
        }
        else{
            setRooms(data)
        }
    })  
    },[categoryValue])
    return (
        <Container>
            <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 xl:grid-cols-5">
            {
                rooms.map((room,index)=>(
                    <Card key={index} room={room}></Card>
                ))
            }
            </div>
        </Container>
    );
};

export default Rooms;