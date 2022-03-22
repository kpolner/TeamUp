//deletes events
//change to VM
import numEvents from "./numEvents";
import axios from "axios";
import React from "react";
export class DeleteEventButton extends React.Component {
DeleteEventButton(){
    if(numEvents > 0){
        numEvents = numEvents-1;
        axios.delete('localhost:9000/EventController/{{name}}').then(
                response => { 
                    alert("Event Deleted!")
                }
            )
        }
    }
render() {
    return (
<button class="btn" onClick={()=>this.DeleteEventButton()}>Delete Event</button>
    )    
}
}