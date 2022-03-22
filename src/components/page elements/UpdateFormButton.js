import * as React from 'react';
//Links to update form for a specific event
//axios get event id
export class UpdateFormButton extends React.Component {
    render(){
    return (
        <span>
                {
                    <button class="btn" id="update-button"><a href="/updateEvent">Update Event</a></button>
                }
          </span>
          )    
    }
}