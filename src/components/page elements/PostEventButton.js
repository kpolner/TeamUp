import * as React from 'react';
import axios from 'axios';
import numEvents from './numEvents';
import GlobalLogin from './GlobalLogin';
//Check axios 
//Posts a new event in the event table
//change to vm host
export class PostEventButton extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            type:"Event",
            name: "",
            sport: "",
            date: "",
            place: "",
            time: "",
            level: "",
            username: GlobalLogin.state 
        };
    };
    postEvent() {
        this.state =
        {
            name: document.getElementById("posteventnamefield").value,
            sport: document.getElementById("postsportfield").value,
            date: document.getElementById("postdatefield").value,
            place: document.getElementById("postlocationfield").value,
            time: document.getElementById("posttimefield").value,
            level: document.getElementById("postskilllevelfield").value,
            username: GlobalLogin.state
        };
        console.log(this);
        axios.post("localhost:9000/EventController", this);
        alert("Event posted!");
        numEvents = numEvents +1;
    }
    render() {
    return (
      <div class="btn" onClick={() => this.postEvent()}>Post Event</div>
    )    
}
}