//Discover page - it will lead to create and update. Main source of web API functionality
//buttons for create/update
//lists events
//search bar for events
//search by each variable?
// import { eventNumberContext } from "../../App";
import { useContext } from "react";
import EventList from "../page elements/EventList";
// import SearchBar from "../page elements/SearchBar"
export default function Discover() {
    // const [currentEventNumber] = useContext(eventNumberContext);
    return (
        <section class="general" id="discover">
        <div class="max-width">
            <div class="general-content">
            <div class="title">Discover</div>
            <div class="event-buttons">
            <button class="btn" id="create-button"><a href="/create">Create Event</a></button>
            <span>
                    <button class="btn" id="update-button"><a href="/update">Update Event</a></button>
          </span>
          <div>
              <EventList />
          </div>
          <span>
              {/* <SearchBar /> */}
          </span>
          </div>
            {/* {     */}
                {/* currentEventNumber === 0 && */}
                {/* <div class="text-3">     */}
                {/* There are no events yet!     */}
                {/* </div> */}
            {/* } */}
                </div>
        </div>
    </section> 
    );
  }