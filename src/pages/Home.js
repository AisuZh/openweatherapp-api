import React, { useState, useEffect } from 'react'
import axios from "axios"


const Home = () => {
const [weather, setWeather] = useState({})

    const getData = async () => {
    const {data} = await axios ("https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c")
    setWeather(data)

    }
    getData()



    return ( 

        <div className='home'>
            <div className='container'>
                <div className='top'>
                    <div className='location'>
                        <p>bishkek</p>
                    </div>
                    <div className='temp'>
                        <h1>-5°C</h1>
                    </div>
                    <div className='descr'>
                        <p>Clouds</p>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='feels'>
                        <p>Feels like</p>
                        <p>-1°C</p>
                    </div>
                    <div className='humidity'>
                        <p>Humidity</p>
                        <p>40%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home