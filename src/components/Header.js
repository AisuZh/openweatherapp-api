
import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import axios from 'axios'


const Header = () => {


    const [location, setLocation] = useState('')

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

    const [data, setData] = useState({})

    const handleChange = (e) => {
        setLocation(e.target.value)
    }
 
    const handleSend = (e) => {
        if (e.key === "Enter") {
            axios.get(url).then((response) => {
                setData(response.data)
            })
            setLocation('')
        }
    }

    return (
        <div>
        <div className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__logo">
                        <NavLink to="/">
                            The Weather Channel
                        </NavLink>
                    </div>
                    <div className='header__search'>
                        <input type="text"
                            placeholder='Поиск по городу или индексу'
                            onKeyPress={handleSend}
                            value={location}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
        </div>
                <div className='home'>
                <div className='container'>
                    <div className='top'>
                        <div className='location'>
                            <p>{data.name}</p>
                        </div>
                        <div className='temp'>
                        {data.main ? <h1>{data.main.temp}°F</h1> : null}
                        </div>
                        <div className='descr'>
                        {data.weather ? <p>{data.weather[0].description}</p> : null}
                        </div>
                    </div>
                    <div className='bottom'>
                        <div className='feels'>
                            <p>Feels like</p>
                            {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
                        </div>
                        <div className='humidity'>
                            <p>Humidity</p>
                            {data.main ? <p className='bold'>{data.main.humidity}% </p> : null}
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default Header