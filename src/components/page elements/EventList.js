import * as React from 'react';
import axios from 'axios';
//Might be bugggy
// install and import axios later for rest api calls

// you may encounter function-based components and class-based components
// i prefer class, but both are valid
export class EventList extends React.Component {
    
    constructor(props){
        super(props);
        this.state= {
            type:"Event",
            eventName: "",
            skillLevel: "",
            ages: "",
            date: "",
            time: "",
            location: "",
            eventList:[]
        };
    };

    generateEvent(){
        axios.get('VMHOST:PORT/API/EVENTS BACKEND STUFF').then(
            response => { 
                // your API might not use .results: make sure the structure conforms to whatever you make
                // in backend
                let myEvent = response.data.results;
                console.log(myEvent);
                this.setState({EventList: myEvent});
            }
        )
    }
// all react components must have render
    render(){
        return (
            <div>
                {() => this.generateEventList()};
                <ul>
                {
                    this.state.eventList.map(eventList => <li>{eventList.eventName}</li>)
                }
                </ul>
            </div>
        )
    }

}