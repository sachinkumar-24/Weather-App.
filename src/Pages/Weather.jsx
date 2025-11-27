import React, { useState } from 'react'
import WeatherCard from './WeatherCard';

const Weather = () => {
    const [city,setCity]=useState("")
    const [data,setData]=useState("")

    const fetchWeather=async()=>{
        if (!city.trim()) return;

        try{
            const res =await fetch (`https://wttr.in/${city}?format=j1`)
            console.log(res);
            const data =await res.json()
            console.log(data);
            setData(data)
        }
        catch(error)
        {
            console.error("ERROR  WHILE FETCHING WEATHER",error);
        }
    };
  return (
    <div className='app' style={{border:"none", width:"300px",height:"350px",padding:"20px",borderRadius:"15px",backgroundColor:"aqua", marginLeft:"40%",marginTop:"12%" }}>
        <h1> 🌤️Weather app</h1>
        <div className='search'>
            <input style={{padding:"10px" ,borderRadius:"8px"}} type="text" placeholder='Enter City..' value={city} onChange={(e)=>setCity(e.target.value)} />
            <button style={{marginLeft:'10px', backgroundColor:"yellow",fontWeight:"bold",padding:"10px",borderRadius:"8px" ,border:"none"}} onClick={fetchWeather}>Serch</button>

        </div>
      {data && <WeatherCard city={city} data={data}/>}
           

        
    </div>
  )
}

export default Weather
