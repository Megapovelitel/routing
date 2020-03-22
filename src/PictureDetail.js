import React, {useState, useEffect} from 'react'
import './App.css'
import Anime from './Anime'
import {Link} from 'react-router-dom'
import Anime1 from './Anime1'
import Skate from './Skate'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function Item (match) {
    useEffect(() => {
        getItems();
        console.log(match.match.params.id);
    },[]);

    

    const[items, setItems] = useState([]);


    const getItems = async () => {
        const response = await fetch('https://api.jikan.moe/v3/anime/1/pictures');
        
        const data = await response.json();

        function functionGetItem(e, index) {
            if (index == match.match.params.id) {
             return e;
            }
            else {
                return console.log('nothing');
            }
        };
        setItems(data.pictures.find(functionGetItem));
        console.log(data.pictures.find(functionGetItem));
        
    };

    
   


    return (
    <Link to='/skate'>
        <div className='anime2'>
            
             <Route path='/skate' exact component={Skate}/>
            <div className='anime'>
           <Anime1 large={items.large}/>
            </div>
            
        </div>
        </Link>            
    );
}



export default Item;