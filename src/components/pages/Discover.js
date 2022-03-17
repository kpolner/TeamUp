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
            <button type="button" class="event-button" id="create-button">Create Event</button><span>
            <button type="button" class="event-button" id="update-button">Update Event</button>
            </span>
                <div class="text-3">To do:
                <ol>
                    <li>buttons to create your own event and update it</li>
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