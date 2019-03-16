import React from 'react';

const Card1 = props => { 
    const { value } = props.data.origin;
    const { departure } = props.data;
    const departureTimeStamp = new Date(departure * 1000);
    const hoursDeparture = departureTimeStamp.getHours();
    const minutesDeparture = departureTimeStamp.getMinutes();
    const departureTime = `${hoursDeparture}:${minutesDeparture}`;
    const {active} = props;
    return (
        <React.Fragment>
            <div className="departureTime">{departureTime}</div>
            <div className={`card center ${active ? 'active' : ''}`}>
                <div>Picked up from</div>
                <div>{ value }</div>
            </div>
        </React.Fragment>
    );
};


export default Card1;