import * as React from 'react';
import axios from 'axios';
import numEvents from './numEvents';
//Might be buggy
export class UpdateEventButton extends React.Component {
render(){
    return (
        <div>
                {
                    numEvents >0 &&
                    <button class="btn" id="update-button"><a href="/update">Update Event</a></button>
                }
        </div>
          )    
    }
}