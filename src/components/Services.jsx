import React,{useState} from 'react'
import {FaCocktail, FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
import Title from './Title'
const Services = () => {
  const [services,setServices]=useState([
    {
      icon:<FaCocktail/>,
      title:"Free Cocktails",
      info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, repudiandae? Error cupiditate provident doloremque commodi."
    },
    {
      icon:<FaHiking/>,
      title:"Endless Hiking",
      info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, repudiandae? Error cupiditate provident doloremque commodi."
    },
    {
      icon:<FaShuttleVan/>,
      title:"Free Transport",
      info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, repudiandae? Error cupiditate provident doloremque commodi."
    },
    {
      icon:<FaBeer/>,
      title:"Variety of Drinks",
      info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, repudiandae? Error cupiditate provident doloremque commodi."
    },
  ])
  return (
    
    <section className='services'>
      <Title title='Services'/>
      <div className="services-center">
        {services.map((item,index)=>{
          return <article key={index} className='service'>
          <span>{item.icon}</span>
          <h6>{item.title}</h6>
          <p>{item.info}</p>

          </article>
        })}
      </div>
    </section>
  )
}

export default Services