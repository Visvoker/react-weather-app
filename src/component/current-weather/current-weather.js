import React from 'react';
import './current-weather.css'

export default function CurrentWeather({ data }) {
    return (
        <div className='weather'>
            <div className='top'>
                <div>
                    <p className='city'>{data.city}</p>
                    <p className='weather-description'>{data.weather[0].description}</p>
                </div>
                <img
                    className='weather-icon'
                    alt='weather'
                    src={`icons/${data.weather[0].icon}.png`}
                />
            </div>
            <div className='bottom'>
                <p className='temperature'>{data.main.temp}℃</p>
                <div className='detail'>
                    <div className='parameter-row'>
                        <span className='parameter-label-detail'>Detail</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Feels like</span>
                        <span className='parameter-value'>{data.main.feels_like}℃</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Wind</span>
                        <span className='parameter-value'>{data.wind.speed}m/s</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>humidity</span>
                        <span className='parameter-value'>{data.main.humidity}%</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Pressure</span>
                        <span className='parameter-value'>{data.main.pressure} hpa</span>
                    </div>
                </div>
            </div>
        </div>
    )
}