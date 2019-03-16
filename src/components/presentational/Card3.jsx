import React from 'react';

const Card3 = props => { 
    const { flight_number, gate, seat, boarding } = props.data.detail;
    const boardingTimeStamp = new Date(boarding * 1000);
    const horusBoarding = boardingTimeStamp.getHours();
    const minutesBoarding = boardingTimeStamp.getMinutes();
    const boardingTime = `${horusBoarding}:${minutesBoarding}`;
    const { departure } = props.data;
    const departureTimeStamp = new Date(departure * 1000);
    const hoursDeparture = departureTimeStamp.getHours();
    const minutesDeparture = departureTimeStamp.getMinutes();
    const departureTime = `${hoursDeparture}:${minutesDeparture}`;
    const originValue = props.data.origin.value;
    const destinationValue = props.data.destination.value;
    const {active} = props;
    return (
        <React.Fragment>
            <div className="departureTime">{departureTime}</div>
            <div className={`card card3 ${active ? 'active' : ''}`}>
                <div className="flex header">
                    <div>{flight_number}</div>
                    <div>Boarding {boardingTime}</div>
                </div>
                <div className="flex middle">
                    <div>{originValue}</div> 
                    <div>{destinationValue}</div>
                </div>
                <div className="flex footer">
                    <div>Gate {gate}</div>
                    <div>Seat {seat}</div>
                    <div className="on-time">On time</div>
                </div>
            </div>
        </React.Fragment>
    );
};
 
export default Card3;