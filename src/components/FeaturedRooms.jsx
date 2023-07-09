import React, { useContext } from "react";
import { RoomContext } from "../context/RoomProvider";
import Room from "./Room";
import Title from "./Title";

const FeaturedRooms = () => {
  let {featuredRooms:rooms} = useContext(RoomContext);
  rooms=rooms.map(room=>{
    return <Room key={room.id} room={room}/>
  })
  return (
    <section className="featured-rooms">
    <Title title='Featured Rooms'/>
    <div className="featured-rooms-center">
      {rooms}
      </div>
    </section>
  )
};

export default FeaturedRooms;
