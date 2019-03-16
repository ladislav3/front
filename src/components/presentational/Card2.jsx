import React from 'react';

const Card2 = props => { 
    const { value, type } = props.data.origin;
    const { terminal, status } = props;
    const { departure } = props.data;
    const departureTimeStamp = new Date(departure * 1000);
    const hoursDeparture = departureTimeStamp.getHours();
    const minutesDeparture = departureTimeStamp.getMinutes();
    const departureTime = `${hoursDeparture}:${minutesDeparture}`;
    const {active} = props;
    return (
        <React.Fragment>
            <div className="departureTime">{departureTime}</div>
            <div className={`card ${active ? 'active' : ''}`}>
                <div className="center">
                    { value } { type }
                </div>
                <div className="flex">
                    <div>{ terminal } </div>
                    <div> { status }</div>
                </div>
            </div>
        </React.Fragment>
    );
};


export default Card2;