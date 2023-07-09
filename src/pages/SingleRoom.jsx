import React, { useContext } from "react";
import { RoomContext } from "../context/RoomProvider";
import StyledHero from "../components/StyledHero";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link, useParams } from "react-router-dom";
const SingleRoom = () => {
  const { getRoom } = useContext(RoomContext);
  const { slug } = useParams();
  const room = getRoom(slug);
  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;
  if (!room) {
    return (
      <div className="error">
        <h3>No such room exists</h3>
        <Link to="/rooms" className="btn-primary">
          Back to room
        </Link>
      </div>
    );
  } else {
    return (
      <>
        <StyledHero img={images[0]}>
          <Banner title={`${name}`}>
            <Link to="/rooms" className="btn-primary">
              Back to room
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {images.map((item,index)=>{
              return <img key={index} src={item}/>
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6>Price: ${price}</h6>
              <h6>size: {size} SQFT</h6>
              <h6>max capacity: {capacity}  {capacity>1?'people':'person'}</h6>
              <h6>{pets?'Pets Allowed':'Perst not allowed'}</h6>
              <h6>{breakfast && 'Free breakfast'}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item,index)=>{
              return <li key={index}>- {item}</li>
            })}
          </ul>
        </section>
      </>
    );
  }
};

export default SingleRoom;
