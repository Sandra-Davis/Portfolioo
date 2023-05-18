import React, { useEffect, useState } from 'react'
import {projectsData} from './Data.jsx'
import {projectsNav} from './Data.jsx'

const Works = () => {

    const [item,setItem]=useState({name:'All'});
    const [projects,setProjects]=useState([]);
    const [active,setActive]=useState(0);

    useEffect(()=>{
        if(item.name==='All')
        {
            setProjects(projectsData);
        }
        else
        {
            const newProjects=projectsData.filter((project)=>
            {
                return project.category===item.name;
            });
            setProjects(newProjects);
        }
    },[item]);

    const handleClick=(e,index)=>
    {
        setItem({name:e.target.textContent});
        setActive(index);
    };

  return (
    <div>
    <div className="work__filters">
        {projectsNav.map((item,index)=>{
            return(
                <span onClick={(e)=>{handleClick(e,index);}} className={active===index?'active-work work__item':"work__item" } key={index}>{item.name}</span>
            )
        })}
    </div>
    <div className="work__container container grid">
        {projects.map((item)=>{
            return (
                
            <div className='work__card' key={item.id} >
                <img src={item.image} alt='' className='work__img'/>
                <h3 className="work__title">{item.title}</h3>
                <a href={item.link} className="work__button">
                    Github link <i className='bx bx-right-arrow-alt work__button-icon' ></i>
                </a>
            </div>
            );
        })

        }
    </div>
    </div>
  )
}

export default Works