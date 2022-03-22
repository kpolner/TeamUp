import * as React from 'react';
import axios from 'axios';
//ADD SPECIFIC ID FUNCTIONALITY TO BUTTON THAT LEADS HERE
//Updates events via patch mappings
//change to vm host
export class ConfirmUpdateButton extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            type:"Event",
            name: "",
            sport: "",
            date: "",
            place: "",
            time: "",
            level: ""
        };
    };
    updateEvent() {
        this.state =
        {
            name: document.getElementById("posteventnamefield").value,
            sport: document.getElementById("postsportfield").value,
            date: document.getElementById("postdatefield").value,
            place: document.getElementById("postlocationfield").value,
            time: document.getElementById("posttimefield").value,
            level: document.getElementById("postskilllevelfield").value
        };
        axios.put("localhost:9000/EventController", this);
        console.log(this);
        alert("Event updated!");
    }
    render() {
    return (
<div class="btn" onClick={() => this.updateEvent()}>Update Event</div>
    )    
}
}