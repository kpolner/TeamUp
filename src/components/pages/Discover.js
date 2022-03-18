//Discover page - it will lead to create and update. Main source of web API functionality
//buttons for create/update
//lists events
//search bar for events
//search by each variable?
export default function Discover() {
    return (
        <section class="general" id="discover">
        <div class="max-width">
            <div class="general-content">
            <div class="title">Discover</div>
            <div class="event-buttons">
            <button class="btn" id="create-button"><a href="/create">Create Event</a></button>
            <button class="btn" id="update-button"><a href="/update">Update Event</a></button>
            </div>    
                <div class="text-3">
                There are no events yet! This text should also be hidden when there is an event.    
                </div>
                <div class="text-3">
                To do:
                <ol>
                    <li>List all events</li>
                    <li>Get mapping functionality, dynamic search bar</li>
                    <li>Get mapping for each type (skill/sport/etc). Try making it with 1 search bar? Maybe have different buttons to swap what we're searching by?</li>
                    <li>Attend buttons on each posting, post mappings to make each user attend each event they want to</li>
                </ol>
                </div>
                </div>
        </div>
    </section> 
    );
  }