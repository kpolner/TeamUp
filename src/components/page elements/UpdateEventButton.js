import * as React from 'react';
import axios from 'axios';
import numEvents from './numEvents';
//Might be buggy
// link to update events appears when there's more than 1 event
export class UpdateEventButton extends React.Component {
    render(){
    return (
        <span>
                {
                    numEvents >0 &&
                    <button class="btn" id="update-button"><a href="/update">Update Event</a></button>
                }
          </span>
          )    
    }
}