import * as React from 'react';
import axios from 'axios';
//Might be bugggy
// install and import axios later for rest api calls
//Grabs the list of events from the database
export class EventList extends React.Component {
    
    constructor(props){
        super(props);
        this.state= {
            type:"Event",
            eventName: "",
            sport: "",
            skillLevel: "",
            date: "",
            time: "",
            location: "",
            username: "",
            eventList:[]
        };
    };

    generateEvent(){
        axios.get('localhost:9000/EventController').then(
            response => { 
                // your API might not use .results: make sure the structure conforms to whatever you make
                // in backend
                let myEvent = response.data.results;
                console.log(myEvent);
                this.setState({EventList: myEvent});
            }
        )
    }
    render(){
        return (
            <div>
                {() => this.generateEvent()};
                <ul style="list-style-type:none" class="eventwrapper">
                {
                    this.state.eventList.map(eventList => <li><div class = "eventlisting">
                        <ul style="list-style-type:none" class="eventinfo">
                        <li>Event: {eventList.eventName}</li>
                        <li>Host: {eventList.username}</li>
                        <li>Sport: {eventList.sport}</li>
                        <li>Skill level: {eventList.skillLevel}</li>
                        <li>Date: {eventList.date}</li>
                        <li>Time: {eventList.time}</li>
                        <li>Location: {eventList.location}</li>
                        </ul>
                        <img class="event-image" src = "https://www.google.com/search?q=sports&sxsrf=APq-WBvMTx9goHZzsbpdu7xwm2O01jTyIw:1647821729558&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjXqN-m9tX2AhUQh-AKHVPZCdkQ_AUoAnoECAIQBA&biw=1920&bih=937&dpr=1#imgrc=T-ncBKvTcH1JQM" />
                        </div> </li>)
                }
                </ul>
            </div>
        )
    }

}