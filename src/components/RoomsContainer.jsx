import React,{useContext} from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { RoomContext } from "../context/RoomProvider";
const RoomsContainer = () => {
    const {sortedRooms,rooms}=useContext(RoomContext)
  return <div>
  
  <RoomsFilter rooms={rooms}/>
  <RoomsList rooms={sortedRooms}/>
  </div>;
};

export default RoomsContainer;
