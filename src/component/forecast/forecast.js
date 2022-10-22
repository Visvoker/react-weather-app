import React from 'react'
import './forecast.css'
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";

const WEEK_DAY = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday',
    'Friday', 'Saturday', 'Sunday'
]

export default function Forecast({ data }) {
    const dayInWeek = new Date().getDay();
    const forecastDay = WEEK_DAY.slice(dayInWeek-1, WEEK_DAY.length).concat(WEEK_DAY.slice(0, dayInWeek-1))
    // const forecastDay = WEEK_DAY.slice(6-1, 7).concat(WEEK_DAY.slice(0, 6-1))
    // console.log(forecastDay)

    let a = data.list
    let b = []
    function date(){
        for(let i=0 ; i<a.length ;i+=8){
            b.push(a[i])
        }
    }
    date()

    return (
        <>
            <label className='title'>Daily</label>
            <Accordion allowZeroExpanded>
                {/* {data.list.slice(0,7).map((item, index) => ( */}
                {b.map((item, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className='daily-item'>
                                    <img
                                        className='icon-small'
                                        alt="weather"
                                        src={`icons/${item.weather[0].icon}.png`}
                                    />
                                    <label className='day'>{forecastDay[index]}</label>
                                    <label className='description'>{item.weather[0].description}</label>
                                    <label className='min-max'>
                                        {Math.round(item.main.temp_min)}℃ / {Math.round(item.main.temp_max)}℃
                                    </label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className='daily-detail-grid'>
                                <div className='daily-detail-grid-item'>
                                    <label>Pressure</label>
                                    <label>{item.main.pressure} hpa</label>
                                </div>
                                <div className='daily-detail-grid-item'>
                                    <label>humidity</label>
                                    <label>{item.main.humidity} %</label>
                                </div>
                                <div className='daily-detail-grid-item'>
                                    <label>Clouds</label>
                                    <label>{item.clouds.all} %</label>
                                </div>
                                <div className='daily-detail-grid-item'>
                                    <label>wind speed</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className='daily-detail-grid-item'>
                                    <label>sea level</label>
                                    <label>{item.main.sea_level} m</label>
                                </div>
                                <div className='daily-detail-grid-item'>
                                    <label>Feels like:</label>
                                    <label>{item.main.feels_like} ℃</label>
                                </div>
                                <div className='daily-detail-grid-item'>
                                    <label>date</label>
                                    <label>{item.dt_txt}</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )
}