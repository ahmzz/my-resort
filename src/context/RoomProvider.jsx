import React,{useState,useEffect} from 'react'
import data from '../data.js'
const RoomContext=React.createContext(null)

const RoomProvider = (props) => {

  const [resortData,setResortData]=useState({
    rooms:[],
    sortedRooms:[],
    featuredRooms:[],
    loading:true
  })

  const mountComponent=()=>{
    let rooms=formData(data)
    let featuredRooms=rooms.filter(room=>room.featured)
    setResortData({
      rooms,
      featuredRooms,
      sortedRooms:rooms,
      loading:false
    })
  }

  const formData=(items)=>{
    let tempItem=items.map(item=>{
      let id=item.id
      let images=item.fields.images.map(image=>image.fields.file.url)

      const room={...item.fields,id,images}
      return room
    })
    return tempItem
  }

  const getRoom=(slug)=>{
    let tempRooms=[...resortData.rooms]
    
    const room = tempRooms.find(room=>room.slug===slug)
    return room
  }


  useEffect(()=>{
    mountComponent()
  },[])
  

  return (
    <RoomContext.Provider value={{...resortData, getRoom:getRoom}}>
        {props.children}
    </RoomContext.Provider>
  )
}

const RoomConsumer=RoomContext.Consumer

export  {RoomProvider, RoomContext,RoomConsumer}