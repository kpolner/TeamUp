import * as React from 'react';
import axios from 'axios';
import numEvents from './numEvents';
//Might be buggy
export class PostEventButton extends React.Component {
CreateEventButton(){
        numEvents = numEvents+1;
}
render() {
    return (
<div class="btn" onClick={()=>this.CreateEventButton()}><a href="/discover">Post Event</a></div>
    )    
}
}