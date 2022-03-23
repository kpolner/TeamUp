//specifically for update page with update/delete mappings
//returns what events are created by the user
import axios from "axios";
import React from "react";
import { UpdateFormButton } from "./UpdateFormButton";
import { useContext } from "react";
import { eventContext, loginContext, eventNumberContext } from "../../App";
import { useEffect } from "react";
export default function UserEventList() {
    const [eventList, setEventList] = useContext(eventContext)
    const [currentEventNumber, setEventNumber] = useContext(eventNumberContext)
    const [currentUser] = useContext(loginContext);

    function DeleteEventButton(){
        if(currentEventNumber > 0){
            let url = '20.40.202.9:9000/EventController/Event'+ this.eventName; 
            axios.delete(url).then(
                    response => { 
                        alert("Event Deleted!")
                        setEventNumber(currentEventNumber-1);
                    }
                )
            }
        }
    function generateUserEvents(){
        axios.get('20.40.202.9:9000/UserController/Username/', currentUser).then(
            response => { 
                let userEvents = response.data;
                setEventList(userEvents);
                // your API might not use .results: make sure the structure conforms to whatever you make
                // in backend
               /* let myEvent = response.data.results;
                console.log(myEvent);
                this.setState({EventList: myEvent}); */
            }
        )
    }
        return (
            <div>
                { useEffect(() => {generateUserEvents();}, [])}
                {/*() => generateEvent() */};
                <ul class="eventwrapper">
                {
                    eventList.map(() => <li><div class = "eventlisting">
                        <ul class="eventinfo">
                        <li>Event: {'name'}</li>
                        <li>Host: {'username'}</li>
                        <li>Sport: {'sport'}</li>
                        <li>Skill level: {'level'}</li>
                        <li>Date: {'date'}</li>
                        <li>Time: {'time'}</li>
                        <li>Location: {'place'}</li>
                        </ul>
                        <ul class="modifyeventbuttons">
                        <li><UpdateFormButton /></li>
                        <li><button class="btn" onClick={DeleteEventButton()}>Delete Event</button></li>    
                        </ul>
                        <img class="event-image" alt="A bunch of sports balls." src = "https://www.google.com/search?q=sports&sxsrf=APq-WBvMTx9goHZzsbpdu7xwm2O01jTyIw:1647821729558&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjXqN-m9tX2AhUQh-AKHVPZCdkQ_AUoAnoECAIQBA&biw=1920&bih=937&dpr=1#imgrc=T-ncBKvTcH1JQM" />
                        </div> </li>)
                }
                </ul>
            </div>
        )
    }
//fix generate user css and formatting