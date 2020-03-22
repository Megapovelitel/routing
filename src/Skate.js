import React, {useState, useEffect} from 'react'
import './App.css'
import Anime from './Anime'
import {Link} from 'react-router-dom'

function Skate () {
    useEffect(() => {
        getItems();
    },[]);

    const counter = 0;

    const[items, setItems] = useState([]);


    const getItems = async () => {
        const response = await fetch('https://api.jikan.moe/v3/anime/1/pictures');
        
        const data = await response.json();
        setItems(data.pictures);
        console.log(data.pictures);
        
    };

    
   


    return (
        <div className=''>
            
            <div className='anime'>
            {items.map((item, i) =>  (
               <Link to={`/skate/${i}`}> <Anime 
                key={i}
                
                 large={item.large}
                /></Link>
            ))}
                
            </div>

        </div>
                    
    );
}



export default Skate;