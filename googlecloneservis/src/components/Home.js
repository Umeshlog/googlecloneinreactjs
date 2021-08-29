import React,{useState} from 'react';
import {FaMicrophone, FaSistrix} from 'react-icons/fa'

const Home = (props) => {
    const [state,setState]=useState("");
const searchGoogle=(e)=>{
props.history.push({pathname:"/Search" ,state});
}
    return (
        <div className="home">
            <div className="home__container">
                <div className="home__logo">
                    <img src="/images/google.png" alt="logo" />
                </div>
                <form className="home__form" onSubmit={searchGoogle}>
                   <input type="text" className="home__input" onChange={(e)=>setState(e.target.value)} value={state}/>
                   <div className="home__group">
                       <input type="submit" className="home__btn" value="Google Search" />
                   </div>
                   <FaSistrix className="search__icon"/>
                   <FaMicrophone className="microphone"/>
                </form>
            </div>
            
        </div>
    )
}

export default Home
